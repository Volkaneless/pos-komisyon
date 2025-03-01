
export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  category: "adsense" | "social-media" | "ppc" | "general";
  image?: string;
  // Add missing properties used in Blog.tsx
  author?: string;
  url?: string;
  imageUrl?: string;
}

export type BlogPostInput = Omit<BlogPost, 'id' | 'slug'> & { slug?: string };
