import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  constructor() { }


  public async getAccessToken(codeParam:any) {
              
    await fetch("http://localhost:4000/getAccessToken?code=" + codeParam, {
    method: "GET"
    }).then((response) => {

        return response.json();
    }).then((data) => {
        console.log(data);
        if(data.access_token) {
          localStorage.setItem("accessToken", data.access_token);
        }
    })
  }

  public async getUserData() {
    console.log("GET USER DATA")
    await fetch("http://localhost:4000/getUserData", {
    method: "GET",
    headers: {
      "Authorization": "Bearer " + localStorage.getItem("accessToken") // Bearer ACCESSTOKEN
    }
    }).then((response) => {

      return response.json();
    }).then((data) => {
        localStorage.setItem("username", data.login)
    })
  }

  public async getRepoList() {
              
    return await fetch("http://localhost:4000/getRepoList?username=" + localStorage.getItem("username"), {
    method: "GET",
    headers: {
      "Authorization": "Bearer " + localStorage.getItem("accessToken") // Bearer ACCESSTOKEN
    }
    }).then((response) => response.json())
  }
  

  public async getRepository(repository: string) {
    console.log("GET REPO")
    return await fetch("http://localhost:4000/getRepository?username=" + localStorage.getItem("username") + "&repository=" + repository, {
    method: "GET",
    headers: {
      "Authorization": "Bearer " + localStorage.getItem("accessToken"), // Bearer ACCESSTOKEN
    }
    }).then((response) => response.json())

  }

  public async createRepository(repository: string) {
    console.log("CREATE REPO")
    await fetch("http://localhost:4000/createRepository?repository=" + repository, {
    method: "GET",
    headers: {
      "Authorization": "Bearer " + localStorage.getItem("accessToken"), // Bearer ACCESSTOKEN
    }
    }).then((response) => {

      return response.json();
    })
  }

  
  public async  getReference(repository:string) {
              
    console.log("GET REFERENCE")

    return await fetch("http://localhost:4000/getReference?username=" + localStorage.getItem("username") + "&repository=" + repository, {
    method: "GET",
    headers: {
      "Authorization": "Bearer " + localStorage.getItem("accessToken"), // Bearer ACCESSTOKEN
      "Content-Type": "application/json"
    },
    }).then((response) => response.json())
  }


  public async createTree(repository:string, tree:any) {
    console.log("CREATE TREE")

    var bodyObj = JSON.stringify({
      "content": tree
    });

    return await fetch("http://localhost:4000/createTree?username=" + localStorage.getItem("username") + "&repository=" + repository, {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("accessToken"), // Bearer ACCESSTOKEN
        "Content-Type": "application/json"
      },
      body: bodyObj,
      }).then((response) => response.json())
  }

  public async createCommit(repository:string, data:any,sha:any) {
    console.log("CREATE COMMIT")

    let parentCommitsha = sha;

    let bodyObj = JSON.stringify({
      "sha": parentCommitsha,
      "content": data
    });

    return await fetch("http://localhost:4000/createCommit?username=" + localStorage.getItem("username") + "&repository=" + repository, {
    method: "POST",
    headers: {
      "Authorization": "Bearer " + localStorage.getItem("accessToken"), // Bearer ACCESSTOKEN
      "Content-Type": "application/json"
    },
    body: bodyObj,
    }).then((response) => response.json())

  }

  public async updateReference(repository:string, data:any) {
    console.log("UPDATE REFERENCE")

    let bodyObj = JSON.stringify({
      "content": data
    });

    return await fetch("http://localhost:4000/updateReference?username=" + localStorage.getItem("username") + "&repository=" + repository, {
    method: "POST",
    headers: {
      "Authorization": "Bearer " + localStorage.getItem("accessToken"), // Bearer ACCESSTOKEN
      "Content-Type": "application/json"
    },
    body: bodyObj,
    }).then((response) => response.json())

  }


  public async getRepositoryAsTar(repository:string) {
    console.log("GET TAR URL")
    
    return await fetch("http://localhost:4000/getRepositoryAsTar?username=" + localStorage.getItem("username") + "&repository=" + repository, {
    method: "GET",
    headers: {
      "Authorization": "Bearer " + localStorage.getItem("accessToken") // Bearer ACCESSTOKEN
    }
    }).then((response) => response.json())
    
  }

  public async getTar(url:string) {
    console.log("GET TAR")

    return await fetch("http://localhost:4000/getTar?url=" + url, {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("accessToken") // Bearer ACCESSTOKEN
      }
    })
    
  }

}
