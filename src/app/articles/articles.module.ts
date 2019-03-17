import { ArticlesComponent } from './articles.component';
import { ArticlesRoutingModule } from './articles-routing.module';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgModule } from '@angular/core';

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

export class ArticlesModule {}
