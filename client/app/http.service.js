var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
import { Http, XHRBackend, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
var HttpService = (function (_super) {
    __extends(HttpService, _super);
    function HttpService(backend, options) {
        var _this = this;
        var token = localStorage.getItem('auth_token'); // your custom token getter function here
        options.headers.set('Authorization', "Bearer " + token);
        _this = _super.call(this, backend, options) || this;
        return _this;
    }
    HttpService.prototype.request = function (url, options) {
        var token = localStorage.getItem('auth_token');
        if (typeof url === 'string') {
            if (!options) {
                // let's make option object
                options = { headers: new Headers() };
            }
            options.headers.set('Authorization', "Bearer " + token);
        }
        else {
            // we have to add the token to the url object
            url.headers.set('Authorization', "Bearer " + token);
        }
        return _super.prototype.request.call(this, url, options).catch(this.catchAuthError(this));
    };
    HttpService.prototype.catchAuthError = function (self) {
        // we have to pass HttpService's own instance here as `self`
        return function (res) {
            console.log(res);
            if (res.status === 401 || res.status === 403) {
                // if not authenticated
                console.log(res);
            }
            return Observable.throw(res);
        };
    };
    return HttpService;
}(Http));
HttpService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [XHRBackend, RequestOptions])
], HttpService);
export { HttpService };
//# sourceMappingURL=http.service.js.map