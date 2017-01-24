import { Component , OnInit , ViewChild , ElementRef , AfterViewInit , Renderer} from '@angular/core';
import { FormBuilder , FormControl , FormGroup , Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';

import { CategoryService } from './category.service';
import { Category } from '../viewModels/Category';

import { ActivatedRoute , Router } from '@angular/router';


@Component({
selector:'',
templateUrl:'./app/category/add.component.html'

})

export class AddComponent implements OnInit , AfterViewInit {

    private fg:FormGroup;
    private errorMessage:string;

    @ViewChild('name') name: ElementRef;

    constructor( private formBuilder:FormBuilder , 
                 private service:CategoryService , 
                 private title:Title ,
                 private renderer:Renderer,
                 private router: Router,
                 private route: ActivatedRoute) { }

    ngAfterViewInit() 
    {
        this.renderer.invokeElementMethod(this.name.nativeElement,'focus');
    }

    ngOnInit() {

      this.fg =  this.formBuilder.group({
                                "name":["" , Validators.compose([Validators.required])],
                                "description":["", Validators.compose([Validators.required])],
                                "image_url":["", Validators.compose([Validators.required])]
                            });

     this.title.setTitle('Add Category');                       

    }

    onAdd() {

        if(this.fg.invalid) {
            this.errorMessage = 'Enter values for all fields';
        }
        else {

            $.blockUI();
            this.service.addCategory(this.fg.value)
                        .subscribe({
                                    next: (data) => { 
                                        $.unblockUI();
                                        this.router.navigate(['/categories/']);
                                    },
                                    error: (err) => { $.unblockUI(); }
                                  });
        }        
    }
}
