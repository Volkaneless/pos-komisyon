import { BookOpen } from "lucide-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "POS Cihazı Nasıl Alınır?",
    excerpt: "POS cihazı başvurusu, gerekli belgeler ve seçim kriterleri hakkında detaylı rehber.",
    date: "2024-03-01",
    slug: "pos-cihazi-nasil-alinir"
  },
  {
    id: 2,
    title: "POS Komisyon Oranları 2024",
    excerpt: "Güncel POS komisyon oranları ve en uygun POS seçenekleri karşılaştırması.",
    date: "2024-03-01",
    slug: "pos-komisyon-oranlari"
  },
  {
    id: 3,
    title: "Sanal POS vs Fiziki POS Karşılaştırması",
    excerpt: "Sanal POS ve fiziki POS sistemlerinin avantajları ve dezavantajları.",
    date: "2024-03-01",
    slug: "sanal-pos-fiziki-pos-karsilastirma"
  }
];

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog | POS Komisyon Haberleri</title>
        <meta 
          name="description" 
          content="POS sistemleri, komisyon oranları ve güncel POS haberleri hakkında bilgi edinebileceğiniz blog sayfamızı ziyaret edin." 
        />
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
          {blogPosts.map((post) => (
            <article key={post.id} className="glass-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  {new Date(post.date).toLocaleDateString('tr-TR')}
                </span>
                <Link 
                  to={`/blog/${post.slug}`}
                  className="text-primary hover:text-primary-hover font-medium"
                >
                  Devamını Oku
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;