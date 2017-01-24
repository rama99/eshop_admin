var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Renderer, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ProductService } from './product.service';
import { CategoryService } from '../category/category.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
var AddComponent = (function () {
    function AddComponent(formBuilder, title, renderer, service, categoryService, toaster) {
        this.formBuilder = formBuilder;
        this.title = title;
        this.renderer = renderer;
        this.service = service;
        this.categoryService = categoryService;
        this.toaster = toaster;
    }
    AddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formGroup = this.formBuilder.group({
            "name": ["", Validators.compose([Validators.required])],
            "category_id": ["", Validators.compose([Validators.required])],
            "description": ["", Validators.compose([Validators.required])],
            "price": ["", Validators.compose([Validators.required])],
            "imageUrl": ["", Validators.compose([Validators.required])],
            "title": ["", Validators.compose([Validators.required])]
        });
        this.title.setTitle('Add Product');
        this.renderer.invokeElementMethod(this.name.nativeElement, 'focus');
        $.blockUI();
        this.categoryService.getCategories().subscribe({
            next: function (data) {
                _this.categories = data;
                $.unblockUI();
            },
            error: function (err) { $.unblockUI(); }
        });
    };
    AddComponent.prototype.onAddProduct = function () {
        var _this = this;
        if (this.formGroup.invalid) {
            console.log(this.formGroup.value);
            this.errorMessage = "Enter all values";
        }
        else {
            $.blockUI();
            this.service.addProduct(this.formGroup.value)
                .subscribe({
                next: function (data) {
                    $.unblockUI();
                    _this.formGroup.reset();
                    _this.toaster.success('Product Added.');
                },
                error: function (err) { $.unblockUI(); }
            });
        }
    };
    return AddComponent;
}());
__decorate([
    ViewChild('name'),
    __metadata("design:type", ElementRef)
], AddComponent.prototype, "name", void 0);
AddComponent = __decorate([
    Component({
        selector: '',
        templateUrl: 'app/product/add.component.html'
    }),
    __metadata("design:paramtypes", [FormBuilder,
        Title,
        Renderer,
        ProductService,
        CategoryService,
        ToastsManager])
], AddComponent);
export { AddComponent };
//# sourceMappingURL=add.component.js.map