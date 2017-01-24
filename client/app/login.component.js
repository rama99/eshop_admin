var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ElementRef, Renderer } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';
import { AppService } from './app.service';
import { Title } from '@angular/platform-browser';
var LoginComponent = (function () {
    function LoginComponent(title, formBuilder, userService, renderer, appService, router, route) {
        this.title = title;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.renderer = renderer;
        this.appService = appService;
        this.router = router;
        this.route = route;
    }
    LoginComponent.prototype.ngAfterViewInit = function () {
        this.renderer.invokeElementMethod(this.userName.nativeElement, 'focus');
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.title.setTitle('Sign In');
        this.formGroup = this.formBuilder.group({
            "userName": ["", Validators.compose([Validators.required])],
            "password": ["", Validators.compose([Validators.required])],
            "grant_type": ["password"]
        });
        this.appService.blnDisplayMenu = false;
    };
    LoginComponent.prototype.onSignIn = function (login) {
        var _this = this;
        if (this.formGroup.invalid) {
            this.errorMessage = "Enter UserName/Password";
        }
        else {
            this.userService.login(login).subscribe({
                next: function (data) {
                    if (data == true) {
                        _this.router.navigate(['']);
                    }
                    else {
                        _this.errorMessage = "Invalid userName / Password";
                    }
                },
                error: function (err) {
                    _this.errorMessage = "Invalid userName / Password";
                }
            });
        }
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        console.log('ngOnDestroy');
        this.appService.blnDisplayMenu = true;
    };
    return LoginComponent;
}());
__decorate([
    ViewChild('userName'),
    __metadata("design:type", ElementRef)
], LoginComponent.prototype, "userName", void 0);
LoginComponent = __decorate([
    Component({
        selector: '',
        templateUrl: 'app/login.component.html'
    }),
    __metadata("design:paramtypes", [Title,
        FormBuilder,
        UserService,
        Renderer,
        AppService,
        Router,
        ActivatedRoute])
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map