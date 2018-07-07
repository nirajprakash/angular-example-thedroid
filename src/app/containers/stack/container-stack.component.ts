import { Component, ViewChild } from '@angular/core';

import { Location } from '@angular/common';
import { MdcDrawer } from '@angular-mdc/web';
import { Router } from '@angular/router';
@Component({
  selector: 'container-stack',
  templateUrl: './container-stack.component.html',
  styleUrls: ['./container-stack.component.scss']
})
export class ContainerStackComponent {

  _mRoute: string;


  _mRouteList = [
    {
      name: "Home",
      route: "home"
    },
    {
      name: "About",
      route: "about"
    }
    ,
    {
      name: "Projects",
      route: "listing"
    }
    ,
    {
      name: "Sensify",
      route: "sensify"
    },
    {
      name: "Mobile Offize",
      route: "mobile-offize"
    },
    {
      name: "Pepstudy",
      route: "pepstudy"
    },
    {
      name: "Fancy Monk",
      route: "fancymonk"
    }
  ];

  constructor(private location: Location, router: Router) {
    router.events.subscribe((val) => {
      if (location.path() != '') {
        let routePath = location.path();

        this.updateRouteEnd(routePath);
        return;
      } else {
        this._mRoute = 'Home'
      }
    });
  }

  ngOnInit() {
  }

  isFixed: boolean = true;


  onClickBack() {
    this.location.back();
  }

  handleMenuSelect(event) {

  }

  updateRouteEnd(path: string) {
    console.log("path: ", path);
    for (const routePath of this._mRouteList) {
      // for (const route of dashboardItem.items ){
      if (path.includes(routePath.route)) {
        this._mRoute = routePath.name;
        // this._mSubRoute = route.name;
        return;
      }
    }
  }


}