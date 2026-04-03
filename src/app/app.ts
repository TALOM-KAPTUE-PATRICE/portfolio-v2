import { Component, inject, signal, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import{ ThemeService } from './core/services/theme.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [   
    RouterOutlet,
    Header,
    Footer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private themeService = inject(ThemeService); // Initialise le service et ses effets
  
  showScrollButton = signal(false);

  @HostListener('window:scroll')
  onWindowScroll() {
    // Affiche le bouton après 400px de scroll
    this.showScrollButton.set(window.scrollY > 400);
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
