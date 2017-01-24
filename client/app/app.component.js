var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AppService } from './app.service';
var AppComponent = (function () {
    function AppComponent(title, route, appService) {
        this.title = title;
        this.route = route;
        this.appService = appService;
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('AppComponent');
        this.title.setTitle('eShop - Admin');
        this.blnDisplayMenu = this.appService.blnDisplayMenu;
        console.log('this.appService.blnDisplayMenu', this.appService.blnDisplayMenu);
    };
    AppComponent.prototype.ngDoCheck = function () {
        //this.url$.subscribe(data => console.log('HERE   ' + data));
        this.blnDisplayMenu = this.appService.blnDisplayMenu;
    };
    AppComponent.prototype.ngOnDestroy = function () {
        console.log('root on destroy');
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Component({
        selector: 'my-app',
        templateUrl: 'app/app.component.html'
    }),
    __metadata("design:paramtypes", [Title,
        ActivatedRoute,
        AppService])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map