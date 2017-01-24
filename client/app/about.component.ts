import { Component , OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector:'',
    templateUrl:'app/about.component.html'
})


export class AboutComponent implements OnInit {

constructor(private Title:Title) { }

ngOnInit() {
 this.Title.setTitle('About');
}

}