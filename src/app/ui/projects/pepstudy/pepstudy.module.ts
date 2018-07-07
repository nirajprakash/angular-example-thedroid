import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import {WidgetsModule} from '../../../widgets';


import {PepstudyComponent,PepstudyTopComponent, PepstudyTopNewComponent } from './index';


export const routes: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: PepstudyComponent
  }
  
]);


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    routes,
    WidgetsModule
  ],
  declarations: [
    PepstudyComponent,
    PepstudyTopComponent,
    PepstudyTopNewComponent
  ],
  exports: [
  ]
})
export class PepstudyModule { }