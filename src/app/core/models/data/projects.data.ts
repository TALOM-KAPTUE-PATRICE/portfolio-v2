import { Project } from '../project.model';

export const PROJECTS_DATA: Project[] = [
  {
    id: '1',
    title: 'projects.items.nexgen.title',
    description: 'projects.items.nexgen.description',
    category: 'projects.categories.fullstack',
    thumbnailUrl: 'assets/images/not-found.avif',
    technologies: ['Angular 21', 'Spring Boot 3.4', 'Redis', 'OpenAI', 'PostgreSQL'],
    githubUrl: '',
    technicalHighlights: [
      'projects.items.nexgen.highlights.0',
      'projects.items.nexgen.highlights.1',
      'projects.items.nexgen.highlights.2'
    ]
  },
  {
    id: '2',
    title: 'projects.items.opsmind.title',
    description: 'projects.items.opsmind.description',
    category: 'projects.categories.devops',
    thumbnailUrl: 'assets/images/not-found.avif',
    technologies: ['Kubernetes', 'Terraform', 'Python', 'Prometheus', 'FastAPI'],
    githubUrl: '',
    technicalHighlights: [
      'projects.items.opsmind.highlights.0',
      'projects.items.opsmind.highlights.1',
      'projects.items.opsmind.highlights.2'
    ]
  }
];