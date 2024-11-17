import { Helmet } from "react-helmet";
import { posProviders } from "@/data/posProviders";
import POSCard from "@/components/POSCard";
import { terminal } from "lucide-react";

const YazarkasaPOS = () => {
  const yazarkasaPOSProviders = posProviders.filter(
    provider => provider.type === "Yazar Kasa (ÖKC) POS"
  );

  return (
    <>
      <Helmet>
        <title>Yazarkasa POS Sistemleri ve Komisyon Oranları 2024 | POS Compare</title>
        <meta 
          name="description" 
          content="En uygun yazarkasa POS cihazları, komisyon oranları ve karşılaştırmaları. Güncel 2024 yazarkasa POS fiyatları ve özellikleri hakkında detaylı bilgi alın."
        />
      </Helmet>

      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <terminal className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Yazarkasa POS Sistemleri
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            En uygun yazarkasa POS cihazları ve komisyon oranlarını karşılaştırın. 
            Size en uygun yazarkasa POS sistemini seçin.
          </p>
        </div>

        <div className="prose max-w-none mb-12">
          <h2>Yazarkasa POS Nedir?</h2>
          <p>
            Yazarkasa POS cihazları, ödeme alma ve fiş kesme işlemlerini tek bir cihaz üzerinden 
            yapmanıza olanak sağlayan entegre sistemlerdir. Yeni nesil ÖKC (Ödeme Kaydedici Cihaz) 
            olarak da bilinen bu cihazlar, işletmelerin yasal zorunluluklarını yerine getirmelerini 
            sağlarken, modern ödeme çözümleri sunar.
          </p>

          <h2>Yazarkasa POS'un Avantajları</h2>
          <ul>
            <li>Tek cihaz üzerinden hem fiş kesme hem ödeme alma imkanı</li>
            <li>Gelişmiş raporlama özellikleri</li>
            <li>Maliye Bakanlığı onaylı yasal gerekliliklerle uyumlu</li>
            <li>Stok takibi ve müşteri yönetimi özellikleri</li>
            <li>Çoklu ödeme seçenekleri (nakit, kredi kartı, yemek kartı vb.)</li>
          </ul>
        </div>

        <div className="grid gap-8 mb-12">
          {yazarkasaPOSProviders.map((provider) => (
            <POSCard key={provider.id} {...provider} />
          ))}
        </div>

        <div className="prose max-w-none">
          <h2>Sıkça Sorulan Sorular</h2>
          
          <h3>Yazarkasa POS almak zorunlu mu?</h3>
          <p>
            Belirli iş kollarında ve ciro limitlerini aşan işletmelerde yazarkasa POS kullanımı 
            yasal bir zorunluluktur. İşletmenizin bu kapsama girip girmediğini öğrenmek için 
            mali müşavirinize danışabilirsiniz.
          </p>

          <h3>Yazarkasa POS cihazı için aylık ücret ödenir mi?</h3>
          <p>
            Yazarkasa POS cihazları için genellikle aylık bakım ve işletim ücreti ödenir. 
            Bu ücretler bankalar ve POS sağlayıcıları arasında farklılık gösterebilir. 
            Yukarıdaki karşılaştırma tablosunda güncel ücretleri görebilirsiniz.
          </p>

          <h3>Yazarkasa POS cihazı arızalanırsa ne yapmalıyım?</h3>
          <p>
            Cihazınız arızalandığında, POS sağlayıcınızın teknik destek hattını aramanız 
            gerekir. Çoğu sağlayıcı 24 saat teknik destek hizmeti sunmaktadır.
          </p>
        </div>
      </div>
    </>
  );
};

export default YazarkasaPOS;