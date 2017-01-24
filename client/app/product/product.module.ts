import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './products.component';
import { AllComponent } from './all.component';
import { AddComponent } from './add.component';

import { ProductService } from './product.service';
import { AuthGuard } from '../auth-guard.service';

import { ToastModule } from 'ng2-toastr/ng2-toastr';

@NgModule({
imports:[ RouterModule.forChild([
    {path:'products' , canActivate:[AuthGuard], component: ProductsComponent , children: [
        {path:'' , component:AllComponent},
        {path:'add', component:AddComponent }
    ]}
   ]) 
   , CommonModule
   , FormsModule 
   , ReactiveFormsModule
   , ToastModule],
exports:[],
providers:[ProductService],
declarations:[ProductsComponent , AllComponent , AddComponent]

})

export class ProductModule { }
