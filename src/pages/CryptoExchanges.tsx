import { Coins } from "lucide-react";
import CryptoFeatures from "@/components/crypto/CryptoFeatures";
import ExchangesComparison from "@/components/crypto/ExchangesComparison";
import CryptoFAQ from "@/components/crypto/CryptoFAQ";
import ImportantInfo from "@/components/crypto/ImportantInfo";
import MetaTags from "@/components/MetaTags";

const CryptoExchanges = () => {
  const currentYear = new Date().getFullYear();
  const pageTitle = `En İyi ve Güvenilir Kripto Borsaları ${currentYear} | Karşılaştırma`;
  
  return (
    <>
      <MetaTags
        title={pageTitle}
        description={`${currentYear} yılı en güvenilir kripto para borsaları karşılaştırması. Binance, Coinbase, Paribu gibi kripto borsalarının komisyon oranları ve özellikleri.`}
        canonicalPath="/kripto-borsalari"
        priority={20}
      />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Coins className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">En İyi ve Güvenilir Kripto Borsaları {currentYear}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Türkiye'de ve dünyada en çok tercih edilen kripto para borsalarının komisyon oranlarını ve özelliklerini karşılaştırın, 
            yatırımlarınız için en uygun kripto borsasını kolayca bulun.
          </p>
        </div>

        <div className="mb-12">
          <div className="bg-primary/5 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Kripto Para Borsası Nedir?</h2>
            <p className="text-gray-700 mb-3">
              Kripto para borsaları, Bitcoin, Ethereum ve diğer kripto para birimlerinin alım satımının yapıldığı dijital platformlardır. 
              Bu platformlar, kripto para birimlerini satın almak, satmak veya başka kripto paralarla takas etmek isteyen kullanıcılar 
              arasında aracılık yapar.
            </p>
            <p className="text-gray-700">
              Her borsanın kendine özgü komisyon yapısı, desteklediği kripto para birimleri, güvenlik özellikleri ve kullanıcı deneyimi vardır. 
              Doğru kripto para borsasını seçmek, yatırım stratejinize, risk toleransınıza ve ihtiyaçlarınıza bağlıdır.
            </p>
          </div>
        </div>

        <CryptoFeatures />

        <div className="my-12">
          <h2 className="text-2xl font-bold mb-6">Kripto Para Borsası Karşılaştırma</h2>
          <ExchangesComparison />
        </div>

        <ImportantInfo />
        <CryptoFAQ />
      </div>
    </>
  );
};

export default CryptoExchanges;
