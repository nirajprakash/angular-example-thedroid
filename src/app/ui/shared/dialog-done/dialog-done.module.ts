import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AgmCoreModule, AgmPolygon } from '@agm/core';

import { MaterialModule } from '../../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  DialogDoneComponent
  
} from "./dialog-done.component";
import { MdcDialogModule } from '@angular-mdc/web';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MdcDialogModule,
  ],
  declarations: [
    DialogDoneComponent
  ],
  exports: [
    DialogDoneComponent
  ],
  entryComponents:[
    DialogDoneComponent
  ]
})
export class DialogDoneModule { }