import { Component, Input } from '@angular/core';

@Component({
  selector: 'top-work-web',
  templateUrl: './top-work-web.component.html',
  styleUrls: ['./top-work-web.component.scss']
})
export class TopWorkWebComponent {
  _mClassBackground: string = "mdc-theme--primary-bg";

  _mLink: string="";
  @Input("link") set link(value: string) {
    this._mLink = value;
    
  }

 
  @Input("imagePath") set imagePath(value: string) {
    this._mImagePath = value;
    
  }

  @Input("bgColorClass") set bgColor(value: string) {  
    this._mClassBackgroundColor =value;
  }
  @Input("projectTitleField") set projectTitle(value: string) {
    this._mProjectTitleField = value;


  }
  @Input("projectSubTitleField") set projecSUbtTitle(value: string) {
    this._mProjectSubTitleField = value;

  }
  

  _mClassBackgroundColor: string ;
  _mImagePath: string;
  _mProjectTitleField: string;
  _mProjectSubTitleField:string;
 }