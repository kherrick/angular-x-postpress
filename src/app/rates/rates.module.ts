import { RatesComponent } from './rates.component';
import { RatesRoutingModule } from './rates-routing.module';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { NgModule } from '@angular/core';
import { PLATFORM_ID, CUSTOM_ELEMENTS_SCHEMA, Inject } from '@angular/core';

// workaround for - error TS2580: Cannot find name 'require'
declare var require: any;

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

export class RatesModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(platformId)) {
      require('x-postpress/build/es5-bundled/src/components/x-postpress')
    }
  }
}
