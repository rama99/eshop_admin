import { Component , Injectable , OnInit } from '@angular/core';

import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
    selector:'',
    templateUrl:'./logout.component.html'
})

export class LogoutComponent {

    constructor( private userService:UserService ,
                 private router:Router) { }

   ngOnInit() {
       this.userService.logOut();
       this.router.navigate(['login']);
   }
}
