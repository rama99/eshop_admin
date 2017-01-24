import { Injectable , OnInit } from '@angular/core';

@Injectable()
export class AppService implements OnInit {

    public blnDisplayMenu:boolean;

    constructor() { 
         this.blnDisplayMenu = true;
    }

    ngOnInit() {
       
    }
}