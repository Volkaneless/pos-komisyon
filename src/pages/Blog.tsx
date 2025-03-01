
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { blogPosts } from "../data/blogPosts";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog | POS Komisyon - POS Cihazları Hakkında Makaleler</title>
        <meta name="description" content="POS cihazları, komisyon oranları ve ödeme sistemleri hakkında güncel makaleler, rehberler ve bilgilendirici içerikler." />
        <link rel="canonical" href="https://poskomisyon.com/blog" />
        <link rel="alternate" href="https://poskomisyon.com/" />
      </Helmet>

      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            POS cihazları, komisyon oranları ve ödeme sistemleri hakkında en güncel
            makaleler ve rehberler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              to={`/blog/${post.slug}`} // Changed from post.url to /blog/${post.slug}
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={post.image || "https://via.placeholder.com/400x200"} // Changed from post.imageUrl to post.image
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-primary">
                  {post.title}
                </h2>
                <p className="text-gray-600">{post.excerpt}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-gray-500 text-sm">
                    {post.category} - {post.date} {/* Changed from post.author to post.category */}
                  </span>
                  <span className="text-primary hover:underline">Devamını Oku</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
