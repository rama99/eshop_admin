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
import { CategoryService } from './category.service';
//import 'jquery';
var AllComponent = (function () {
    function AllComponent(title, service) {
        this.title = title;
        this.service = service;
    }
    AllComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title.setTitle('Categories');
        $.blockUI();
        this.service.getCategories().subscribe({
            next: function (data) { _this.categories = data; $.unblockUI(); },
            error: function (err) { }
        });
    };
    AllComponent.prototype.categoryDetails = function (category) {
        this.details = category;
    };
    return AllComponent;
}());
AllComponent = __decorate([
    Component({
        selector: '',
        templateUrl: './app/category/all.component.html'
    }),
    __metadata("design:paramtypes", [Title, CategoryService])
], AllComponent);
export { AllComponent };
//# sourceMappingURL=all.component.js.map