import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withViewTransitions, withInMemoryScrolling  } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes, 
      withViewTransitions(), // L'effet "Woah" natif
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }) // Retour en haut auto
    ),
    provideAnimationsAsync() // Recommandé pour Angular 21 (chargement optimisé)
  ]
};
