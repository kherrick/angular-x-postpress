import { Apollo } from 'apollo-angular';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import gql from 'graphql-tag';

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

  constructor(private apollo: Apollo) {}

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
