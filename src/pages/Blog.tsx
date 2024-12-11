import { BookOpen } from "lucide-react";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { BlogPost } from "@/types/blog";

const Blog = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('date', { ascending: false });
      
      if (error) throw error;
      return data as BlogPost[];
    }
  });

  const staticBlogPost = {
    id: 999,
    title: "POS Cihazı Seçerken Dikkat Edilmesi Gereken 5 Önemli Kriter",
    excerpt: "İşletmeniz için doğru POS cihazını seçmek, işlem maliyetlerinizi optimize etmenin yanı sıra müşteri memnuniyetini artırmanın da anahtarıdır.",
    date: "2024-03-20",
    content: `
      <h2>POS Cihazı Seçiminde Önemli Kriterler</h2>
      <p>İşletmeniz için doğru POS cihazını seçmek, hem maliyetlerinizi optimize etmenizi sağlar hem de müşteri memnuniyetini artırır. İşte dikkat etmeniz gereken 5 önemli kriter:</p>
      
      <h3>1. İşlem Komisyon Oranları</h3>
      <p>POS cihazı sağlayıcılarının komisyon oranları farklılık gösterebilir. Aylık işlem hacminize göre en uygun oranı sunan sağlayıcıyı tercih etmelisiniz.</p>
      
      <h3>2. Cihaz Türü ve Özellikleri</h3>
      <p>Sabit POS, mobil POS, yazarkasa POS gibi farklı türler arasından işletmenizin ihtiyaçlarına en uygun olanı seçmelisiniz.</p>
      
      <h3>3. Teknik Destek ve Servis</h3>
      <p>7/24 teknik destek sunan ve hızlı servis sağlayan firmaları tercih etmek, olası sorunlarda minimum iş kaybı yaşamanızı sağlar.</p>
      
      <h3>4. Taksit ve Kampanya İmkanları</h3>
      <p>Müşterilerinize sunabileceğiniz taksit seçenekleri ve kampanya imkanları satışlarınızı artırabilir.</p>
      
      <h3>5. Ek Maliyetler</h3>
      <p>Aylık sabit ücret, bakım ücreti gibi ek maliyetleri değerlendirerek toplam maliyeti hesaplamalısınız.</p>
    `
  };

  return (
    <>
      <Helmet>
        <title>POS Sistemleri Blog | Güncel POS Haberleri</title>
        <meta 
          name="description" 
          content="POS sistemleri, komisyon oranları ve güncel POS haberleri hakkında detaylı bilgiler. POS dünyasındaki son gelişmeleri takip edin." 
        />
        <meta name="keywords" content="pos blog, pos haberleri, pos sistemleri, pos teknolojileri, pos yenilikleri" />
        <link rel="canonical" href="https://poskomisyon.com/blog" />
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
          <article className="glass-card p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-3">{staticBlogPost.title}</h2>
            <p className="text-gray-600 mb-4">{staticBlogPost.excerpt}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">
                {new Date(staticBlogPost.date).toLocaleDateString('tr-TR')}
              </span>
              <button className="text-primary hover:text-primary-hover font-medium">
                Devamını Oku
              </button>
            </div>
          </article>

          {isLoading ? (
            <p className="text-center col-span-full">Yükleniyor...</p>
          ) : posts?.map((post) => (
            <article key={post.id} className="glass-card p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  {new Date(post.date || '').toLocaleDateString('tr-TR')}
                </span>
                <button className="text-primary hover:text-primary-hover font-medium">
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