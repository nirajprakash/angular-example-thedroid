import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'home-need-help-view',
  templateUrl: './home-need-help.component.html',
  styleUrls: ['./home-need-help.component.scss']
})
export class HomeNeedHelpComponent implements OnInit {

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
