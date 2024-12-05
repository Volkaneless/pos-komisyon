import POSDetailPage from "@/components/pos/POSDetailPage";

const provider = {
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
};

const QNBPaySanalPOS = () => {
  console.log('Rendering QNBPaySanalPOS with provider:', provider);
  return <POSDetailPage provider={provider} />;
};

export default QNBPaySanalPOS;