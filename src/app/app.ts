import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import{ ThemeService } from './core/services/theme.service';


@Component({
  selector: 'app-root',
  imports: [   
    RouterOutlet,
    Header,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  private themeService = inject(ThemeService); // Initialise le service et ses effets
}
