export interface Project {
  id: string;
  title: string;
  category: 'digital' | 'physical';
  subcategory: string;
  description: string;
  tags: string[];
  featured?: boolean;
  imageUrl?: string;
}
