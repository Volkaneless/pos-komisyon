import { useParams, Navigate } from "react-router-dom";
import BlogDetailLayout from "@/components/blog/BlogDetailLayout";
import { blogContent } from "@/data/blogContent";

const BlogDetail = () => {
  const { slug } = useParams();
  
  if (!slug || !blogContent[slug as keyof typeof blogContent]) {
    return <Navigate to="/blog" replace />;
  }
  
  const post = blogContent[slug as keyof typeof blogContent];
  
  return (
    <BlogDetailLayout
      title={post.title}
      description={post.description}
      category={post.category}
      author={post.author}
      date={post.date}
      readTime={post.readTime}
      image={post.image}
      content={post.content}
      slug={slug}
    />
  );
};

export default BlogDetail;