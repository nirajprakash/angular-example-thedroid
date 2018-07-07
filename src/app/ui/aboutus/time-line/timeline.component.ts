import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { MdcDialog } from '@angular-mdc/web';



@Component({
    selector: 'timeline-view',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {

    constructor( private router:Router){
      
    }

    onClickOpenLink(){
        console.log("clicked");
        
        this.router.navigate(['/home/top-works']);
      }


}