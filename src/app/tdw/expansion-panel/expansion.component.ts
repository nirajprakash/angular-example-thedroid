import { Component, Input, ContentChild, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

import { ExpansionHeaderExpandedComponent } from './header-expanded.component';
import { ExpansionHeaderComponent } from './header.component';

@Component({
  selector: 'tdw-expansion',
  templateUrl: './expansion.component.html',
  host: {
    class: 'tdw-expansion'
  },
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./expansion.component.scss'],
})

export class ExpansionComponent {

  _isCollapsed: boolean = false;
  _isToggleCollapsed: boolean = false;
  @Input() set isCollapsed(val: boolean){
    console.log("isCollapsed: ", val);
    this._isCollapsed = val;
    this._isToggleCollapsed = val;



  } 
  @Input() sectionCollapsible: boolean = true;
  @Input() sectionTitle: string;
  @Input() padding: any = '1.8em';

  @Output() toggle = new EventEmitter();

  @ContentChild(ExpansionHeaderComponent) headerComp: ExpansionHeaderComponent;

  onSectionClicked(): void {
    

    this._isCollapsed = !this._isCollapsed;
    this.toggle.emit(this._isCollapsed);
  }

}
