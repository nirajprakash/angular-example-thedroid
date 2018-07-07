import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  WidgetTopWorksDescComponent,
  WidgetCubeComponent
  
} from "./index-inner";


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule
  ],
  declarations: [
    WidgetTopWorksDescComponent,
    WidgetCubeComponent
  ],
  exports: [
    WidgetTopWorksDescComponent,
    WidgetCubeComponent

  ]
})
export class WidgetsModule { }