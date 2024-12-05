import POSDetailPage from "@/components/pos/POSDetailPage";

const provider = {
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
};

const IsbankAnindaPOS = () => {
  console.log('Rendering IsbankAnindaPOS with provider:', provider);
  return <POSDetailPage provider={provider} />;
};

export default IsbankAnindaPOS;