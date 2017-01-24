import { Component , OnInit , ViewChild , ElementRef , Renderer , AfterViewInit , OnDestroy } from '@angular/core';
import { FormBuilder , FormControl , FormGroup , Validators } from '@angular/forms';
import { Router , ActivatedRoute } from '@angular/router';

import { Login } from './viewModels/Login';
import { UserService } from './user.service';
import { AppService } from './app.service';


import { Title } from '@angular/platform-browser';

@Component({
selector:'',
templateUrl:'app/login.component.html'
})


export class LoginComponent implements OnInit , AfterViewInit {

    formGroup:FormGroup;
    errorMessage:string;

    @ViewChild('userName') userName:ElementRef;

    constructor( private title:Title , 
                 private formBuilder:FormBuilder ,
                 private userService: UserService ,
                 private renderer: Renderer ,
                 private appService:AppService ,
                 private router:Router ,
                 private route:ActivatedRoute) { }

    ngAfterViewInit() 
    {
        this.renderer.invokeElementMethod(this.userName.nativeElement,'focus');
    }

    ngOnInit() {
        
        this.title.setTitle('Sign In');

       this.formGroup = this.formBuilder.group({
            "userName":["" , Validators.compose([Validators.required])],
            "password":["" , Validators.compose([Validators.required])],
            "grant_type":["password"]
        });

        this.appService.blnDisplayMenu = false;
    }

    onSignIn(login:Login) {       
        
        if(this.formGroup.invalid) {
            this.errorMessage = "Enter UserName/Password";
        }
        else 
        {

             this.userService.login(login).subscribe({
            next:  (data) => { 
                if(data == true) {
                    this.router.navigate(['']);
                }
                else {
                    this.errorMessage = "Invalid userName / Password";
                }
             },
            error: (err) => {
                this.errorMessage = "Invalid userName / Password";
             }
            });
        } 
    }

    ngOnDestroy() {
        console.log('ngOnDestroy');
        this.appService.blnDisplayMenu = true;
    }

}