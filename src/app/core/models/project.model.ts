export type ProjectCategory = 'Fullstack' | 'AI & Data' | 'DevOps & Cloud';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  thumbnailUrl: string;
  technologies: string[];
  category: ProjectCategory;
  githubUrl?: string;
  demoUrl?: string;
  technicalHighlights: string[]; // Points clés pour les recruteurs (ex: "Architecture Microservices", "RAG Integration")
}