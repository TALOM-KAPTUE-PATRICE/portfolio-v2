import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project, ProjectCategory } from '../../core/models/project.model';
import { PROJECTS_DATA } from '../../core/models/data/projects.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {

  readonly categories: (ProjectCategory | 'All')[] = ['All', 'Fullstack', 'AI & Data', 'DevOps & Cloud'];
  allProjects = signal<Project[]>(PROJECTS_DATA);
  selectedCategory = signal<ProjectCategory | 'All'>('All');

  filteredProjects = computed(() => {
    const category = this.selectedCategory();
    if (category === 'All') return this.allProjects();
    return this.allProjects().filter(p => p.category === category);
  });
}
