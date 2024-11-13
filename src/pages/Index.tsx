import POSCard from "../components/POSCard";

const posProviders = [
  {
    logo: "/enpara-logo.svg",
    name: "Enpara.com Yazar Kasa POS",
    type: "Yazar Kasa (ÖKC) POS",
    monthlyFee: "0 TL / Ay",
    commissionRate: "%1,99",
    features: [
      "%1,99 oran ve taksitli satış imkanı!"
    ],
  },
  {
    logo: "/esnekpos-logo.svg",
    name: "Android POS",
    type: "Mobil (Taşınabilir) POS",
    monthlyFee: "0 TL / Ay",
    commissionRate: "%0,10",
    features: [
      "EsnekPOS'tan kobilere özel 10 numara oranın hazır!"
    ],
  },
  {
    logo: "/tosla-logo.svg",
    name: "Tosla İşim POS",
    type: "Yazar Kasa (ÖKC) POS",
    monthlyFee: "0 TL / Ay",
    commissionRate: "%1,69",
    features: [
      "Ertesi Güne %1,69 Komisyonlu POS!"
    ],
  },
  {
    logo: "/logo-isbasi-logo.svg",
    name: "Logo İşbaşı POS",
    type: "Cep POS",
    monthlyFee: "0 TL / Ay",
    commissionRate: "%3,99",
    features: [
      "Cep POS ile işletmenizi her yerde yönetin!"
    ],
  },
  {
    logo: "/wallet-logo.svg",
    name: "Sanal Pos",
    type: "Sanal POS",
    monthlyFee: "0 TL / Ay",
    commissionRate: "%0,49",
    features: [
      "Dijital başvurularda 16 gün valör ile %0, 1 gün valör %1,69 komisyon oranı fırsatı!"
    ],
  },
  {
    logo: "/garanti-logo.svg",
    name: "Fiziki POS",
    type: "Yazar Kasa (ÖKC) POS",
    monthlyFee: "145 TL / Ay",
    commissionRate: "%2,09",
    features: [
      "İlk 3 ay ücretsiz!"
    ],
  },
  {
    logo: "/paytr-logo.svg",
    name: "Sanal POS",
    type: "Sanal POS",
    monthlyFee: "0 TL / Ay",
    commissionRate: "%0,59",
    features: [
      "PayTR ile Sanal POS'unuzu 2 saat içerisinde aktif hale getirerek tüm banka kartlarından peşin veya taksitli ödeme almaya başlayabilirsiniz."
    ],
  },
  {
    logo: "/moka-logo.svg",
    name: "Moka Sanal POS",
    type: "Sanal POS",
    monthlyFee: "0 TL / Ay",
    commissionRate: "%1,89",
    features: [
      "%1,89 komisyon oranıyla ödemeleriniz ertesi gün hesabınızda."
    ],
  }
];

const Index = () => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          En İyi POS Cihazı Teklifleri
        </h1>
        <p className="text-xl text-gray-600">
          Karşılaştırın, en uygun POS çözümünü seçin
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posProviders.map((provider, index) => (
          <POSCard key={index} {...provider} />
        ))}
      </div>
    </div>
  );
};

export default Index;
