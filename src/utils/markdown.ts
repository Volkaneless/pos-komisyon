import fs from 'fs';
import path from 'path';
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

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export function getPostBySlug(slug: string): BlogPostData | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      ...(data as BlogPostMeta),
      content,
      slug,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

export function getAllPosts(): BlogPostData[] {
  const slugs = fs.readdirSync(postsDirectory);
  const posts = slugs
    .filter(slug => slug.endsWith('.md'))
    .map(slug => {
      const realSlug = slug.replace(/\.md$/, '');
      const post = getPostBySlug(realSlug);
      return post;
    })
    .filter((post): post is BlogPostData => post !== null)
    .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));

  return posts;
}