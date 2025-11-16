export interface Project {
  id: string;
  title: string;
  category: 'digital' | 'physical';
  subcategory: string;
  description: string;
  tags: string[];
  featured?: boolean;
  imageUrl?: string;
  images?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
  readTime?: string;
}
