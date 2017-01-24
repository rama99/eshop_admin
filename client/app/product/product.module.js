var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { AllComponent } from './all.component';
import { AddComponent } from './add.component';
import { ProductService } from './product.service';
import { AuthGuard } from '../auth-guard.service';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
var ProductModule = (function () {
    function ProductModule() {
    }
    return ProductModule;
}());
ProductModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild([
                { path: 'products', canActivate: [AuthGuard], component: ProductsComponent, children: [
                        { path: '', component: AllComponent },
                        { path: 'add', component: AddComponent }
                    ] }
            ]),
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            ToastModule],
        exports: [],
        providers: [ProductService],
        declarations: [ProductsComponent, AllComponent, AddComponent]
    })
], ProductModule);
export { ProductModule };
//# sourceMappingURL=product.module.js.map