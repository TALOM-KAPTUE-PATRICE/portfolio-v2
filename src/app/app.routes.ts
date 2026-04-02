import { Routes } from '@angular/router';
import { Hero } from './features/hero/hero';
import { About } from './features/about/about';
import { Skills } from './features/skills/skills';
import { Projects } from './features/projects/projects';
import { Experience } from './features/experience/experience';
import { Contact } from './features/contact/contact';

export const routes: Routes = [
  { path: '', component: Hero, title: 'Accueil | Patrice Portfolio' },
  { path: 'about', component: About, title: 'À Propos' },
  { path: 'skills', component: Skills, title: 'Expertise Technique' },
  { path: 'projects', component: Projects, title: 'Projets Fullstack & IA' },
  { path: 'experience', component: Experience, title: 'Parcours' },
  { path: 'contact', component: Contact, title: 'Contact' },
  { path: '**', redirectTo: '' }
];