import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { provideStore } from '@ngrx/store';

import { appRoutes } from './app.routes';

import { booksReducer, counterReducer } from '@documentation/state';
import { collectionReducer } from '@documentation/state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideStore({
      count: counterReducer,
      books: booksReducer,
      collection: collectionReducer
    }),
    provideHttpClient(),
    provideRouter(appRoutes),
  ],
};
