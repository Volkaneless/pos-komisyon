import POSDetailPage from "@/components/pos/POSDetailPage";

const provider = {
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
};

const AkbankCebePOS = () => {
  console.log('Rendering AkbankCebePOS with provider:', provider);
  return <POSDetailPage provider={provider} />;
};

export default AkbankCebePOS;