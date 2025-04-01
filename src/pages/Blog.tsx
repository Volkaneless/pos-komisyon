
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import CanonicalLink from "@/components/CanonicalLink";

type Category = "all" | "adsense" | "social-media" | "ppc";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredPosts = blogPosts.filter(post => 
    activeCategory === "all" ? true : post.category === activeCategory
  );

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
    <>
      <CanonicalLink path="/blog" />
      
      <Helmet>
        <title>POS Sistemleri Blog | Güncel POS ve Ödeme Sistemleri Haberleri</title>
        <meta 
          name="description" 
          content="POS sistemleri, komisyon oranları ve ödeme teknolojileri hakkında güncel bilgiler, haberler ve detaylı incelemeler." 
        />
        <meta name="keywords" content="pos blog, pos haberleri, pos sistemleri, pos teknolojileri, pos komisyon oranları" />
      </Helmet>

      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">POS Sistemleri Blog</h1>
          <p className="text-xl text-gray-600">
            POS ve ödeme sistemleri hakkında güncel bilgiler ve öneriler
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button
            variant={activeCategory === "all" ? "default" : "outline"}
            onClick={() => setActiveCategory("all")}
            className="rounded-full"
          >
            Tüm Yazılar
          </Button>
          <Button
            variant={activeCategory === "adsense" ? "default" : "outline"}
            onClick={() => setActiveCategory("adsense")}
            className="rounded-full"
          >
            POS Cihazları
          </Button>
          <Button
            variant={activeCategory === "social-media" ? "default" : "outline"}
            onClick={() => setActiveCategory("social-media")}
            className="rounded-full"
          >
            Sanal POS
          </Button>
          <Button
            variant={activeCategory === "ppc" ? "default" : "outline"}
            onClick={() => setActiveCategory("ppc")}
            className="rounded-full"
          >
            Mobil POS
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:translate-y-[-4px] animate-fade-in">
              <Link to={`/blog/${post.slug}`}>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
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
                  <h2 className="text-xl font-semibold mb-3 line-clamp-2 hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto font-medium text-primary hover:text-primary-hover"
                  >
                    Devamını Oku
                  </Button>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
