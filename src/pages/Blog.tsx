import { BookOpen } from "lucide-react";
import { Helmet } from "react-helmet";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog | POS Komisyon Oranları ve POS Haberleri</title>
        <meta name="description" content="POS sistemleri, komisyon oranları ve güncel POS haberleri hakkında bilgi edinebileceğiniz blog sayfamızı ziyaret edin." />
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
    </>
  );
};

export default Blog;
