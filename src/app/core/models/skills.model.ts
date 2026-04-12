export interface SkillCategory {
  titleKey: string; // Clé de traduction pour le titre de la catégorie
  icon: string;
  color: string;
  skillKeys: string[]; // Tableau de clés de traduction pour les compétences
  // Ces propriétés seront remplies dynamiquement après traduction
  title?: string;
  skills?: string[];
}
