import { Project } from '../project.model';

export const PROJECTS_DATA: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Intelligence',
    description: 'Plateforme Fullstack avec recommandation prédictive basée sur le comportement utilisateur.',
    category: 'Fullstack',
    thumbnailUrl: 'assets/projects/ecommerce.jpg',
    technologies: ['Angular 21', 'Spring Boot 3', 'PostgreSQL', 'OpenAI API'],
    githubUrl: 'https://github.com/...',
    technicalHighlights: [
      'Architecture Hexagonale (Clean Architecture) côté Backend',
      'Intégration de Vector Database pour la recherche sémantique',
      'Sécurisation via Spring Security & JWT'
    ]
  },
  {
    id: '2',
    title: 'Kubernetes Auto-Scaler IA',
    description: 'Outil DevOps utilisant l\'IA pour prédire les pics de charge et ajuster les clusters K8s.',
    category: 'DevOps & Cloud',
    thumbnailUrl: 'assets/projects/devops.jpg',
    technologies: ['Python', 'Terraform', 'Kubernetes', 'Prometheus'],
    technicalHighlights: [
      'Pipeline CI/CD automatisé avec GitHub Actions',
      'Monitoring temps réel via Grafana',
      'Infrastructure as Code (IaC) 100% automatisée'
    ]
  }
];