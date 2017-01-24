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
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.ngOnInit = function () {
    };
    UserService.prototype.login = function (login) {
        var _this = this;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        //login.grant_type = "password";
        var send = "userName=" + login.userName + "&password=" + login.password + "&grant_type=" + login.grant_type;
        return this.http.post('http://localhost:58543/token', send, { headers: headers })
            .map(function (data) {
            var serverData = data.json();
            if (serverData.hasOwnProperty('error')) {
                return false;
            }
            else {
                // store the token in localstorage
                _this.setAuthToken(serverData.access_token);
                return true;
            }
        })
            .catch(function (err) { return err; });
    };
    UserService.prototype.logOut = function () {
        console.log('logout');
        localStorage.removeItem("access_token");
    };
    UserService.prototype.isValidUser = function () {
    };
    UserService.prototype.getOAuthToken = function () {
        return localStorage.getItem("access_token");
    };
    UserService.prototype.setAuthToken = function (token) {
        localStorage.setItem("access_token", token);
    };
    return UserService;
}());
UserService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map