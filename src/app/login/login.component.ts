import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  @ViewChild('firstName') firstName: ElementRef;
  @ViewChild('lastName') lastName: ElementRef;

  doNotSubmit() {
    console.log('doNotSubmit - this.login: ', this.firstName.nativeElement.value, this.lastName.nativeElement.value);
  }

  onSubmit() {
    // @todo: Use EventEmitter with form value
    console.warn('onSubmit - this.login: ', this.firstName.nativeElement.value, this.lastName.nativeElement.value);
  }
}
