import { Injectable , OnInit } from '@angular/core';
import { Http , RequestOptions , Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Category } from '../viewModels/Category';

import { HttpService } from '../http.service';
import { UserService } from '../user.service';

@Injectable()
export class CategoryService implements  OnInit{

    constructor( private httpService:HttpService , 
                 private http: Http ,
                 private userService:UserService) { }

    ngOnInit() {

        console.log('ngOnInit');        

    }

    getCategories():Observable<Array<Category>> {

     let headers = new Headers({ 'Accept': 'application/json' });
     headers.append('Authorization',  "Bearer " + this.userService.getOAuthToken());

     let options = new RequestOptions({ headers: headers });  

     return  this.http.get('http://localhost:58543/api/categories' , options)
                     .map(data => data.json());

    }

    addCategory(category:Category) {

        var headers = new Headers();
            headers.append('Content-Type' ,'application/json');
            headers.append('Authorization' , "Bearer " + this.userService.getOAuthToken()); 

        return this.http.post('http://localhost:58543/api/categories',JSON.stringify(category),{headers:headers})
        .map(data => data.json());       

    }   

  

}