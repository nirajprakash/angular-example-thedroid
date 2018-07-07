import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { MdcDialog } from '@angular-mdc/web';



@Component({
    selector: 'aboutus-view',
    templateUrl: './aboutus.component.html',
    styleUrls: ['./aboutus.component.scss']
})
export class AboutUsComponent {

    constructor( private router:Router){
      
    }



}