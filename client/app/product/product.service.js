var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { UserService } from '../user.service';
var ProductService = (function () {
    function ProductService(http, userService) {
        this.http = http;
        this.userService = userService;
    }
    ProductService.prototype.addProduct = function (product) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "Bearer " + this.userService.getOAuthToken());
        return this.http.post('http://localhost:58543/api/products', JSON.stringify(product), { headers: headers })
            .map(function (data) { return data.json(); });
    };
    ProductService.prototype.getProductsByCategoryID = function (id) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "Bearer " + this.userService.getOAuthToken());
        var options = new RequestOptions({ headers: headers });
        return this.http.get('http://localhost:58543/api/categories/' + id + '/products', { headers: headers })
            .map(function (data) { return data.json(); });
    };
    return ProductService;
}());
ProductService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http,
        UserService])
], ProductService);
export { ProductService };
//# sourceMappingURL=product.service.js.map