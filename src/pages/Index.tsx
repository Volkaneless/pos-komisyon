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
      "İşbaşı POS ile mobilden temassız ödeme alarak fiziksel POS ve sarf malzemesi maliyetini ortadan kaldırın."
    ],
  },
  {
    logo: "/akbank-logo.svg",
    name: "Akbank Fiziki / Masaüstü POS",
    type: "Yazar Kasa (ÖKC) POS",
    monthlyFee: "0 TL / Ay",
    commissionRate: "%1,79",
    features: [
      "Akbank POS ile 3 ay boyunca %1,79 komisyon ve 1 yıl ücretsizlik avantajına ek, şimdi başvuranlara 1.500 TL chip-para fırsatı!"
    ],
  },
  {
    logo: "/paytr-logo.svg",
    name: "NeoPOS+",
    type: "Cep POS",
    monthlyFee: "0 TL / Ay",
    commissionRate: "%0,59",
    features: [
      "PayTR NeoPOS+ ile Android işletim sistemli NFC özellikli cep telefonu veya tabletlerinizi anında POS cihazına dönüştürerek ödemelerinizi temassız bir şekilde tek çekim veya taksitli alabilirsiniz."
    ],
  },
  {
    logo: "/akbank-logo.svg",
    name: "Akbank Sanal POS",
    type: "Sanal POS",
    monthlyFee: "0 TL / Ay",
    commissionRate: "%1,79",
    features: [
      "Akbank POS ile 3 ay boyunca %1,79 komisyon ve 1 yıl ücretsizlik avantajına ek, şimdi başvuranlara 1.500 TL chip-para fırsatı!"
    ],
  },
  {
    logo: "/tosla-logo.svg",
    name: "Tosla İşim Sanal POS",
    type: "Sanal POS",
    monthlyFee: "0 TL / Ay",
    commissionRate: "%0,99",
    features: [
      "Tosla İşim ile Ücretsiz, Hızlı ve Güvenli Sanal POS!"
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
  },
  {
    logo: "/esnekpos-logo.svg",
    name: "Cep POS",
    type: "Cep POS",
    monthlyFee: "0 TL / Ay",
    commissionRate: "%2,69",
    features: [
      "EsnekPOS'la NFC'li Android Telefondan CepPOS'a!"
    ],
  },
  {
    logo: "/garanti-logo.svg",
    name: "Sanal POS",
    type: "Sanal POS",
    monthlyFee: "0 TL / Ay",
    commissionRate: "%2,09",
    features: [
      "%2,09 komisyon oranı ve ilk yıl ücretsiz Sanal POS fırsatından yararlanın!"
    ],
  },
  {
    logo: "/isbank-logo.svg",
    name: "Anında POS",
    type: "Yazar Kasa (ÖKC) POS",
    monthlyFee: "119 TL / Ay",
    commissionRate: "%2,15",
    features: [
      "Avantajlı oranlarla Anında POS'a başvurun!"
    ],
  },
  {
    logo: "/esnekpos-logo.svg",
    name: "Pazaryeri POS",
    type: "Sanal POS",
    monthlyFee: "0 TL / Ay",
    commissionRate: "%2,69",
    features: [
      "EsnekPOS ile artık Pazaryeri çözümleriniz çok daha kolay!"
    ],
  },
  {
    logo: "/esnekpos-logo.svg",
    name: "EsnekPOS",
    type: "Sanal POS",
    monthlyFee: "0 TL / Ay",
    commissionRate: "%2,69",
    features: [
      "Aynı gün kurulum ile ertesi gün ödemeli SanalPOS'unuz hazır!"
    ],
  },
  {
    logo: "/paycell-logo.svg",
    name: "Sanal POS",
    type: "Sanal POS",
    monthlyFee: "0 TL / Ay",
    commissionRate: "%2,58",
    features: [
      "Tek entegrasyonla 24 saat içinde bütün bankalar elinizin altında! valörlü çalışma için %0'dan başlayan komisyon oranları sizi bekliyor."
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