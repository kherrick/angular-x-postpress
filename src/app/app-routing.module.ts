import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './shared.module';

const routes: Routes = [
  {
    path: 'articles',
    loadChildren: './articles/articles.module#ArticlesModule'
  },
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'rates',
    loadChildren: './rates/rates.module#RatesModule'
  }
];

@NgModule({
  imports: [
    SharedModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
