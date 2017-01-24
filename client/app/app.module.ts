import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule , RequestOptions , XHRBackend } from '@angular/http';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
//import { CategoriesComponent } from './category/categories.component';
import { LoginComponent } from './login.component';
import { LogoutComponent } from './logout.component';

import { HttpService } from './http.service';
import { UserService } from './user.service';
import { AppService } from './app.service';

import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';

import { AuthGuard } from './auth-guard.service';

@NgModule({
imports:[ BrowserModule , 
          HttpModule , 
          FormsModule , 
          ReactiveFormsModule , 
          CategoryModule ,
          ProductModule ,
          RouterModule.forRoot([
              {path:'' , canActivate:[AuthGuard], component:HomeComponent},
              {path: 'about' , canActivate:[AuthGuard] , component: AboutComponent},
              {path: 'login' , component:LoginComponent},
              {path:'logout' , component:LogoutComponent}
          ]) ],
exports:[],
declarations:[AppComponent , HomeComponent , AboutComponent , LoginComponent , LogoutComponent],
providers:[ 
  AppService ,
  UserService ,
  AuthGuard ,
  {
      provide: HttpService,
      useFactory: (backend: XHRBackend, options: RequestOptions) => {
        return new HttpService(backend, options);
      },
      deps: [XHRBackend, RequestOptions]
    }],
bootstrap:[AppComponent]

})

export class AppModule { }

