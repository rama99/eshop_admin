import { Injectable , OnInit } from '@angular/core';
import { Http , RequestOptions , Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Login } from './viewModels/Login';

@Injectable()
export class UserService {

constructor(private http: Http) { }

ngOnInit() {

}

login(login:Login):Observable<boolean> {

    let headers = new Headers();
    headers.append('Content-Type' , 'application/x-www-form-urlencoded');

    //login.grant_type = "password";
    let send = "userName=" + login.userName + "&password=" + login.password + "&grant_type=" + login.grant_type

    return this.http.post('http://localhost:58543/token' , send , {headers: headers})
               .map(data => {
                               let serverData = data.json();
                               if(serverData.hasOwnProperty('error')) {
                                   return false;
                               }
                               else 
                               {
                                   // store the token in localstorage
                                   this.setAuthToken(serverData.access_token);
                                   return true;
                               }
                            })
                    .catch((err) => err );             

}

logOut() {
    console.log('logout');
localStorage.removeItem("access_token");
}

isValidUser() {

}

getOAuthToken() {
return localStorage.getItem("access_token");
}

setAuthToken(token:string) {
localStorage.setItem("access_token" , token);
}

}