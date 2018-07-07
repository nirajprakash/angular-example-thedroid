import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AgmCoreModule, AgmPolygon } from '@agm/core';

import { MaterialModule } from '../../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

// import { AngularFirestoreModule } from 'angularfire2/firestore';
// import { AngularFireModule } from 'angularfire2';


import {
  ContactComponent
  
} from "./contact.component";
import { ClipboardModule } from '../directive';
import { DialogProgressModule } from '../dialog-progress';
import { DialogDoneModule } from '../dialog-done';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,        
    FormsModule,
    ReactiveFormsModule,

    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDMKo7hudlvGD09F1FzS1YddtsRV3yo1S0"
    }),
    ClipboardModule,
    // AngularFirestoreModule,
    DialogProgressModule,
    DialogDoneModule
  ],
  declarations: [
    ContactComponent,
  ],
  exports: [
    ContactComponent,

  ]
})
export class ContactNewModule { }