import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../../material.module';

import { ExpansionHeaderExpandedComponent } from './header-expanded.component';
import { ExpansionHeaderComponent } from './header.component';
import { ExpansionComponent } from './expansion.component';

@NgModule({
  declarations: [ExpansionHeaderExpandedComponent, ExpansionHeaderComponent, ExpansionComponent],
  exports: [ExpansionHeaderExpandedComponent, ExpansionHeaderComponent, ExpansionComponent],
  imports: [CommonModule,
  MaterialModule]
})
export class TdwExpansionModule { }