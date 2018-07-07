import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'contact-view',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  //name: FormContrlName

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
