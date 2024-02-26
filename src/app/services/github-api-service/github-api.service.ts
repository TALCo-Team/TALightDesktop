import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  private baseUrl: String = 'http://localhost:4000/'
  
  constructor() {}



  public async getAccessToken(codeParam:any) {
              
    await fetch(this.baseUrl+"getAccessToken?code=" + codeParam, {
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
    await fetch(this.baseUrl+"getUserData", {
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
              
    return await fetch(this.baseUrl+"getRepoList?username=" + localStorage.getItem("username"), {
    method: "GET",
    headers: {
      "Authorization": "Bearer " + localStorage.getItem("accessToken") // Bearer ACCESSTOKEN
    }
    }).then((response) => response.json())
  }
  

  public async getRepository(repository: string) {
    console.log("GET REPO")
    return await fetch(this.baseUrl+"getRepository?username=" + localStorage.getItem("username") + "&repository=" + repository, {
    method: "GET",
    headers: {
      "Authorization": "Bearer " + localStorage.getItem("accessToken"), // Bearer ACCESSTOKEN
    }
    }).then((response) => response.json())

  }

  public async createRepository(repository: string) {
    console.log("CREATE REPO")
    await fetch(this.baseUrl+"createRepository?repository=" + repository, {
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

    return await fetch(this.baseUrl+"getReference?username=" + localStorage.getItem("username") + "&repository=" + repository, {
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

    return await fetch(this.baseUrl+"createTree?username=" + localStorage.getItem("username") + "&repository=" + repository, {
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

    return await fetch(this.baseUrl+"createCommit?username=" + localStorage.getItem("username") + "&repository=" + repository, {
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

    return await fetch(this.baseUrl+"updateReference?username=" + localStorage.getItem("username") + "&repository=" + repository, {
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
    
    return await fetch(this.baseUrl+"getRepositoryAsTar?username=" + localStorage.getItem("username") + "&repository=" + repository, {
    method: "GET",
    headers: {
      "Authorization": "Bearer " + localStorage.getItem("accessToken") // Bearer ACCESSTOKEN
    }
    }).then((response) => response.json())
    
  }

  public async getTar(url:string) {
    console.log("GET TAR")

    return await fetch(this.baseUrl+"getTar?url=" + url, {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("accessToken") // Bearer ACCESSTOKEN
      }
    })
    
  }

}
