import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'home-our-gurantee-view',
  templateUrl: './home-our-gurantee.component.html',
  styleUrls: ['./home-our-gurantee.component.scss']
})
export class HomeOurGuranteeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   
  }
  @Input("hoverColorClass") set hoverColor(value: string) {

    console.log(value);
    this._mClassHoverColor =value;
  }
  
  _mClassIntugineHoverColor: string = 'tdw-hover-card-up-intugine';
  _mClassPepstudyHoverColor: string = 'tdw-hover-card-up-pepstudy';
  _mClassSignzyHoverColor: string = 'tdw-hover-card-up-signzy';
  _mClassXpediHoverColor: string = 'tdw-hover-card-up-xpedi';
  _mClassHoverColor: string = 'tdw-hover-card-up';
}
