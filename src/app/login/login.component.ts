import { Component, ElementRef, AfterViewInit, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})

export class LoginComponent implements AfterViewInit, OnInit {
  @ViewChild('user') public user: ElementRef;
  @ViewChild('pass') public pass: ElementRef;

  ngOnInit() {}

  ngAfterViewInit() {}

  onSubmit($event) {
    // @todo: Use EventEmitter with form value
    const username = this.user.nativeElement.value;
    const password = this.pass.nativeElement.value;

    // @todo: remove fake username and password
    if (username === 'foo' && password === 'bar') {
      window.localStorage.setItem('isLoggedIn', 'true');
    }
  }

  slotChange($event) {
    const assigned = $event.target.assignedNodes();

    if (assigned.length > 0) {}
  }
}
