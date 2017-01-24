import { Component , 
         OnInit , 
         AfterViewInit , 
         ElementRef , 
         Renderer } from '@angular/core';

import { Title } from '@angular/platform-browser';

import { FormBuilder , FormControl , FormGroup } from '@angular/forms';

import { CategoryService } from '../category/category.service';
import { ProductService } from './product.service';
import { Category } from '../viewModels/Category';
import { Product } from '../viewModels/Product';

@Component({
selector:'',
templateUrl:'app/product/all.component.html'
})


export class AllComponent implements OnInit , AfterViewInit{

    categories:Array<Category>;
    products:Array<Product>;

    constructor(private title:Title ,
                private renderer:Renderer,
                private categoryService:CategoryService ,
                private productService:ProductService ) { }

    ngOnInit() {

        this.title.setTitle('Products');
        $.blockUI();

        this.categoryService.getCategories().subscribe({
            next: (data) => { this.categories = data; $.unblockUI(); },
            error: (err) => { $.unblockUI(); }
        });

    }

    ngAfterViewInit() {
          //this.renderer.invokeElementMethod(this.category.nativeElement, focus'); 
    }

    onCategoryChange(categoryID) {        
           

        if(categoryID != null && categoryID != '') {
            $.blockUI(); 
            this.productService.getProductsByCategoryID(categoryID).subscribe({
            next: (data) => { this.products  = data; $.unblockUI(); },
            error: (err) => { $.unblockUI(); }
        });
        }
        else {
            this.products  = [];
        }

    }
}