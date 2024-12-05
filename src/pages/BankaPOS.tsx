import { Helmet } from "react-helmet";
import POSCard from "../components/POSCard";

const BankaPOS = () => {
  const posProviders = [
    {
      id: "akbank-yazarkasa",
      name: "Akbank POS",
      type: "Yazar Kasa (ÖKC) POS",
      logo: "/logos/akbank.webp",
      monthly_fee: "0TL",
      commission_rate: "1,79",
      features: [
        "Güvenli ödeme altyapısı",
        "Tüm kartlarla uyumlu",
        "Hızlı kurulum",
        "7/24 destek"
      ]
    },
    {
      id: "enpara-pos",
      name: "Enpara POS",
      type: "Yazar Kasa (ÖKC) POS",
      logo: "/logos/enpara.webp",
      monthly_fee: "0TL",
      commission_rate: "1,99",
      features: [
        "Dijital bankacılık entegrasyonu",
        "Düşük komisyon",
        "Kolay kullanım",
        "7/24 destek"
      ]
    },
    {
      id: "qnbpay-pos",
      name: "QNBpay POS",
      type: "Yazar Kasa (ÖKC) POS",
      logo: "/logos/qnbpay.webp",
      monthly_fee: "0TL",
      commission_rate: "1,99",
      features: [
        "Hızlı kurulum",
        "Kolay kullanım",
        "Ücretsiz kurulum",
        "7/24 destek"
      ]
    },
    {
      id: "garanti-pos",
      name: "Garanti POS",
      type: "Yazar Kasa (ÖKC) POS",
      logo: "/logos/garanti.webp",
      monthly_fee: "145 TL / Ay",
      commission_rate: "2,09",
      features: [
        "Güvenli altyapı",
        "Tüm kartlarla uyumlu",
        "Hızlı kurulum",
        "7/24 destek"
      ]
    },
    {
      id: "isbank-aninda",
      name: "İş Bankası Anında POS",
      type: "Yazar Kasa (ÖKC) POS",
      logo: "/logos/isbank.webp",
      monthly_fee: "119 TL / Ay",
      commission_rate: "2,15",
      features: [
        "Anında kurulum",
        "Kolay kullanım",
        "Tüm kartlarla uyumlu",
        "7/24 destek"
      ]
    },
    {
      id: "enpara-mobil",
      name: "Enpara Mobil POS",
      type: "Mobil (Taşınabilir) POS",
      logo: "/logos/enpara.webp",
      monthly_fee: "0TL",
      commission_rate: "1,99",
      features: [
        "Mobil cihaz uyumlu",
        "Düşük komisyon",
        "Kolay kullanım",
        "7/24 destek"
      ]
    },
    {
      id: "akbank-cebe",
      name: "Akbank Cebe POS",
      type: "Cep POS",
      logo: "/logos/akbank.webp",
      monthly_fee: "0TL",
      commission_rate: "1,79",
      features: [
        "Mobil uygulama",
        "Düşük komisyon",
        "Hızlı kurulum",
        "7/24 destek"
      ]
    },
    {
      id: "qnbpay-sanal",
      name: "QNBpay Sanal POS",
      type: "Sanal POS",
      logo: "/logos/qnbpay.webp",
      monthly_fee: "0TL",
      commission_rate: "1,99",
      features: [
        "E-ticaret uyumlu",
        "Kolay entegrasyon",
        "Güvenli altyapı",
        "7/24 destek"
      ]
    },
    {
      id: "akbank-sanal",
      name: "Akbank Sanal POS",
      type: "Sanal POS",
      logo: "/logos/akbank.webp",
      monthly_fee: "0TL",
      commission_rate: "1,79",
      features: [
        "E-ticaret uyumlu",
        "Düşük komisyon",
        "Kolay entegrasyon",
        "7/24 destek"
      ]
    },
    {
      id: "garanti-sanal",
      name: "Garanti Bankası Sanal POS",
      type: "Sanal POS",
      logo: "/logos/garanti.webp",
      monthly_fee: "0TL",
      commission_rate: "2,09",
      features: [
        "E-ticaret uyumlu",
        "Güvenli altyapı",
        "Kolay entegrasyon",
        "7/24 destek"
      ]
    }
  ];

  const categories = [
    "Yazar Kasa (ÖKC) POS",
    "Mobil (Taşınabilir) POS",
    "Cep POS",
    "Sanal POS"
  ];

  return (
    <>
      <Helmet>
        <title>Banka POS Komisyon Oranları 2024 | POS Komisyon</title>
        <meta 
          name="description" 
          content="2024 yılı güncel banka POS komisyon oranlarını karşılaştırın. En uygun banka POS komisyon oranlarını bulun ve hemen başvurun." 
        />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Banka POS Komisyon Oranları 2024</h1>
        
        <div className="space-y-16">
          {categories.map(category => {
            const categoryProviders = posProviders.filter(
              provider => provider.type === category
            );

            if (categoryProviders.length === 0) return null;

            return (
              <div key={category} className="space-y-6">
                <h2 className="text-2xl font-semibold mb-6">{category}</h2>
                <div className="grid gap-6">
                  {categoryProviders.map((provider) => (
                    <POSCard key={provider.id} {...provider} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BankaPOS;