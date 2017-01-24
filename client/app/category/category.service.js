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
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpService } from '../http.service';
import { UserService } from '../user.service';
var CategoryService = (function () {
    function CategoryService(httpService, http, userService) {
        this.httpService = httpService;
        this.http = http;
        this.userService = userService;
    }
    CategoryService.prototype.ngOnInit = function () {
        console.log('ngOnInit');
    };
    CategoryService.prototype.getCategories = function () {
        var headers = new Headers({ 'Accept': 'application/json' });
        headers.append('Authorization', "Bearer " + this.userService.getOAuthToken());
        var options = new RequestOptions({ headers: headers });
        return this.http.get('http://localhost:58543/api/categories', options)
            .map(function (data) { return data.json(); });
    };
    CategoryService.prototype.addCategory = function (category) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "Bearer " + this.userService.getOAuthToken());
        return this.http.post('http://localhost:58543/api/categories', JSON.stringify(category), { headers: headers })
            .map(function (data) { return data.json(); });
    };
    return CategoryService;
}());
CategoryService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpService,
        Http,
        UserService])
], CategoryService);
export { CategoryService };
//# sourceMappingURL=category.service.js.map