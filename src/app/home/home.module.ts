import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { LoginComponent } from '../login/login.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class HomeModule {}
