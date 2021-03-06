var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, RequestOptions, XHRBackend } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        imports: [BrowserModule,
            HttpModule,
            FormsModule,
            ReactiveFormsModule,
            CategoryModule,
            ProductModule,
            RouterModule.forRoot([
                { path: '', canActivate: [AuthGuard], component: HomeComponent },
                { path: 'about', canActivate: [AuthGuard], component: AboutComponent },
                { path: 'login', component: LoginComponent },
                { path: 'logout', component: LogoutComponent }
            ])],
        exports: [],
        declarations: [AppComponent, HomeComponent, AboutComponent, LoginComponent, LogoutComponent],
        providers: [
            AppService,
            UserService,
            AuthGuard,
            {
                provide: HttpService,
                useFactory: function (backend, options) {
                    return new HttpService(backend, options);
                },
                deps: [XHRBackend, RequestOptions]
            }
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map