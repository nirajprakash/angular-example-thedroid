import { Component, Input } from '@angular/core';

@Component({
  selector: 'top-work-mobile',
  templateUrl: './top-work-mobile.component.html',
  styleUrls: ['./top-work-mobile.component.scss']
})
export class TopWorkMobileComponent {

  _mLink: string="";
  @Input("link") set link(value: string) {
    this._mLink = value;
    
  }

 
  @Input("firstImagePath") set firstimagePath(value: string) {
    this._mfirstImagePath = value;
    
  }
  
 
  @Input("secondImagePath") set secondimagePath(value: string) {
    this._msecondImagePath = value;
    
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
  _mfirstImagePath: string;
  _msecondImagePath: string;
  _mProjectTitleField: string;
  _mProjectSubTitleField:string;
 }