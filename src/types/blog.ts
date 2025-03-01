
export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  category: "adsense" | "social-media" | "ppc" | "general";
  image?: string;
  url?: string; // URL özelliği
  imageUrl?: string; // Resim URL'si
  author?: string; // Yazar bilgisi
}

export type BlogPostInput = Omit<BlogPost, 'id' | 'slug'> & { slug?: string };
