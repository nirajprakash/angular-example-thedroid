import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'technology-item-view',
  templateUrl: './technology-item.component.html',
  styleUrls: ['./technology-item.component.scss']
})
export class TechnologyItemComponent implements OnInit {

  _mTech = null;
  constructor() { }

  ngOnInit() {

  }

  @Input() set model(value:any){
    // "id": "114",
    //   "name": "LeakCanary",
    //   "detail": "A memory leak detection library for Android and Java....",
    //   "logo": "assets/img/leak-canary.png",
    //   "link": "https://github.com/nirajprakash/porfolio/blob/master/src/app/ui/onepage/onepage.component.html",
    //   "tab": "android"

    this._mTech = value;

  }
  @Input("hoverColorClass") set hoverColor(value: string) {

    console.log(value);
    this._mClassHoverColor = value;
  }

  _mClassIntugineHoverColor: string = 'tdw-hover-card-up-intugine';
  _mClassPepstudyHoverColor: string = 'tdw-hover-card-up-pepstudy';
  _mClassSignzyHoverColor: string = 'tdw-hover-card-up-signzy';
  _mClassXpediHoverColor: string = 'tdw-hover-card-up-xpedi';
  _mClassHoverColor: string = 'tdw-hover-card-up';
}
