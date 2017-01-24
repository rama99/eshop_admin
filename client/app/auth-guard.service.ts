import { Injectable , OnInit } from '@angular/core';

import { CanActivate , 
         Router ,
         ActivatedRouteSnapshot ,
         RouterStateSnapshot} from '@angular/router';

import { UserService } from './user.service';        

@Injectable()
export class AuthGuard implements CanActivate , OnInit{

    constructor( private router:Router , 
                 private userService:UserService) { }

    ngOnInit() {
        
        //return true;
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        console.log('userService.getOAuthToken()' , this.userService.getOAuthToken())
        if(this.userService.getOAuthToken() == null || this.userService.getOAuthToken() == '') {
            this.router.navigate(['/login']);
            return false;
        }
        else 
        {
            console.log('Can Activate');
            return true;
        }
    }
}