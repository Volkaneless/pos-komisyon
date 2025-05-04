
import matter from 'gray-matter';

export interface BlogPostMeta {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image?: string;
}

export interface BlogPostData extends BlogPostMeta {
  content: string;
  slug: string;
}

// We'll import blog content directly from the data file instead of reading from filesystem
import { blogPosts } from "@/data/blogPosts";

export function getPostBySlug(slug: string): BlogPostData | null {
  try {
    // Find the blog post in our data array
    const post = blogPosts.find(post => post.slug === slug);
    
    if (!post) {
      return null;
    }
    
    return {
      title: post.title,
      excerpt: post.excerpt,
      date: post.date,
      category: post.category,
      image: post.image,
      content: post.content,
      slug: post.slug
    };
  } catch (error) {
    console.error(`Error getting post ${slug}:`, error);
    return null;
  }
}

export function getAllPosts(): BlogPostData[] {
  // Return all blog posts sorted by date
  return blogPosts
    .map(post => ({
      title: post.title,
      excerpt: post.excerpt,
      date: post.date,
      category: post.category,
      image: post.image,
      content: post.content,
      slug: post.slug
    }))
    .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
}
