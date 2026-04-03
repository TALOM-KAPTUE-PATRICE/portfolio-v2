import { Routes } from '@angular/router';
import { Hero } from './features/hero/hero';
import { About } from './features/about/about';
import { Skills } from './features/skills/skills';
import { Projects } from './features/projects/projects';
import { Experience } from './features/experience/experience';
import { Contact } from './features/contact/contact';

export const routes: Routes = [
  { path: '', component: Hero, title: 'Accueil | Patrice Portfolio', data: { animation: 'HomePage' } },
  { path: 'about', component: About, title: 'À Propos', data: { animation: 'AboutPage' } },
  { path: 'skills', component: Skills, title: 'Expertise Technique', data: { animation: 'SkillsPage' } },
  { path: 'projects', component: Projects, title: 'Projets Fullstack & IA', data: { animation: 'ProjectsPage' } },
  { path: 'experience', component: Experience, title: 'Parcours', data: { animation: 'ExperiencePage' } },
  { path: 'contact', component: Contact, title: 'Contact', data: { animation: 'ContactPage' } },
  { path: '**', redirectTo: '' }
  
];