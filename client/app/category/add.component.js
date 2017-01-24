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
import { Title } from '@angular/platform-browser';
import { CategoryService } from './category.service';
import { ActivatedRoute, Router } from '@angular/router';
var AddComponent = (function () {
    function AddComponent(formBuilder, service, title, renderer, router, route) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.title = title;
        this.renderer = renderer;
        this.router = router;
        this.route = route;
    }
    AddComponent.prototype.ngAfterViewInit = function () {
        this.renderer.invokeElementMethod(this.name.nativeElement, 'focus');
    };
    AddComponent.prototype.ngOnInit = function () {
        this.fg = this.formBuilder.group({
            "name": ["", Validators.compose([Validators.required])],
            "description": ["", Validators.compose([Validators.required])],
            "image_url": ["", Validators.compose([Validators.required])]
        });
        this.title.setTitle('Add Category');
    };
    AddComponent.prototype.onAdd = function () {
        var _this = this;
        if (this.fg.invalid) {
            this.errorMessage = 'Enter values for all fields';
        }
        else {
            $.blockUI();
            this.service.addCategory(this.fg.value)
                .subscribe({
                next: function (data) {
                    $.unblockUI();
                    _this.router.navigate(['/categories/']);
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
        templateUrl: './app/category/add.component.html'
    }),
    __metadata("design:paramtypes", [FormBuilder,
        CategoryService,
        Title,
        Renderer,
        Router,
        ActivatedRoute])
], AddComponent);
export { AddComponent };
//# sourceMappingURL=add.component.js.map