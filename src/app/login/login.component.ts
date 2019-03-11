import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  login = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  doNotSubmit() {
    console.log('doNotSubmit - this.login: ', this.login);
  }

  onSubmit() {
    // @todo: Use EventEmitter with form value
    console.warn('onSubmit: this.login: ', this.login);
  }
}
