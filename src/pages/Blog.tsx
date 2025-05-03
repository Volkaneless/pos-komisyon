
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";
import { Calendar, Tag, Search } from "lucide-react";
import { Link } from "react-router-dom";
import MetaTags from "@/components/MetaTags";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

type Category = "all" | "adsense" | "social-media" | "ppc";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "all" ? true : post.category === activeCategory;
    const matchesSearch = searchQuery === "" ? true : 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

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
  
  const getCategoryColor = (category: string) => {
    switch(category) {
      case "adsense":
        return "bg-blue-100 text-blue-700";
      case "social-media":
        return "bg-green-100 text-green-700";
      case "ppc":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getFormattedDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('tr-TR', options);
  };

  return (
    <>
      <MetaTags
        title="POS Sistemleri Blog | Güncel POS ve Ödeme Sistemleri Haberleri"
        description="POS sistemleri, komisyon oranları ve ödeme teknolojileri hakkında güncel bilgiler, haberler ve detaylı incelemeler."
        keywords="pos blog, pos haberleri, pos sistemleri, pos teknolojileri, pos komisyon oranları"
        canonicalPath="/blog"
        priority={20}
      />

      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">POS Sistemleri Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            POS cihazları, ödeme sistemleri ve komisyon oranları hakkında güncel bilgiler, 
            detaylı kılavuzlar ve uzman görüşleri
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative">
            <Input 
              type="text" 
              placeholder="Blog yazılarında ara..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-6 rounded-full"
            />
            <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          </div>
        </div>

        <Card className="mb-12 border-none shadow-sm">
          <CardContent className="p-4">
            <div className="flex flex-wrap gap-3 justify-center">
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
          </CardContent>
        </Card>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">Aramanızla eşleşen sonuç bulunamadı.</p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="mt-4"
            >
              Filtreleri Temizle
            </Button>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px] animate-fade-in">
              <Link to={`/blog/${post.slug}`}>
                <div className="relative h-52 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor(post.category)}`}>
                      {getCategoryLabel(post.category)}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-3 line-clamp-2 hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {getFormattedDate(post.date)}
                    </div>
                    
                    <Button 
                      variant="link" 
                      className="p-0 h-auto font-medium text-primary hover:text-primary-hover"
                    >
                      Devamını Oku
                    </Button>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Blog Yazılarımıza Abone Olun</h2>
          <p className="text-gray-600 mb-6">
            En güncel POS haberleri, komisyon oranları ve özel teklifler için abone olun, ilk siz haberdar olun.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <Input 
              type="email" 
              placeholder="E-posta adresiniz" 
              className="sm:flex-1"
            />
            <Button>Abone Ol</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
