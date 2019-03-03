import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})

export class ArticlesComponent implements OnInit {
  public articleTitle = 'A static article';
  public articleDate = 'Thursday, 01 January 1970';
  public articleUrl = 'https://example.com/1970/01/01/slotted/';

  public articleParagraph = 'Lorem ipsum dolor sit amet';

  constructor() {}

  ngOnInit() {}
}
