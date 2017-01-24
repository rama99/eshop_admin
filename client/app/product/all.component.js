var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Renderer } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CategoryService } from '../category/category.service';
import { ProductService } from './product.service';
var AllComponent = (function () {
    function AllComponent(title, renderer, categoryService, productService) {
        this.title = title;
        this.renderer = renderer;
        this.categoryService = categoryService;
        this.productService = productService;
    }
    AllComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title.setTitle('Products');
        $.blockUI();
        this.categoryService.getCategories().subscribe({
            next: function (data) { _this.categories = data; $.unblockUI(); },
            error: function (err) { $.unblockUI(); }
        });
    };
    AllComponent.prototype.ngAfterViewInit = function () {
        //this.renderer.invokeElementMethod(this.category.nativeElement, focus'); 
    };
    AllComponent.prototype.onCategoryChange = function (categoryID) {
        var _this = this;
        if (categoryID != null && categoryID != '') {
            $.blockUI();
            this.productService.getProductsByCategoryID(categoryID).subscribe({
                next: function (data) { _this.products = data; $.unblockUI(); },
                error: function (err) { $.unblockUI(); }
            });
        }
        else {
            this.products = [];
        }
    };
    return AllComponent;
}());
AllComponent = __decorate([
    Component({
        selector: '',
        templateUrl: 'app/product/all.component.html'
    }),
    __metadata("design:paramtypes", [Title,
        Renderer,
        CategoryService,
        ProductService])
], AllComponent);
export { AllComponent };
//# sourceMappingURL=all.component.js.map