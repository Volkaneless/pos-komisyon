import POSDetailPage from "@/components/pos/POSDetailPage";

const provider = {
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
};

const AkbankYazarkasaPOS = () => {
  console.log('Rendering AkbankYazarkasaPOS with provider:', provider);
  return <POSDetailPage provider={provider} />;
};

export default AkbankYazarkasaPOS;