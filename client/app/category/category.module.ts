import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { CategoriesComponent } from  './categories.component';
import { AllComponent } from './all.component';
import { AddComponent } from './add.component';

import { CategoryService } from './category.service';
import { AuthGuard } from '../auth-guard.service';

@NgModule({
imports:[ CommonModule ,
          RouterModule.forChild([
                  {path: 'categories' , canActivate:[AuthGuard], component: CategoriesComponent , children: [
                  {path:'' , component: AllComponent},
                  {path:'add' , component: AddComponent}
              ]}
          ]),
          FormsModule,
          ReactiveFormsModule ],
exports:[],
declarations:[CategoriesComponent , AllComponent , AddComponent],
providers:[CategoryService]
})

export class CategoryModule { }