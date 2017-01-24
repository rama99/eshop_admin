import { Component , OnInit , AfterViewInit  , Renderer , ElementRef , ViewChild } from '@angular/core';
import { FormBuilder , FormControl , FormGroup , Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { ProductService } from './product.service';
import { CategoryService } from '../category/category.service';

import { Category } from '../viewModels/Category';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
selector:'',
templateUrl:'app/product/add.component.html'
})

export class AddComponent implements OnInit {

    private formGroup:FormGroup;
    private errorMessage:string;
    @ViewChild('name') name: ElementRef;
    private categories:Array<Category>;

    constructor(  private formBuilder:FormBuilder , 
                  private title:Title ,
                  private renderer:Renderer ,
                  private service: ProductService ,
                  private categoryService: CategoryService,
                  private toaster:ToastsManager ) { }

    ngOnInit() {

        this.formGroup =  this.formBuilder.group({
                                       "name":["" , Validators.compose([Validators.required])],
                                       "category_id":["" , Validators.compose([Validators.required])],
                                       "description":["" , Validators.compose([Validators.required])],
                                       "price":["" , Validators.compose([Validators.required])],
                                       "imageUrl":["" , Validators.compose([Validators.required])],
                                       "title":["" , Validators.compose([Validators.required])]
                          });

        this.title.setTitle('Add Product'); 
        this.renderer.invokeElementMethod(this.name.nativeElement, 'focus');

        $.blockUI();

        this.categoryService.getCategories().subscribe({
            next: (data) => { 
                this.categories = data; $.unblockUI();                
            },
            error: (err) => { $.unblockUI(); }
        });
    
              
    }

    onAddProduct() {

        if(this.formGroup.invalid) {

            console.log(this.formGroup.value);
            this.errorMessage = "Enter all values";
        }
        else 
        {
            $.blockUI();

            this.service.addProduct(this.formGroup.value)
                        .subscribe({
                            next: (data) => { 

                                 $.unblockUI(); 
                                 this.formGroup.reset();
                                 this.toaster.success('Product Added.');

                                },
                            error: (err) => { $.unblockUI(); }
                        });
        }
        
    }
}