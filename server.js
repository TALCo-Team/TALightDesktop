var express = require('express');
var cors = require('cors');
const zlib = require("zlib");

const fetch = (...args) =>
    import('node-fetch').then(({default: fetch}) => fetch(...args));

var bodyParser = require('body-parser');

const CLIENT_ID = "8fd3343f822c2429ad95";
const CLIENT_SECRET = "1f0e3e32406a0793abe04ec3eb0261a81732b77f";

var app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

async function fetchWithTimeoutAndRetry(resource, options = {}, n) {
    console.log("N: ", n)
    const { timeout = 8000 } = options;
    
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    try {
        const response = await fetch(resource, {
            ...options,
            signal: controller.signal  
          });
          clearTimeout(id);
        
          return response;

    } catch(err) {
        if (n === 1 || n < 1) throw err;
        return await fetchWithTimeoutAndRetry(resource, options, n - 1);
    }
  
  }


app.get('/getAccessToken', async function (req, res) {

    console.log("SERVER: GET ACCESS TOKEN")
    
    const params = "?client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRET + "&code=" + req.query.code;
    
    try {
        const response = await fetchWithTimeoutAndRetry("https://github.com/login/oauth/access_token" + params, {
            method: "POST",
            headers: { 
                'Accept': "application/json",
            }
        }, 3);

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.log(error);
    }         
});


app.get('/getUserData', async function (req, res) {
    
    console.log("SERVER: GET USER DATA")

      try {
        const response = await fetchWithTimeoutAndRetry("https://api.github.com/user" , {
            method: "GET",
            headers: { 
                'Authorization': req.get("Authorization"), //Bearer ACCESSTOKEN
            },
        }, 3);

        const data = await response.json();
        res.json(data);

      } catch (error) {
        console.log(error);
      }
});


app.get('/getRepoList', async function (req, res) {

    console.log("SERVER: GET REPO LIST")
    
    try {
        const response = await fetchWithTimeoutAndRetry("https://api.github.com/user/repos" , {
            method: "GET",
            headers: { 
                'Authorization': req.get("Authorization"), //Bearer ACCESSTOKEN
                'Accept': 'application/vnd.github+json',
                'X-GitHub-Api-Version': '2022-11-28'
            }
        }, 3);
        
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.log(error);
    }       
});

app.get('/getRepository', async function (req, res) {

    console.log("SERVER: GET REPO")
    try {
        const response = await fetchWithTimeoutAndRetry("https://api.github.com/repos/" + req.query.username + "/" + req.query.repository, {
            method: "GET",
            headers: { 
                'Authorization': req.get("Authorization"), //Bearer ACCESSTOKEN
                'Accept': 'application/vnd.github+json',
                'X-GitHub-Api-Version': '2022-11-28'
            }
        }, 3);

        const data = await response.json();
        res.json(data);

    } catch (error) {
        console.log(error);
    }
});


app.get('/createRepository', async function (req, res) {

    console.log("SERVER: CREATE REPO")

    var bodyObj = JSON.stringify({
        "name": req.query.repository,
        "private": true,
        "auto_init": true,
        "description": "This is the default repository created by TALight Desktop to have your projects always with you!"
    });

    try {
        const response = await fetchWithTimeoutAndRetry("https://api.github.com/user/repos" , {
            method: "POST",
            headers: { 
            'Authorization': req.get("Authorization"), //Bearer ACCESSTOKEN
            'Accept': 'application/vnd.github+json',
            'X-GitHub-Api-Version': '2022-11-28'
            },
            body: bodyObj
        }, 3);

        const data = await response.json();
        res.json(data);

    } catch (error) {
        console.log(error);
    }
});


