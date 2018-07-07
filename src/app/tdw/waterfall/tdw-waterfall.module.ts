import { NgModule } from '@angular/core';

import { TdwWaterfall } from './tdw-waterfall.directive';

@NgModule({
  declarations: [TdwWaterfall],
  exports: [TdwWaterfall],
  imports: []
})
export class TdwWaterfallModule { }