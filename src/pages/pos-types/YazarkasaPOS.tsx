import { Helmet } from "react-helmet";
import { PencilRuler } from "lucide-react";
import POSTypePage from "@/components/pos-types/POSTypePage";
import FAQ from "@/components/FAQ";

const YazarkasaPOS = () => {
  return (
    <>
      <Helmet>
        <title>Yazar Kasa POS Komisyon Oranları 2025 | ÖKC POS Fiyatları</title>
        <meta name="description" content="2025 yılı güncel yazar kasa POS komisyon oranları ve ÖKC POS cihazları fiyat karşılaştırmaları. En uygun yazar kasa POS'lar." />
        <meta name="keywords" content="yazar kasa pos, ökc pos, yazarkasa pos fiyatları, yazar kasa pos komisyon oranları, yazar kasa pos 2025" />
        <link rel="canonical" href="https://poskomisyon.com/pos-types/yazarkasa" />
        <link rel="alternate" href="https://poskomisyon.com/" />
      </Helmet>

      <POSTypePage
        title="Yazar Kasa POS Komisyon Oranları 2025"
        description="Yazar kasa (ÖKC) POS cihazlarını karşılaştırın, işletmeniz için en uygun ÖKC POS çözümünü kolayca bulun."
        content={
          <div className="prose max-w-none">
            <p>Yazar kasa POS cihazları (ÖKC POS), hem fiş/fatura kesme hem de ödeme alma işlevine sahip entegre cihazlardır. Vergi düzenlemeleri gereği birçok işletme için zorunludur.</p>
            
            <h3>Yazar Kasa POS Avantajları</h3>
            <ul>
              <li>Tek cihazla hem satış hem tahsilat yapabilme</li>
              <li>Vergi mevzuatına tam uyumluluk</li>
              <li>Stok ve muhasebe entegrasyonu</li>
              <li>Maliyet optimizasyonu</li>
            </ul>
          </div>
        }
      />

      <div className="container mx-auto px-4 py-8">
        <FAQ />
      </div>
    </>
  );
};

export default YazarkasaPOS;