app.post('/uploadFile', async function (req, res) {

    console.log("SERVER: UPLOAD FILE")

    const date = new Date();
    const year  = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day   = String(date.getDate()).padStart(2, '0');
    const datejoin  = [day, month, year].join('/');

    const hour    = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const timejoin   = [hour, minutes, seconds].join(':');

    var bodyObj = JSON.stringify({
        "message": "Upload from TALight Desktop --> [" + datejoin + " " + timejoin + "]",
        "content": btoa(req.body.content)
    });

    try {
        const response = await fetchWithTimeoutAndRetry("https://api.github.com/repos/" + req.query.username + "/" + req.query.repository + "/contents/" + req.query.filename , {
            method: "PUT",
            headers: { 
                'Authorization': req.get("Authorization"), //Bearer ACCESSTOKEN
                'Accept': 'application/vnd.github+json',
                'X-GitHub-Api-Version': '2022-11-28',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: bodyObj
        }, 3);

        const data = await response.json();
        res.json(data);

    } catch (error) {
        console.log(error);
    }
});


app.get('/getReference', async function (req, res) {

    console.log("SERVER: GET LAST COMMIT")

    try {
        const response = await fetchWithTimeoutAndRetry("https://api.github.com/repos/" + req.query.username + "/" + req.query.repository + "/git/ref/heads/main" , {
            method: "GET",
            headers: { 
                'Authorization': req.get("Authorization"), //Bearer ACCESSTOKEN
                'Accept': 'application/vnd.github+json', 
                'X-GitHub-Api-Version': '2022-11-28',
            }
        }, 3);

        const data = await response.json();
        res.json(data);

    } catch (error) {
        console.log(error);
    }
});


app.post('/createTree', async function (req, res) {

    console.log("SERVER: CREATE TREE")

    var bodyObj = JSON.stringify({
        "tree": req.body.content
    });
    
    try {
        const response = await fetchWithTimeoutAndRetry("https://api.github.com/repos/" + req.query.username + "/" + req.query.repository + "/git/trees" , {
            method: "POST",
            headers: { 
                'Authorization': req.get("Authorization"), //Bearer ACCESSTOKEN
                'Accept': 'application/vnd.github+json',
                'X-GitHub-Api-Version': '2022-11-28',
            },
            body: bodyObj

        }, 3);

        const data = await response.json();
        res.json(data);

    } catch (error) {
        console.log(error);
    }
});


app.post('/createCommit', async function (req, res) {

    console.log("SERVER: CREATE COMMIT")

    const date = new Date();
    const year  = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day   = String(date.getDate()).padStart(2, '0');
    const datejoin  = [day, month, year].join('/');

    const hour    = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const timejoin   = [hour, minutes, seconds].join(':');

    var bodyObj = JSON.stringify({
        "message": "Upload from TALight Desktop --> [" + datejoin + " " + timejoin + "]",
        "tree": req.body.content,
        "parents": [req.body.sha]
    });
    
    try {
        const response = await fetchWithTimeoutAndRetry("https://api.github.com/repos/" + req.query.username + "/" + req.query.repository + "/git/commits" , {
            method: "POST",
            headers: { 
                'Authorization': req.get("Authorization"), //Bearer ACCESSTOKEN
                'Accept': 'application/vnd.github+json',
                'X-GitHub-Api-Version': '2022-11-28',
            },
            body: bodyObj

        }, 3);

        const data = await response.json();
        res.json(data);

    } catch (error) {
        console.log(error);
    }
});


app.post('/updateReference', async function (req, res) {

    console.log("SERVER: UPDATE REFERENCE")

    var bodyObj = JSON.stringify({
        "sha": req.body.content
    });
    
    try {
        const response = await fetchWithTimeoutAndRetry("https://api.github.com/repos/" + req.query.username + "/" + req.query.repository + "/git/refs/heads/main" , {
            method: "PATCH",
            headers: { 
                'Authorization': req.get("Authorization"), //Bearer ACCESSTOKEN
                'Accept': 'application/vnd.github+json',
                'X-GitHub-Api-Version': '2022-11-28',
            },
            body: bodyObj

        }, 3);

        console.log("NEW COMMIT DONE!")
        const data = await response.json();
        res.json(data);

    } catch (error) {
        console.log(error);
    }
});


app.get('/getRepositoryAsTar', async function (req, res) {

    console.log("SERVER: GET REPO AS TAR")

    try {
        const response = await fetchWithTimeoutAndRetry("https://api.github.com/repos/" + req.query.username + "/" + req.query.repository + "/tarball" , {
            method: "GET",
            headers: { 
                'Authorization': req.get("Authorization"), //Bearer ACCESSTOKEN
                'Accept': 'application/vnd.github+json', 
                'X-GitHub-Api-Version': '2022-11-28',
            },
        }, 3);

        res.json(response.url);

    } catch (error) {
        console.log(error);
    }
});


app.get('/getTar', async function (req, res) {

    console.log("SERVER: GET TAR")

    try {
        const response = await fetchWithTimeoutAndRetry(req.query.url , {
            method: "GET",
            headers: { 
                'Authorization': req.get("Authorization"), //Bearer ACCESSTOKEN
            },
        }, 3)

        const buffer = await response.arrayBuffer();

        zlib.gunzip(buffer, (err, content) => {
            if (err) {
              res.status(500).send('Error decompressing gzip file');
              return;
            }

            res.type('application/octet-stream')
            return res.end(content);
            
        });

    } catch (error) {
        console.log(error);
    }
    
});

app.listen(4000, function() {
    console.log("CORS server running on port 4000");
})
