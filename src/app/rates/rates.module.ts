import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgModule } from '@angular/core';
import { RatesComponent } from './rates.component';
import { RatesRoutingModule } from './rates-routing.module';

@NgModule({
  declarations: [
    RatesComponent
  ],
  imports: [
    CommonModule,
    RatesRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class RatesModule {}
