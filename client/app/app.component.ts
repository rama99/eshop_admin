import { Component , OnInit , DoCheck , OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ActivatedRoute , UrlSegment } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AppService } from './app.service';

@Component({
selector:'my-app',
templateUrl:'app/app.component.html'
})

export class AppComponent implements  OnInit , OnDestroy{

    //url$: Observable<UrlSegment[]> = this.route.url;
   // isLoginPath$: Observable<Boolean> = this.route.url.map(url => url[0].path).map(path =>{ console.log('path' + path); return path === 'login'} );

    blnDisplayMenu:boolean;

    constructor( private title:Title ,
                 private route: ActivatedRoute  ,
                 private appService: AppService) { }

    ngOnInit() {
        console.log('AppComponent');        
        this.title.setTitle('eShop - Admin');
        this.blnDisplayMenu = this.appService.blnDisplayMenu;
        console.log('this.appService.blnDisplayMenu' , this.appService.blnDisplayMenu);

    }

    ngDoCheck() {
        //this.url$.subscribe(data => console.log('HERE   ' + data));
        this.blnDisplayMenu = this.appService.blnDisplayMenu;
        
    }

    ngOnDestroy() {
        console.log('root on destroy');
    }

}