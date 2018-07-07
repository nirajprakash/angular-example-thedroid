import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { WidgetsModule } from './../../widgets';


import { ProjectsListingComponent, 
ListingMobileComponent,
ListingMobileRtlComponent,
ListingWebComponent } from './index';
// import { FooterModule, ContactModule } from '../shared';


export const routes: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: ProjectsListingComponent
  }

]);


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    routes,
    WidgetsModule,
  ],
  declarations: [
    ProjectsListingComponent,
    ListingMobileComponent,
    ListingMobileRtlComponent,
    ListingMobileRtlComponent,
    ListingWebComponent
  ],
  exports: [
  ]
})
export class ProjectsListingModule { }