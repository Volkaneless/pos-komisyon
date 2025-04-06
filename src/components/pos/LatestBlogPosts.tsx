
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { Calendar, BookOpen } from "lucide-react";

interface LatestBlogPostsProps {
  category?: string;
}

const LatestBlogPosts = ({ category }: LatestBlogPostsProps) => {
  // Filter posts by category if provided
  const filteredPosts = category 
    ? blogPosts.filter(post => post.category === category)
    : blogPosts;

  const latestPosts = filteredPosts.slice(0, 3);

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

  if (latestPosts.length === 0) return null;

  return (
    <div className="space-y-5">
      {latestPosts.map((post) => (
        <Link
          key={post.id}
          to={`/blog/${post.slug}`}
          className="group block transition-all duration-300"
        >
          <div className="flex gap-4 p-4 rounded-lg hover:bg-primary-lighter transition-all duration-300">
            <div className="hidden sm:block flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden">
              <img 
                src={post.image || "/placeholder.svg"} 
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-block px-2 py-1 text-xs font-medium text-primary bg-primary-light rounded-full">
                  {getCategoryLabel(post.category)}
                </span>
                <div className="flex items-center text-xs text-gray-500">
                  <Calendar className="w-3 h-3 mr-1" />
                  {new Date(post.date).toLocaleDateString('tr-TR')}
                </div>
              </div>
              <h3 className="text-base font-medium mb-1 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex items-center mt-2 text-xs font-medium text-primary group-hover:text-primary-hover transition-colors">
                <BookOpen className="w-3 h-3 mr-1" />
                <span>Devamını Oku</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default LatestBlogPosts;
