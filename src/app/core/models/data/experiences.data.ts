import { Experience } from '../experience.model';

export const EXPERIENCES_DATA: Experience[] = [
  {
    id: '1',
    role: 'Architecte Fullstack & Expert IA',
    company: 'Entreprise Tech Innovante',
    period: '2023 - Présent',
    description: 'Conception d\'un système ERP modulaire intégrant des capacités d\'analyse prédictive et d\'automatisation via LLMs.',
    achievements: [
      'Migration d\'une architecture monolithique vers des Microservices Spring Cloud avec communication asynchrone via Kafka.',
      'Implémentation d\'un moteur de recherche sémantique basé sur du RAG, augmentant la précision des recherches de 65%.',
      'Lead technique sur la transition Angular Signals, réduisant les cycles de détection de changement et améliorant les FPS de l\'UI de 30%.',
      'Automatisation complète du provisionnement Cloud via Terraform sur AWS (EKS, RDS, S3).'
    ],
    technologies: ['Angular 21', 'Spring Boot 3', 'Kafka', 'Kubernetes', 'LangChain', 'Terraform']
  },
  {
    id: '2',
    role: 'Ingénieur Logiciel Fullstack',
    company: 'Global Digital Agency',
    period: '2021 - 2023',
    description: 'Développement de plateformes e-commerce à fort trafic avec focus sur l\'optimisation SEO et la haute disponibilité.',
    achievements: [
      'Développement d\'une interface Angular hautement réactive avec gestion fine du Lazy Loading et optimisation du Bundle Size.',
      'Mise en place de tests unitaires et d\'intégration (Junit, Mockito, Cypress) assurant une couverture de code de 85%.',
      'Optimisation des requêtes JPA/Hibernate et mise en cache Redis, divisant par deux le temps de réponse des APIs.'
    ],
    technologies: ['Spring Boot', 'Angular', 'Redis', 'PostgreSQL', 'Docker', 'Jenkins']
  }
];