// fetch for ie11, not site wide
import 'fetch-polyfill/fetch';
import 'x-postpress/build/es5-bundled/src/components/x-postpress';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})

export class ArticlesComponent implements OnInit {
  public articleTitle = 'An article dynamically rendered (or pre-rendered) server side';
  public articleDate = 'Thursday, 01 January 1970';
  public articleUrl = 'https://example.com/1970/01/01/slotted/';

  public articleParagraph = `This article can be dynamically generated, but is currently defined within the source.
    The articles that load below, are client side only, and fetched from a WordPress REST API.`;

  constructor() {}

  ngOnInit() {}
}
