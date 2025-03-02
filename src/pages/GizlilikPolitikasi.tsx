
import { Helmet } from "react-helmet";

const GizlilikPolitikasi = () => {
  return (
    <>
      <Helmet>
        <title>Gizlilik Politikası | POS Komisyon</title>
        <meta 
          name="description" 
          content="POS Komisyon gizlilik politikası. Kişisel verilerinizin nasıl işlendiği ve korunduğu hakkında bilgi alın." 
        />
        <link rel="canonical" href="https://poskomisyon.com/gizlilik-politikasi" />
      </Helmet>

      <div className="container mx-auto px-4 pt-24 pb-16">
        <article className="prose prose-lg max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Gizlilik Politikası</h1>
          
          <div className="text-sm text-gray-500 mb-8">
            Son Güncelleme Tarihi: 1 Haziran 2024
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Giriş</h2>
          <p>
            POS Komisyon ("biz", "bizim", "şirketimiz") olarak, kişisel verilerinizin gizliliğine büyük önem vermekteyiz. 
            Bu Gizlilik Politikası, web sitemizi ziyaret ettiğinizde veya hizmetlerimizi kullandığınızda kişisel verilerinizin 
            nasıl toplandığını, kullanıldığını ve korunduğunu açıklamaktadır.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Toplanan Veriler</h2>
          <p>
            Aşağıdaki kişisel verileri toplayabiliriz:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Ad, soyad, e-posta adresi gibi iletişim bilgileri</li>
            <li>IP adresi, cihaz bilgileri, tarayıcı bilgileri</li>
            <li>Sitemizi nasıl kullandığınıza dair bilgiler</li>
            <li>Çerezler yoluyla toplanan bilgiler</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Verilerin Kullanımı</h2>
          <p>
            Topladığımız kişisel verileri şu amaçlarla kullanabilir:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Hizmetlerimizi sunmak ve geliştirmek</li>
            <li>Web sitemizi ve kullanıcı deneyimini iyileştirmek</li>
            <li>İstatistiksel analizler yapmak</li>
            <li>Yasal yükümlülüklerimizi yerine getirmek</li>
            <li>Size özel içerik ve reklamlar sunmak</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Çerezler ve Benzer Teknolojiler</h2>
          <p>
            Web sitemizde çerezler ve benzer teknolojiler kullanmaktayız. Bu teknolojiler, 
            site kullanımınızı analiz etmemize, içeriği kişiselleştirmemize ve size daha iyi bir deneyim sunmamıza yardımcı olur. 
            Çerezler hakkında daha fazla bilgi için <a href="/cerez-politikasi" className="text-primary hover:underline">Çerez Politikamızı</a> inceleyebilirsiniz.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Google Analytics ve Google AdSense</h2>
          <p>
            Web sitemizde Google Analytics ve Google AdSense hizmetlerini kullanmaktayız. Bu hizmetler, site trafiğini analiz etmek ve 
            size ilgi alanlarınıza göre reklamlar göstermek için çerezler kullanır. Google'ın veri toplama ve işleme uygulamaları hakkında 
            daha fazla bilgi edinmek için Google'ın <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Gizlilik Politikasını</a> inceleyebilirsiniz.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Veri Güvenliği</h2>
          <p>
            Kişisel verilerinizi korumak için uygun teknik ve organizasyonel önlemler almaktayız. 
            Ancak, internet üzerinden hiçbir veri iletiminin %100 güvenli olmadığını unutmayın.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Veri Saklama Süresi</h2>
          <p>
            Kişisel verilerinizi yalnızca toplandıkları amaç için gerekli olan süre boyunca saklarız. 
            Bu süre, yasal yükümlülüklerimize, veri türüne ve diğer faktörlere bağlı olarak değişebilir.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Haklarınız</h2>
          <p>
            GDPR ve KVKK kapsamında aşağıdaki haklara sahipsiniz:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Kişisel verilerinize erişim hakkı</li>
            <li>Kişisel verilerinizin düzeltilmesini isteme hakkı</li>
            <li>Kişisel verilerinizin silinmesini isteme hakkı</li>
            <li>Veri işlemeye itiraz etme hakkı</li>
            <li>Veri taşınabilirliği hakkı</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">9. İletişim</h2>
          <p>
            Gizlilik politikamız veya kişisel verilerinizle ilgili sorularınız için 
            <a href="mailto:info@poskomisyon.com" className="text-primary hover:underline"> info@poskomisyon.com</a> adresinden bizimle iletişime geçebilirsiniz.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Gizlilik Politikası Değişiklikleri</h2>
          <p>
            Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Politikada yapılan önemli değişiklikler hakkında sizi bilgilendireceğiz.
          </p>
        </article>
      </div>
    </>
  );
};

export default GizlilikPolitikasi;
