import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { Calendar } from "lucide-react";

const LatestBlogPosts = () => {
  const latestPosts = blogPosts.slice(0, 3);

  const getCategoryLabel = (category: string) => {
    switch(category) {
      case "adsense":
        return "POS Cihazları";
      case "social-media":
        return "Sanal POS";
      case "ppc":
        return "Mobil POS";
      default:
        return "Genel";
    }
  };

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold mb-6">Son Blog Yazıları</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {latestPosts.map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.slug}`}
            className="block bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:translate-y-[-4px]"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary-light rounded-full">
                  {getCategoryLabel(post.category)}
                </span>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(post.date).toLocaleDateString('tr-TR')}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 line-clamp-2 hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {post.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LatestBlogPosts;