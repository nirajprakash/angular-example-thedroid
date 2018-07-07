import { Component, Input } from '@angular/core';

@Component({
  selector: 'widget-cube-card',
  templateUrl: './widget-cube.component.html',
  styleUrls: ['./widget-cube.component.scss']
})
export class WidgetCubeComponent {
  _mClassBackground: string = "mdc-theme--primary-bg";


 
  @Input("imagePath") set imagePath(value: string) {
    this._mImagePath = value;
    
  }
  _mImagePath: string="/assets/img/intugine_logo-final-01@2x.png";


 }