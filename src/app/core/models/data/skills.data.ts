import { SkillCategory } from '../skills.model';

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Frontend Mastery',
    icon: '🅰️',
    color: 'oklch(65% 0.2 260)',
    skills: ['Angular 21 (Signals, SSR)', 'TypeScript 5', 'RxJS', 'Tailwind CSS']
  },
  {
    title: 'Backend & Architecture',
    icon: '🍃',
    color: 'oklch(70% 0.15 140)',
    skills: ['Spring Boot 3', 'Microservices', 'PostgreSQL / NoSQL', 'Keycloak (Security)']
  },
  {
    title: 'DevOps & Automatisation',
    icon: '🚀',
    color: 'oklch(60% 0.15 30)',
    skills: ['Docker & Kubernetes', 'CI/CD (GitHub Actions)', 'Terraform', 'AWS/Azure']
  },
  {
    title: 'AI & Data Science',
    icon: '🧠',
    color: 'oklch(70% 0.15 320)',
    skills: ['LLM Integration (RAG)', 'Python / PyTorch', 'HuggingFace', 'Vector Databases']
  }
];
