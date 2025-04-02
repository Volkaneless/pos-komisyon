import { Info } from "lucide-react";
import MetaTags from "@/components/MetaTags";

const About = () => {
  return (
    <>
      <MetaTags
        title="POS Karşılaştırma Platformu Hakkında | POS Compare"
        description="POS karşılaştırma platformumuz ile işletmeniz için en uygun POS çözümünü bulun. Banka ve fintech POS cihazlarını karşılaştırın."
        keywords="pos karşılaştırma, pos cihazı karşılaştırma, pos compare hakkında, pos danışmanlık, pos çözümleri"
        canonicalPath="/about"
        priority={20}
      />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Info className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold">Hakkımızda</h1>
          </div>
          <p className="text-xl text-gray-600">
            POS karşılaştırma platformunuz
          </p>
        </div>

        <div className="max-w-3xl mx-auto glass-card p-8 rounded-lg">
          <div className="prose prose-lg">
            <p className="mb-6">
              POS Compare olarak, işletmelerin en uygun POS çözümünü bulmalarına yardımcı olmak için yola çıktık. Platformumuz, farklı POS sağlayıcılarının tekliflerini karşılaştırmanıza ve işletmeniz için en doğru kararı vermenize olanak tanır.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Misyonumuz</h2>
            <p className="mb-6">
              İşletmelerin dijital ödeme çözümlerini seçerken bilinçli kararlar vermelerini sağlamak ve bu süreçte yanlarında olmak.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Vizyonumuz</h2>
            <p className="mb-6">
              Türkiye'nin en güvenilir POS karşılaştırma platformu olarak, işletmelerin dijital dönüşümüne öncülük etmek.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Değerlerimiz</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Şeffaflık</li>
              <li>Güvenilirlik</li>
              <li>Müşteri odaklılık</li>
              <li>Yenilikçilik</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
