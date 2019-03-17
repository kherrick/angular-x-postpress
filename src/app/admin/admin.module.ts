import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ButtonComponent } from '../components/button/button.component';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { InputComponent } from '../components/input/input.component';
import { LoginComponent } from '../login/login.component';

@NgModule({
  declarations: [
    AdminComponent,
    ButtonComponent,
    InputComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  entryComponents: [
    ButtonComponent,
    InputComponent,
    LoginComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AdminModule {
  constructor(private injector: Injector) {
    customElements.define('app-button', createCustomElement(ButtonComponent, { injector }));
    customElements.define('app-login', createCustomElement(LoginComponent, { injector }));
    customElements.define('app-input', createCustomElement(InputComponent, { injector }));
  }

  ngDoBootstrap() {}
}
