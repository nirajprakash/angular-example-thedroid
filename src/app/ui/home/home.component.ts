import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { MdcDialog } from '@angular-mdc/web';



@Component({
    selector: 'home-view',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    ngOnInit(): void {
        //console.log(this.homeTop)
    }

    @ViewChild('homeTop')
    _mHomeTop;

    @ViewChild('home')
    _mHome;

    constructor(private router: Router) {

    }



    onClickOpenLink() {
        console.log("clicked");

        this.router.navigate(['/home/top-works']);
    }


}