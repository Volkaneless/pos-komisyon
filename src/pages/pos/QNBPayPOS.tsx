import POSDetailPage from "@/components/pos/POSDetailPage";

const provider = {
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
};

const QNBPayPOS = () => {
  console.log('Rendering QNBPayPOS with provider:', provider);
  return <POSDetailPage provider={provider} />;
};

export default QNBPayPOS;