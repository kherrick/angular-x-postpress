import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})

export class AppComponent {
  public home = 'Home';
  public articles = 'Articles';
  public rates = 'Rates';
}
