import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CardModule } from '../card/card.module';

import { ListComponent } from './list.component';

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, HttpClientModule, CardModule],
  exports: [ListComponent],
})
export class ListModule {}
