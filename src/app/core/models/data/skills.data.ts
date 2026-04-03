import { SkillCategory } from '../skills.model';

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Frontend Architecture',
    icon: 'angular',
    color: 'oklch(65% 0.2 260)',
    skills: ['Angular 21 (Signals, Zoneless)', 'Architecture SSR & Hydratation', 'State Management (NgRx/Signals)', 'Micro-Frontends & Module Federation']
  },
  {
    title: 'Backend Engineering',
    icon: 'spring',
    color: 'oklch(70% 0.15 140)',
    skills: ['Spring Boot 3.4 (Virtual Threads)', 'Architecture Hexagonale/Clean', 'Event-Driven (Kafka/RabbitMQ)', 'Security (Keycloak, OAuth2, JWT)']
  },
  {
    title: 'Cloud & DevOps',
    icon: 'devops',
    color: 'oklch(60% 0.15 30)',
    skills: ['Orchestration Kubernetes (K8s)', 'Infrastructure as Code (Terraform)', 'Pipelines CI/CD (Jenkins, Actions)', 'Observabilité (Prometheus, Grafana)']
  },
  {
    title: 'AI & Intelligent Systems',
    icon: 'ai',
    color: 'oklch(70% 0.15 320)',
    skills: ['Intégration LLM (OpenAI, Anthropic)', 'Retrieval-Augmented Generation (RAG)', 'Vector DBs (Chroma, Pinecone)', 'Agentic Workflows (LangChain)']
  }
];
