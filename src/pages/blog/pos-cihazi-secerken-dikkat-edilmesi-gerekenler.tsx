
import { getPostBySlug } from "@/utils/markdown";
import { BlogPostDetail } from "@/components/blog/BlogPostDetail";

const BlogPostDetailPage = () => {
  const slug = "pos-cihazi-secerken-dikkat-edilmesi-gerekenler";
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Blog yazısı bulunamadı.</h1>
        <p>Aradığınız blog yazısı bulunamadı veya kaldırılmış olabilir.</p>
      </div>
    );
  }

  return <BlogPostDetail post={post} />;
};

export default BlogPostDetailPage;
