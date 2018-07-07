import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WidgetsModule } from './../../widgets';
import { FooterModule, ContactNewModule } from './../shared';
import {TdwWaterfallModule} from './../../tdw/index';


import {
  HomeComponent,
  HomeProjectContentComponent,
  HomeClientsComponent,
  HomeOurGuranteeComponent,
  HomeTopWorksComponent,
  TopWorkMobileComponent,
  TopWorkWebComponent,
  HomeNeedHelpComponent,
  TechnologyComponent,
  TabComponent,
  TechnologyItemComponent,
  TopWallComponent,
  ContactComponent,
  HomeServicesComponent,
} from './index';


export const routes: ModuleWithProviders = RouterModule.forChild([
 
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'project-content',
    component: HomeProjectContentComponent

  },
  {
    path: 'clients',
    component: HomeClientsComponent

  },
  {
    path: 'our-gurantee',
    component: HomeOurGuranteeComponent

  },
  {
    path: 'top-works',
    component: HomeTopWorksComponent

  },
  {
    path: 'need-help',
    component: HomeNeedHelpComponent

  },
  {
    path: 'contact',
    component: ContactComponent

  },
  {
    path: 'technology',
    component: TechnologyComponent
  },
  {
    path: 'services',
    component: HomeServicesComponent
  }

]);


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,

    WidgetsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TdwWaterfallModule,
    FooterModule,
    ContactNewModule,
  

    routes,
  ],
  declarations: [
    HomeComponent,
    HomeProjectContentComponent,
    HomeClientsComponent,
    HomeOurGuranteeComponent,
    HomeTopWorksComponent,
    TopWorkWebComponent,
    TopWorkMobileComponent,
    HomeNeedHelpComponent,
    TechnologyComponent,
    TabComponent,
    TechnologyItemComponent,
    TopWallComponent,
    ContactComponent,
    HomeServicesComponent
  ],
  exports: [
  ]
})
export class HomeModule { }