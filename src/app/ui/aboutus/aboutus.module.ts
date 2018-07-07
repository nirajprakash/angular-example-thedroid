import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WidgetsModule } from './../../widgets';
import { FooterModule } from './../shared';
import { TdwWaterfallModule } from './../../tdw/index';


import {
  AboutUsComponent, TopWallComponent, TimelineComponent, TeamComponent
} from './index';


export const routes: ModuleWithProviders = RouterModule.forChild([
  // {
  //   path: '',
  //   redirectTo: 'project-content',
  //   pathMatch: 'full',
  // },
  {
    path: '',
    component: AboutUsComponent
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

    routes,
  ],
  declarations: [
    AboutUsComponent,
    TopWallComponent,
    TimelineComponent, 
    TeamComponent
  ],
  exports: [
  ]
})
export class AboutUsModule { }