
export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image?: string;
}

export interface BlogPostInput {
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image?: string;
}
