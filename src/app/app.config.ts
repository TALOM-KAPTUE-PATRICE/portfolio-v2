import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withViewTransitions, withInMemoryScrolling  } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes, 
      withViewTransitions(), // L'effet "Woah" natif
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }) // Retour en haut auto
    )
  ]
};
