import { Injectable, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { Meta } from '@angular/platform-browser';
import { catchError } from 'rxjs/operators'; // Importez catchError
import { of } from 'rxjs'; // Importez of

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private translate = inject(TranslateService);
  private meta = inject(Meta);
  private platformId = inject(PLATFORM_ID);

  currentLang = signal(localStorage.getItem('lang') || 'fr');

  constructor() {
    this.translate.addLangs(['en', 'fr']);
    
    if (isPlatformBrowser(this.platformId)) {
      const savedLang = localStorage.getItem('lang') as 'en' | 'fr';
      if (savedLang) this.currentLang.set(savedLang);
    }

    // On s'assure que TranslateService utilise la langue du signal
    this.translate.setDefaultLang('fr');
    this.translate.use(this.currentLang()).subscribe();
    this.updateMetaTags(this.currentLang());
  }

  setLanguage(lang: 'en' | 'fr') {
    this.translate.use(lang)
      .pipe(
        catchError(error => {
          console.error(`Erreur lors du changement de langue vers ${lang}:`, error);
          // Optionnel: Revenir à la langue précédente ou afficher un message à l'utilisateur
          return of(null);
        })
      )
      .subscribe(() => {
        this.currentLang.set(lang);
        if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem('lang', lang);
        }
        this.updateMetaTags(lang);
      });
  }

  private updateMetaTags(lang: string) {
    this.meta.updateTag({ property: 'og:locale', content: lang === 'fr' ? 'fr_FR' : 'en_US' });
  }
}
