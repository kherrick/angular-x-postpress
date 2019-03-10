import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';

// workaround for - error TS2580: Cannot find name 'require'
declare var require: any;

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

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(platformId)) {
      require('@authentic/mwc-textfield')
      require('@material/mwc-button')
      require('@material/mwc-formfield')
      require('x-postpress/build/es5-bundled/src/components/x-postpress')
    }
  }

  ngOnInit() {}
}
