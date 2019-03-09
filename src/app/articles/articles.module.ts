import { ArticlesComponent } from './articles.component';
import { ArticlesRoutingModule } from './articles-routing.module';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { NgModule } from '@angular/core';
import { PLATFORM_ID, CUSTOM_ELEMENTS_SCHEMA, Inject } from '@angular/core';

@NgModule({
  declarations: [
    ArticlesComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ArticlesModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(platformId)) {
      require('x-postpress/build/es5-bundled/src/components/x-postpress')
    }
  }
}
