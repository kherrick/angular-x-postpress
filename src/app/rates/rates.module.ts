import { RatesComponent } from './rates.component';
import { RatesRoutingModule } from './rates-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

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
