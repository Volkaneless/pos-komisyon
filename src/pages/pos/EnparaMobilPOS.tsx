import POSDetailPage from "@/components/pos/POSDetailPage";

const provider = {
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
};

const EnparaMobilPOS = () => {
  console.log('Rendering EnparaMobilPOS with provider:', provider);
  return <POSDetailPage provider={provider} />;
};

export default EnparaMobilPOS;