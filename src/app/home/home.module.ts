import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { isPlatformBrowser } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { NgModule } from '@angular/core';
import { PLATFORM_ID, CUSTOM_ELEMENTS_SCHEMA, Inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// workaround for - error TS2580: Cannot find name 'require'
declare var require: any;

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class HomeModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(platformId)) {
      require('x-postpress/build/es5-bundled/src/components/x-postpress')
    }
  }
}
