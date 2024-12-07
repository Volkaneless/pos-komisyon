import { BookOpen } from "lucide-react";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { BlogPost } from "@/types/blog";

const Blog = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: async () => {
      // Insert blog posts if they don't exist
      const { data: existingPosts } = await supabase
        .from('blog_posts')
        .select('*');

      if (!existingPosts || existingPosts.length === 0) {
        const newPosts = [
          {
            title: "2024 POS Komisyon Oranları: Kapsamlı Rehber",
            excerpt: "2024 yılı için güncel POS komisyon oranları, karşılaştırmalar ve işletmeniz için en uygun POS seçimi hakkında detaylı bilgiler.",
            content: "POS komisyon oranları, işletmelerin kârlılığını doğrudan etkileyen önemli bir faktördür. 2024 yılında bankalar ve ödeme kuruluşları tarafından sunulan POS cihazlarının komisyon oranları, işletme türüne ve işlem hacmine göre %0,29 ile %2,70 arasında değişmektedir...",
            date: new Date().toISOString(),
          },
          {
            title: "Yazar Kasa POS Cihazları: Avantajlar ve Dezavantajlar",
            excerpt: "Yazar kasa POS cihazlarının özellikleri, maliyetleri ve işletmenize sağlayacağı faydalar hakkında detaylı inceleme.",
            content: "Yazar kasa POS cihazları, tek bir cihazda hem yazar kasa hem de POS özelliklerini birleştirerek işletmelere önemli avantajlar sağlar. Bu rehberde, yazar kasa POS cihazlarının tüm yönlerini inceliyoruz...",
            date: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
          },
          {
            title: "Sanal POS vs Fiziki POS: Hangisi Sizin İçin Daha Uygun?",
            excerpt: "E-ticaret ve fiziki mağazalar için sanal POS ve fiziki POS karşılaştırması, maliyet analizi ve seçim kriterleri.",
            content: "Günümüzde işletmeler için ödeme alma yöntemleri çeşitlendi. Sanal POS ve fiziki POS sistemleri arasında seçim yaparken dikkat edilmesi gereken birçok faktör bulunuyor...",
            date: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
          }
        ];

        await supabase
          .from('blog_posts')
          .insert(newPosts);
      }

      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('date', { ascending: false });
      
      if (error) throw error;
      return data as BlogPost[];
    }
  });

  return (
    <>
      <Helmet>
        <title>POS Komisyon Blog | Güncel POS Haberleri ve Rehberler</title>
        <meta name="description" content="POS komisyon oranları, yazar kasa POS cihazları ve ödeme sistemleri hakkında güncel blog yazıları, rehberler ve karşılaştırmalar." />
        <meta name="keywords" content="pos blog, pos komisyon blog, pos rehber, yazar kasa pos, sanal pos, pos karşılaştırma" />
        <link rel="canonical" href="https://poskomisyon.com/blog" />
        <meta property="og:title" content="POS Komisyon Blog | Güncel POS Haberleri ve Rehberler" />
        <meta property="og:description" content="POS komisyon oranları, yazar kasa POS cihazları ve ödeme sistemleri hakkında güncel blog yazıları, rehberler ve karşılaştırmalar." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://poskomisyon.com/blog" />
      </Helmet>

      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold">Blog</h1>
          </div>
          <p className="text-xl text-gray-600">
            POS sistemleri hakkında güncel bilgiler ve öneriler
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            <p className="text-center col-span-full">Yükleniyor...</p>
          ) : posts?.map((post) => (
            <article key={post.id} className="glass-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-xl font-semibold mb-3 hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  {new Date(post.date || '').toLocaleDateString('tr-TR')}
                </span>
                <button className="text-primary hover:text-primary-hover font-medium transition-colors">
                  Devamını Oku
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;