import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import{ ThemeService } from './core/services/theme.service';
import { Projects } from './features/projects/projects';
import { Skills } from './features/skills/skills';
import { Hero } from './features/hero/hero';
import { About } from './features/about/about';
import { Experience } from './features/experience/experience';
import { Contact } from './features/contact/contact';


@Component({
  selector: 'app-root',
  imports: [   
    RouterOutlet,
    Header,
    Footer,
    Projects,
    Skills,
    Hero,
    About,
    Experience,
    Contact
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  private themeService = inject(ThemeService); // Initialise le service et ses effets
}
