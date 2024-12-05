import POSDetailPage from "@/components/pos/POSDetailPage";

const provider = {
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
};

const AkbankSanalPOS = () => {
  console.log('Rendering AkbankSanalPOS with provider:', provider);
  return <POSDetailPage provider={provider} />;
};

export default AkbankSanalPOS;