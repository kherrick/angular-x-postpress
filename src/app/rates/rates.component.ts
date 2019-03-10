import { Apollo } from 'apollo-angular';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
import gql from 'graphql-tag';

// workaround for - error TS2580: Cannot find name 'require'
declare var require: any;

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})

export class RatesComponent implements OnInit {
  rates: any[];
  loading = true;
  error: any;

  constructor(private apollo: Apollo, @Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(platformId)) {
      require('x-postpress/build/es5-bundled/src/components/x-postpress')
    }
  }

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: gql`
          {
            rates(currency: "USD") {
              currency
              rate
            }
          }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        this.rates = result.data && result.data.rates;
        this.loading = result.loading;
        this.error = result.error;
      });
  }
}
