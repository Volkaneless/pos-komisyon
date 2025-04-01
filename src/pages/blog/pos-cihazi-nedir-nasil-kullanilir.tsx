import { Helmet } from "react-helmet";
import { blogPosts } from "@/data/blogPosts";
import CanonicalLink from "@/components/CanonicalLink";

const POSCihaziNedir = () => {
  const post = blogPosts.find(post => post.slug === "pos-cihazi-nedir-nasil-kullanilir");

  if (!post) {
    return <div>Blog yazısı bulunamadı.</div>;
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | POS Komisyon</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      
      <CanonicalLink path={`/blog/${post.slug}`} />

      <div className="container mx-auto px-4 py-12">
        <article className="prose prose-lg mx-auto">
          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
          
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full rounded-lg mb-8"
          />

          <div className="mt-8">
            <h2>POS Cihazı Nedir?</h2>
            <p>POS cihazı ya da POS terminali, ismini "satış noktası" anlamına gelen "point of sale" kelimelerinin baş harflerinden alıyor ve müşterilerin aldıkları ürün ya da hizmet karşılığında, banka kartı ve kredi kartının yanı sıra QR kod, NFC gibi temassız sistemlerle ödeme yapmalarına olanak sağlayan elektronik cihaz anlamına geliyor.</p>

            <h2>POS Cihazı Ne İşe Yarar?</h2>
            <p>Perakende satış noktalarında, restoranlarda, otellerde, e-ticaret işletmelerinde, restoranlarda ve diğer birçok sektörde yaygın olarak kullanılan POS cihazları, ödeme işlemlerinin dışında pek çok işleve sahiptir.</p>

            <h3>POS Cihazının Temel İşlevleri:</h3>
            <ul>
              <li>Kredi kartı, banka kartı ve temassız ödeme işlemleri</li>
              <li>İade ve iptal işlemleri</li>
              <li>Stok takibi ve yönetimi</li>
              <li>Satış raporlaması ve analizi</li>
              <li>Müşteri bilgi yönetimi</li>
            </ul>
          </div>
        </article>
      </div>
    </>
  );
};

export default POSCihaziNedir;
