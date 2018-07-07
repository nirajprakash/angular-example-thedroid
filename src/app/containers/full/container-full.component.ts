import { Component, ViewChild } from '@angular/core';

import { Location } from '@angular/common';
import { MdcDrawer } from '@angular-mdc/web';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './container-full.component.html',
  styleUrls: ['./container-full.component.scss']
})
export class ContainerFullComponent {

  _mRoute: string;

  constructor(location: Location, router: Router) {
    router.events.subscribe((val) => {
      if(location.path() != ''){
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

  @ViewChild('drawer') drawer: MdcDrawer;
 

  _vmNavItems: any = {
    dashboard: [
      {
        name: "Home",
        icon: "home",
        route: "/home",
        color: "mdc-theme--primary"
      },
      {
        name: "Top-Works",
        icon: "work",
        route: "/home/top-works",
        color: "mdc-theme--primary"
      },
      {
        name: "Services",
        icon: "developer_mode",
        route: "/home/services",
        color: "mdc-theme--primary"
      },
      {
        name: "Our-Clients",
        icon: "supervisor_account",
        route: "/home/clients",
        color: "mdc-theme--primary"
      },
      {
        name: "Our-Team",
        icon: "group_work",
        route: "/home/team",
        color: "mdc-theme--primary"
      },
      {
        name: "Our-Gurantee",
        icon: "thumb_up",
        route: "/home/our-gurantee",
        color: "mdc-theme--primary"
      },


      {
        name: "Contact",
        icon: "contact_mail",
        route: "/home/need-help",
        color: "mdc-theme--primary"
      }
    ]

  };


  toggleDrawer() {
    this.drawer.open();
  }

  handleMenuSelect(event){
    
  }

  updateRouteEnd(path: string){
    //console.log(path);
    for (const dashboardItem of this._vmNavItems.dashboard) {
      //console.log(dashboardItem.route);
      if (path==dashboardItem.route) {
        this._mRoute = dashboardItem.name;
        //console.log("selected", this._mRoute);
        return;
      }
    }
    // this._vmNavItems.dashboard.forEach( dashboardItem => {
      
    // });
    
    
    this._mRoute = "Home";
    
  }
}