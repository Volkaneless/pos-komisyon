import { BookOpen } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "POS Cihazı Seçerken Dikkat Edilmesi Gerekenler",
      excerpt: "İşletmeniz için en uygun POS cihazını seçerken göz önünde bulundurmanız gereken önemli faktörler...",
      date: "15 Mart 2024",
    },
    {
      title: "Mobil POS vs Sabit POS: Hangisi Sizin İçin Daha Uygun?",
      excerpt: "Mobil ve sabit POS cihazlarının avantaj ve dezavantajlarını karşılaştırıyoruz...",
      date: "10 Mart 2024",
    },
    {
      title: "POS Komisyon Oranlarını Nasıl Düşürebilirsiniz?",
      excerpt: "İşletmenizin kârlılığını artırmak için POS komisyon oranlarını optimize etmenin yolları...",
      date: "5 Mart 2024",
    },
  ];

  return (
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
        {posts.map((post, index) => (
          <article key={index} className="glass-card p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{post.date}</span>
              <button className="text-primary hover:text-primary-hover font-medium">
                Devamını Oku
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;