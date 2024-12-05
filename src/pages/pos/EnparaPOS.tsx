import POSDetailPage from "@/components/pos/POSDetailPage";

const provider = {
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
};

const EnparaPOS = () => {
  console.log('Rendering EnparaPOS with provider:', provider);
  return <POSDetailPage provider={provider} />;
};

export default EnparaPOS;