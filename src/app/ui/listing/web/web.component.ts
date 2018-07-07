import { Component, Input, ElementRef, HostBinding } from '@angular/core';

@Component({
  selector: 'listing-web-view',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss']
})
export class ListingWebComponent {




  _mLink: string;
  _mRtl : LayoutDirection= "ltr";
  _mClassCircle2: string = "mdc-color--grey-700";
  _mClassCircle1: string = "mdc-color--white";
  _mProjectWord: string = "";

  _mAppUrl: string;
  _mProjectDetail: string;
  
  @Input() set link(value: string) {
    this._mLink = value;
  }

  @Input() set appUrl(value: string) {
    this._mAppUrl = value;
  }



  @Input() set rtl(value: boolean) {
    if (value) {
      this._mRtl = "rtl"

    } else {
      this._mRtl = "ltr";

    }
  }

  @Input("imagePath") set firstimagePath(value: string) {
    this._mImagePath = value;
  }


  @Input("iconPath") set iconPath(value: string) {
    this._mIconPath = value;
  }


  @Input("secondImagePath") set secondimagePath(value: string) {
    this._msecondImagePath = value;

  }

  @Input("bgColorClass") set bgColor(value: string) {
    this._mClassBackgroundColor = value;
  }

  @Input() set circle1Class(value: string) {
    if (value) {
      this._mClassCircle1 = value;

    }
  }

  @Input() set circle2Class(value: string) {
    if (value) {
      this._mClassCircle2 = value;

    }
  }

  @Input("projectTitle") set projectTitle(value: string) {
    this._mProjectTitle = value;
    if (value) {
      this._mProjectWord = value.split(" ")[0];

    }


  }
  @Input("projectSubTitleField") set projecSUbtTitle(value: string) {
    this._mProjectSubTitleField = value;

  }

  @Input() set detail(value: string){
    this._mProjectDetail = value;
  }


  @Input("btnBackgroundColor") set btnBg(value: string) {
    this._mBtnBackgroundColor = value;
  }


  _mBtnBackgroundColor: string;
  _mIconPath: string;
  _mClassBackgroundColor: string;
  _mImagePath: string;
  _msecondImagePath: string;
  _mProjectTitle: string;
  _mProjectSubTitleField: string;

  constructor(
    public elementRef: ElementRef) {

  }

  isRtl (): boolean{
    return  getComputedStyle(this._getHostElement()).direction === 'rtl'
   }
 
//    @HostBinding('attr.dir')
//    get dir(): LayoutDirection {
//      return this._mRtl;
//    }
//    set dir(v: LayoutDirection) {
//      let old = this._mRtl;
//      this._mRtl = v;
// //     if (old != this._dir) {
//        //this.dirChange.emit(null);
//   //   }
//    }

   private _getHostElement() {
    return this.elementRef.nativeElement;
  }


}


export type LayoutDirection = 'ltr' | 'rtl';