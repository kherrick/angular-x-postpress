import { NgModule } from '@angular/core';
import { ApolloModule } from 'apollo-angular';
import { ModuleWithProviders } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    ApolloModule,
    HttpLinkModule,
    HttpClientModule
  ],
  exports: [ApolloModule],
  providers: [],
  entryComponents: []
})

export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }

  constructor(
    apollo: Apollo,
    httpLink: HttpLink,
  ) {
    const uri = 'https://o5x5jzoo7z.sse.codesandbox.io/graphql'; //our test Graphql Server which returns rates

    apollo.create({
      link: httpLink.create({ uri }),
      cache: new InMemoryCache()
    });
  }
}
