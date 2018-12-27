import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { webcomponentsReady } from '@codebakery/origami/polyfills';

if (environment.production) {
  enableProdMode();
}

webcomponentsReady().then(() => import('./app/app.module'))
  .then(({ AppModule }) => platformBrowserDynamic().bootstrapModule(AppModule))
  .catch(err => console.error(err));
