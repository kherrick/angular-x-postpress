import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './shared.module';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  },
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
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
