import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeService, ThemeMode } from '../../core/services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private themeService = inject(ThemeService);
  currentTheme = this.themeService.theme;
  isMenuOpen = signal(false);

  navItems = [
    { label: 'Accueil', link: '/' },
    { label: 'À Propos', link: '/about' },
    { label: 'Expertise', link: '/skills' },
    { label: 'Projets', link: '/projects' },
    { label: 'Parcours', link: '/experience' },
    { label: 'Contact', link: '/contact' }
  ];

  changeTheme(mode: ThemeMode) {
    this.themeService.setTheme(mode);
  }

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }
}
