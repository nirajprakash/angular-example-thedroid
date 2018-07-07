import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AgmCoreModule, AgmPolygon } from '@agm/core';

import { MaterialModule } from '../../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  ContactComponent
  
} from "./contact.component";


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDMKo7hudlvGD09F1FzS1YddtsRV3yo1S0"
    }),
  ],
  declarations: [
    ContactComponent,
  ],
  exports: [
    ContactComponent,

  ]
})
export class ContactModule { }