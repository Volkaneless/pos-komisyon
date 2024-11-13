import POSCard from "../components/POSCard";

const posProviders = [
  {
    logo: "/placeholder.svg",
    name: "Enpara.com Masaüstü/Mobil POS",
    type: "Mobil (Taşınabilir) POS",
    monthlyFee: "0 TL / Ay",
    commissionRate: "%1,99",
    features: [
      "%1,99 oran ve taksitli satış imkanı!",
      "Mobil uygulama üzerinden kolay kullanım",
      "7/24 teknik destek",
    ],
  },
  {
    logo: "/placeholder.svg",
    name: "Ödeal Yazar Kasa POS",
    type: "Yazar Kasa (ÖKC) POS",
    monthlyFee: "0 TL / Ay",
    commissionRate: "%0,00",
    features: [
      "HangiKredi KOBİ'ye Özel Ertesi Güne %0 Komisyonlu POS!",
      "İlk Ay Aidat Hediye!",
      "Hızlı kurulum ve aktivasyon",
    ],
  },
  {
    logo: "/placeholder.svg",
    name: "Akbank Yazar Kasa POS",
    type: "Yazar Kasa (ÖKC) POS",
    monthlyFee: "0 TL / Ay",
    commissionRate: "%1,79",
    features: [
      "3 ay boyunca %1,79 komisyon",
      "1 yıl ücretsizlik avantajı",
      "1.500 TL chip-para fırsatı",
    ],
  },
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