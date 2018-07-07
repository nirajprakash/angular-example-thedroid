import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import {WidgetsModule} from '../../../widgets';


import {SensifyComponent } from './index';


export const routes: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: SensifyComponent
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
    SensifyComponent
  ],
  exports: [
  ]
})
export class SensifyModule { }