
import { getPostBySlug } from "@/utils/markdown";
import { BlogPostDetail } from "@/components/blog/BlogPostDetail";
import { useEffect, useState } from "react";
import type { BlogPostData } from "@/utils/markdown";

const POSCihaziNedir = () => {
  const [post, setPost] = useState<BlogPostData | null>(null);
  
  useEffect(() => {
    const slug = "pos-cihazi-nedir-nasil-kullanilir";
    const fetchedPost = getPostBySlug(slug);
    setPost(fetchedPost);
  }, []);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Blog yazısı yükleniyor...</h1>
        <p>Lütfen bekleyin...</p>
      </div>
    );
  }

  return <BlogPostDetail post={post} />;
};

export default POSCihaziNedir;
