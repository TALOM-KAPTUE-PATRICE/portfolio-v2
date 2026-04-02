import { Experience } from '../experience.model';

export const EXPERIENCES_DATA: Experience[] = [
  {
    id: '1',
    role: 'Lead Fullstack Developer & AI Integrator',
    company: 'Tech Solutions Inc.',
    period: '2023 - Présent',
    description: 'Pilotage du développement d\'applications critiques sous Angular 21 et Spring Boot 3.',
    achievements: [
      'Mise en place d\'un pipeline CI/CD automatisé (Docker, K8s) réduisant le temps de déploiement de 40%.',
      'Intégration de modèles de NLP pour l\'automatisation du support client.',
      'Optimisation des performances SQL et passage à une architecture microservices.'
    ],
    technologies: ['Angular', 'Spring Boot', 'Docker', 'OpenAI', 'PostgreSQL']
  },
  {
    id: '2',
    role: 'Développeur Java/Angular',
    company: 'Innovation Lab',
    period: '2021 - 2023',
    description: 'Développement de dashboards analytiques en temps réel.',
    achievements: [
      'Architecture zoneless Angular pour une fluidité maximale.',
      'Développement d\'APIs REST sécurisées avec Spring Security et JWT.'
    ],
    technologies: ['Java 17', 'Angular', 'RxJS', 'Jenkins']
  }
];