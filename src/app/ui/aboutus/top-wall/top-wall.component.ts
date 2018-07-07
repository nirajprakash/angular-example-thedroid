import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { MdcDialog } from '@angular-mdc/web';



@Component({
    selector: 'top-wall-view',
    templateUrl: './top-wall.component.html',
    styleUrls: ['./top-wall.component.scss']
})
export class TopWallComponent {

    constructor( private router:Router){
      
    }

    onClickOpenLink(){
        console.log("clicked");
        
        this.router.navigate(['/home/top-works']);
      }


}