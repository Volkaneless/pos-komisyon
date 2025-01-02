export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: "adsense" | "social-media" | "ppc" | "general";
  image?: string;
}

export type BlogPostInput = Omit<BlogPost, 'id'>;