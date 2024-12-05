import POSDetailPage from "@/components/pos/POSDetailPage";

const provider = {
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
};

const GarantiSanalPOS = () => {
  console.log('Rendering GarantiSanalPOS with provider:', provider);
  return <POSDetailPage provider={provider} />;
};

export default GarantiSanalPOS;