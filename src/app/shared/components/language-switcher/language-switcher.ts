import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../core/services/language.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.css'
})
export class LanguageSwitcher {
  langService = inject(LanguageService);

  toggleLang() {
    const nextLang = this.langService.currentLang() === 'fr' ? 'en' : 'fr';
    this.langService.setLanguage(nextLang);
  }
}
