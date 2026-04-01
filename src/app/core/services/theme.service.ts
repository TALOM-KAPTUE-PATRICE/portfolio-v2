import { Injectable, signal, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type ThemeMode = 'light' | 'dark' | 'system';

@Injectable({
  providedIn: 'root'
})

export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  theme = signal<ThemeMode>(this.getStoredTheme());

  constructor() {
    effect(() => {
      const currentTheme = this.theme();
      if (isPlatformBrowser(this.platformId)) {
        this.applyTheme(currentTheme);
        localStorage.setItem('theme-preference', currentTheme);
      }
    });
  }

  setTheme(mode: ThemeMode) {
    this.theme.set(mode);
  }

  private getStoredTheme(): ThemeMode {
    if (isPlatformBrowser(this.platformId)) {
      return (localStorage.getItem('theme-preference') as ThemeMode) || 'system';
    }
    return 'system';
  }

  private applyTheme(mode: ThemeMode) {
    const root = document.documentElement;
    let targetTheme = mode;

    if (mode === 'system') {
      targetTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    if (targetTheme === 'dark') {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
  }
}
