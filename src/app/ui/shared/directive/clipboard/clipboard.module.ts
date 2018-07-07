import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServiceClipboard } from './clipboard.service';
import { ClipboardDirective } from './clipboard.directive';

// import {SharedModule} from '../../shared'


@NgModule({
    imports: [
        CommonModule,

    ],
    declarations: [
        ClipboardDirective
    ],
    exports: [ClipboardDirective],
    providers: [ServiceClipboard]
})
export class ClipboardModule { }