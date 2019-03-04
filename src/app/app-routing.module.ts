import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'about',
    loadChildren: './about/about.module#AboutModule'
  },
  {
    path: 'articles',
    loadChildren: './articles/articles.module#ArticlesModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
