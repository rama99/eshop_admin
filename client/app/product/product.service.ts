import { Injectable } from '@angular/core';
import { Http , RequestOptions , Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Product } from '../viewModels/Product';
import { UserService } from '../user.service';

@Injectable()
export class ProductService {

    constructor(private http:Http ,
                private userService:UserService) { }

    addProduct(product:Product) {

        let headers = new Headers();
        headers.append('Content-Type' ,'application/json');
        headers.append('Authorization' , "Bearer " + this.userService.getOAuthToken()); 

        return this.http.post('http://localhost:58543/api/products',JSON.stringify(product),{headers:headers})
        .map(data => data.json());

    }

    getProductsByCategoryID(id:number):Observable<Array<Product>> {

     let headers = new Headers();

     headers.append('Content-Type',  'application/json');

     headers.append('Authorization',  "Bearer " + this.userService.getOAuthToken());

     let options = new RequestOptions({ headers: headers });  

     return  this.http.get('http://localhost:58543/api/categories/' + id + '/products' , {headers:headers})
                     .map(data => data.json());

    }
 

}