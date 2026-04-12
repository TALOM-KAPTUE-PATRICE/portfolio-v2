import { Experience } from '../experience.model';

export const EXPERIENCES_DATA: Experience[] = [
  {
    id: '1',
    role: 'experience.items.exp1.role',
    company: 'experience.items.exp1.company',
    period: 'experience.items.exp1.period',
    description: 'experience.items.exp1.description',
    achievements: [
      'experience.items.exp1.achievements.0',
      'experience.items.exp1.achievements.1',
      'experience.items.exp1.achievements.2',
      'experience.items.exp1.achievements.3'
    ],
    technologies: ['Angular 21', 'Spring Boot 3', 'Kafka', 'Kubernetes', 'LangChain', 'Terraform']
  },
  {
    id: '2',
    role: 'experience.items.exp2.role',
    company: 'experience.items.exp2.company',
    period: '2021 - 2023',
    description: 'experience.items.exp2.description',
    achievements: [
      'experience.items.exp2.achievements.0',
      'experience.items.exp2.achievements.1',
      'experience.items.exp2.achievements.2'
    ],
    technologies: ['Spring Boot', 'Angular', 'Redis', 'PostgreSQL', 'Docker', 'Jenkins']
  }
];