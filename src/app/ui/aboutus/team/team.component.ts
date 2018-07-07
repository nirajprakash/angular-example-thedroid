import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { MdcDialog } from '@angular-mdc/web';



@Component({
    selector: 'team-view',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.scss']
})
export class TeamComponent {

    constructor( private router:Router){
      
    }

    onClickOpenLink(){
        console.log("clicked");
        
        this.router.navigate(['/home/top-works']);
      }


}