import POSDetailPage from "@/components/pos/POSDetailPage";

const provider = {
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
};

const GarantiPOS = () => {
  console.log('Rendering GarantiPOS with provider:', provider);
  return <POSDetailPage provider={provider} />;
};

export default GarantiPOS;