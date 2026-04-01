import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService, ThemeMode } from '../../core/services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private themeService = inject(ThemeService);
  currentTheme = this.themeService.theme;
  isMenuOpen = signal(false);

  navItems = [
    { label: 'Accueil', link: '#' },
    { label: 'Projets', link: '#projects' },
    { label: 'Expertise IA', link: '#ai' },
    { label: 'Contact', link: '#contact' }
  ];

  changeTheme(mode: ThemeMode) {
    this.themeService.setTheme(mode);
  }

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }
}
