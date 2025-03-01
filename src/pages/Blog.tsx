
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { formatDate } from "@/lib/utils";

const Blog = () => {
  const latestPost = blogPosts[0];

  return (
    <>
      <Helmet>
        <title>POS Komisyon Blog | En İyi POS Cihazı Rehberleri ve Analizleri</title>
        <meta 
          name="description" 
          content="POS cihazları, sanal POS ve mobil POS sistemleri hakkında güncel bilgiler, karşılaştırmalar ve uzman tavsiyeleri." 
        />
        <link rel="canonical" href="https://poskomisyon.com/blog" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">POS Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            POS cihazları, sanal POS ve mobil POS sistemleri hakkında güncel bilgiler ve karşılaştırmalar.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="glass-card rounded-xl overflow-hidden shadow-md">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={latestPost.imageUrl || "/placeholder.svg"}
                  alt={latestPost.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-8 md:w-1/2">
                <div className="uppercase tracking-wide text-sm text-primary font-semibold">
                  {latestPost.category === "general" ? "Genel" : latestPost.category === "adsense" ? "POS Cihazları" : latestPost.category === "social-media" ? "Sanal POS" : "Mobil POS"}
                </div>
                <Link to={`/blog/${latestPost.slug}`} className="block mt-1">
                  <h2 className="text-2xl font-semibold hover:text-primary transition-colors">{latestPost.title}</h2>
                </Link>
                <p className="mt-2 text-gray-500">
                  {formatDate(latestPost.date)} • {latestPost.author || "POS Compare"}
                </p>
                <p className="mt-4 text-gray-600">{latestPost.excerpt}</p>
                <Link
                  to={`/blog/${latestPost.slug}`}
                  className="mt-6 inline-block font-medium text-primary hover:underline"
                >
                  Devamını Oku →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* All Posts */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-8">Tüm Yazılar</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="glass-card rounded-xl overflow-hidden shadow-md">
                <img
                  src={post.imageUrl || "/placeholder.svg"}
                  alt={post.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <div className="uppercase tracking-wide text-xs text-primary font-semibold">
                    {post.category === "general" ? "Genel" : post.category === "adsense" ? "POS Cihazları" : post.category === "social-media" ? "Sanal POS" : "Mobil POS"}
                  </div>
                  <Link to={`/blog/${post.slug}`} className="block mt-1">
                    <h3 className="text-xl font-semibold hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="mt-2 text-gray-500">
                    {formatDate(post.date)} • {post.author || "POS Compare"}
                  </p>
                  <p className="mt-3 text-gray-600 line-clamp-3">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="mt-4 inline-block font-medium text-primary hover:underline"
                  >
                    Devamını Oku
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
