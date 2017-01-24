import { Component , OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { CategoryService } from './category.service';
import { Category } from '../viewModels/Category';

//import 'jquery';

@Component({
    selector:'',
    templateUrl:'./app/category/all.component.html'
})


export class AllComponent implements  OnInit{

    categories:Array<Category>;
    details:Category
    
    constructor(private title:Title , private service: CategoryService) { }

    ngOnInit()
    {
        this.title.setTitle('Categories');

        $.blockUI();

        this.service.getCategories().subscribe({
            next: (data) => { this.categories = data; $.unblockUI();  },
            error: (err) => { }
        })
    }

    categoryDetails(category:Category) {
        this.details = category;
    }

}