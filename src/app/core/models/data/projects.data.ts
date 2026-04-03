import { Project } from '../project.model';

export const PROJECTS_DATA: Project[] = [
  {
    id: '1',
    title: 'NexGen E-Commerce Engine',
    description: 'SaaS de commerce intelligent exploitant l\'IA pour l\'optimisation dynamique des stocks et la personnalisation client.',
    category: 'Fullstack',
    thumbnailUrl: 'assets/images/not-found.avif',
    technologies: ['Angular 21', 'Spring Boot 3.4', 'Redis', 'OpenAI', 'PostgreSQL'],
    githubUrl: '',
    technicalHighlights: [
      'Backend basé sur l\'Architecture Hexagonale pour isoler le domaine métier des détails techniques.',
      'Système de recommandation propulsé par des vecteurs d\'embeddings stockés dans ChromaDB.',
      'UI Angular ultra-performante utilisant le rendu zoneless et les signaux pour une réactivité instantanée.'
    ]
  },
  {
    id: '2',
    title: 'OpsMind: K8s AI Orchestrator',
    description: 'Agent intelligent supervisant les clusters Kubernetes pour prédire les pannes et auto-scaler les ressources de manière proactive.',
    category: 'DevOps & Cloud',
    thumbnailUrl: 'assets/images/not-found.avif',
    technologies: ['Kubernetes', 'Terraform', 'Python', 'Prometheus', 'FastAPI'],
    githubUrl: '',
    technicalHighlights: [
      'Analyse de métriques Prometheus en temps réel via un modèle de séries temporelles pour anticiper les pics de charge.',
      'Infrastructure as Code (IaC) développée avec Terraform pour un déploiement multi-cloud (AWS/Azure).',
      'Intégration de webhooks Kubernetes pour l\'automatisation des remédiations sans intervention humaine.'
    ]
  }
];