import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ContainerFullComponent, ContainerSimpleComponent } from './index';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        //ContainerFullComponent,
        //ContainerSimpleComponent
    ],
    exports: [
        //ContainerFullComponent,
        //ContainerSimpleComponent
    ]
})
export class ContainerModule { }