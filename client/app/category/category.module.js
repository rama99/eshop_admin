var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoriesComponent } from './categories.component';
import { AllComponent } from './all.component';
import { AddComponent } from './add.component';
import { CategoryService } from './category.service';
import { AuthGuard } from '../auth-guard.service';
var CategoryModule = (function () {
    function CategoryModule() {
    }
    return CategoryModule;
}());
CategoryModule = __decorate([
    NgModule({
        imports: [CommonModule,
            RouterModule.forChild([
                { path: 'categories', canActivate: [AuthGuard], component: CategoriesComponent, children: [
                        { path: '', component: AllComponent },
                        { path: 'add', component: AddComponent }
                    ] }
            ]),
            FormsModule,
            ReactiveFormsModule],
        exports: [],
        declarations: [CategoriesComponent, AllComponent, AddComponent],
        providers: [CategoryService]
    })
], CategoryModule);
export { CategoryModule };
//# sourceMappingURL=category.module.js.map