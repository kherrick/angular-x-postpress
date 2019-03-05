import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})

export class HomeComponent implements OnInit {
  public articleTitle = 'A static article';
  public articleDate = 'Thursday, 01 January 1970';
  public articleUrl = 'https://example.com/1970/01/01/slotted/';

  public articleParagraph = 'Lorem ipsum dolor sit amet';

  constructor() {}

  ngOnInit() {}
}
