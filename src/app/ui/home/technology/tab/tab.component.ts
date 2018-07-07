import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable ,  Subscription, interval } from 'rxjs';

@Component({
  selector: 'tab-view',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  _mActiveAndroid: boolean = true;
  _mActiveWeb: boolean = false;
  _mActiveBackend: boolean = false;
  _mActiveDesign: boolean = false;

  mIntervalFn: Subscription;
  @Output()
  onTabSelect: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {

    this.mIntervalFn = interval(3000)
      .subscribe((val) => {
        if (this._mActiveAndroid) {
          this.clicked("web");
        } else if (this._mActiveWeb) {
          this.clicked("backend");
        } else if (this._mActiveBackend) {
          this.clicked("design");
        } else if (this._mActiveDesign) {
          this.clicked("android");
        }
      });

  }
  @Input("hoverColorClass") set hoverColor(value: string) {

    // console.log(value);
  }


  onClicked(name: string) {
    this.mIntervalFn.unsubscribe();
    this.clicked(name);
  }

  clicked(name: string) {
    if (name == "web") {
      this._mActiveAndroid = false;
      this._mActiveWeb = true;
      this._mActiveBackend = false;
      this._mActiveDesign = false;
      this.onTabSelect.emit("web");
    } else if (name == "backend") {

      this._mActiveAndroid = false;
      this._mActiveWeb = false;
      this._mActiveBackend = true;
      this._mActiveDesign = false;
      this.onTabSelect.emit("backend");
    } else if (name == "design") {

      this._mActiveAndroid = false;
      this._mActiveWeb = false;
      this._mActiveBackend = false;
      this._mActiveDesign = true;
      this.onTabSelect.emit("design");
    } else {

      this._mActiveAndroid = true;
      this._mActiveWeb = false;
      this._mActiveBackend = false;
      this._mActiveDesign = false;

      this.onTabSelect.emit("android");
    }

    //    console.log(name);

  }

}
