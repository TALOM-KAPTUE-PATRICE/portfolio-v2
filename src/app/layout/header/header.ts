import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeService, ThemeMode } from '../../core/services/theme.service';
import { LanguageSwitcher } from '../../shared/components/language-switcher/language-switcher';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule,LanguageSwitcher,TranslateModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private themeService = inject(ThemeService);
  currentTheme = this.themeService.theme;
  isMenuOpen = signal(false);

  navItems = [
    { label: 'nav.home', link: '/' },
    { label: 'nav.about', link: '/about' },
    { label: 'nav.expertise', link: '/skills' },
    { label: 'nav.projects', link: '/projects' },
    { label: 'nav.experience', link: '/experience' },
    { label: 'nav.contact', link: '/contact' }
  ];

  changeTheme(mode: ThemeMode) {
    this.themeService.setTheme(mode);
  }

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }
}
