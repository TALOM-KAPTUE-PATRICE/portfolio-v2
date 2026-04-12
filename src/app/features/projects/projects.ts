import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project, ProjectCategory } from '../../core/models/project.model';
import { PROJECTS_DATA } from '../../core/models/data/projects.data';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {

  // Liste des clés de traduction pour les filtres
  readonly categories: (ProjectCategory | 'projects.categories.all')[] = [
    'projects.categories.all', 
    'projects.categories.fullstack', 
    'projects.categories.devops',
    'projects.categories.ai'

  ];
  
  allProjects = signal<Project[]>(PROJECTS_DATA);
  selectedCategory = signal<ProjectCategory | 'projects.categories.all'>('projects.categories.all');

  filteredProjects = computed(() => {
    const category = this.selectedCategory();
    if (category === 'projects.categories.all') return this.allProjects();
    return this.allProjects().filter(p => p.category === category);
  });
}
