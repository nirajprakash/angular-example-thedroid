import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';
import { WidgetsModule } from '../../../widgets';



import {
  MobileOffizeComponent,
  TaskSwipeComponent,
  TaskCreateComponent,
  ChatElementComponent,
  BillingElementComponent,
  MobileOffizeTopComponent,
  WelcomeAnimationComponent,
  ContactSelectComponent,
  TaskSwipeAnimationComponent
} from './index';
import { MobileOffizeKeysComponent } from './keys';


export const routes: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: MobileOffizeComponent
  }

]);


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    WidgetsModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    // VgBufferingModule,
    routes
  ],
  declarations: [
    MobileOffizeComponent,
    TaskSwipeComponent,
    TaskCreateComponent,
    ChatElementComponent,
    BillingElementComponent,
    MobileOffizeTopComponent,
    MobileOffizeKeysComponent,
    WelcomeAnimationComponent,
    ContactSelectComponent,
    TaskSwipeAnimationComponent
  ],
  exports: [
  ]
})
export class MobileOffizeModule { }