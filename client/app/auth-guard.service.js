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
import { Router } from '@angular/router';
import { UserService } from './user.service';
var AuthGuard = (function () {
    function AuthGuard(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    AuthGuard.prototype.ngOnInit = function () {
        //return true;
    };
    AuthGuard.prototype.canActivate = function (route, state) {
        console.log('userService.getOAuthToken()', this.userService.getOAuthToken());
        if (this.userService.getOAuthToken() == null || this.userService.getOAuthToken() == '') {
            this.router.navigate(['/login']);
            return false;
        }
        else {
            console.log('Can Activate');
            return true;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Router,
        UserService])
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=auth-guard.service.js.map