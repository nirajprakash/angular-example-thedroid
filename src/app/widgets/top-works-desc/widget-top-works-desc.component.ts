import { Component, Input } from '@angular/core';

@Component({
  selector: 'widget-top-works-desc-card',
  templateUrl: './widget-top-works-desc.component.html',
  styleUrls: ['./widget-top-works-desc.component.scss']
})
export class WidgetTopWorksDescComponent {
  _mClassBackground: string = "mdc-theme--primary-bg";


 
  @Input("imagePath") set imagePath(value: string) {
    this._mImagePath = value;
    
  }
  _mImagePath: string="/assets/img/intugine_logo-final-01@2x.png";


 }