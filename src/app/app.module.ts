import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ModuleWithProviders } from '@angular/core';
import { MomentModule } from 'angular2-moment';
import { FlexLayoutModule } from '@angular/flex-layout';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { environment } from '../environments/environment';
// export const firebaseConfig = environment.firebase;
// import { AngularFirestoreModule } from 'angularfire2/firestore';
// import { AngularFireModule } from 'angularfire2';

import { WidgetsModule } from './widgets';
import { TdwWaterfallModule } from './tdw/index';
import {
  ContainerFullComponent,
  ContainerStackComponent,
  ContainerSimpleComponent,
  ContainerStackNewComponent
} from './containers';
import { ContactModule, FooterModule, ContactNewModule } from './ui/shared';


const routes: Routes = [
  {
    path: '', pathMatch: 'full',
    component: ContainerFullComponent,
    data: {
      title: 'The Droid'
    },
    children: [
      {
        path: '**',
        loadChildren: './ui/home/home.module#HomeModule'
      }
    ]
  },

  {
    path: 'listing',
    component: ContainerStackComponent,
    data: {
      title: 'The Droid'
    },
    children: [

      {
        path: '**',
        loadChildren: './ui/listing/projects-listing.module#ProjectsListingModule'
      }



    ]
  },

  {
    path: 'projects',
    component: ContainerStackComponent,
    data: {
      title: 'The Droid'
    },
    children: [
      {
        path: 'sensify',
        loadChildren: './ui/projects/sensify/sensify.module#SensifyModule'
      },
      {
        path: 'pepstudy',
        loadChildren: './ui/projects/pepstudy/pepstudy.module#PepstudyModule'
      },
      {
        path: 'mobile-offize',
        loadChildren: './ui/projects/mobile-offize/mobile-offize.module#MobileOffizeModule'
      },




    ]
  },

  {
    path: 'about',
    component: ContainerStackNewComponent,
    data: {
      title: 'Home'
    },
    children: [

      {
        path: '**',
        loadChildren: './ui/aboutus/aboutus.module#AboutUsModule'
      },





    ]
  },
  {
    path: '**',
    redirectTo:''
  }

];
const rootRouting: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false, enableTracing: true });

@NgModule({
  declarations: [
    AppComponent,
    ContainerFullComponent,
    ContainerSimpleComponent,
    ContainerStackComponent,
    ContainerStackNewComponent

  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MaterialModule,
    HttpModule,
    MomentModule,
    // AngularFireModule.initializeApp(firebaseConfig),
    // AngularFirestoreModule,
    WidgetsModule,
    BrowserAnimationsModule,
    TdwWaterfallModule,
    FooterModule,
    ContactModule,
    ContactNewModule,
    rootRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
