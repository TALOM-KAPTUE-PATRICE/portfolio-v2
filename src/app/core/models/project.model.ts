// Utilisation des clés de traduction pour les catégories
export type ProjectCategory = 
  | 'projects.categories.fullstack' 
  | 'projects.categories.devops' 
  | 'projects.categories.ai';

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