
import type { POSProvider } from "@/types/pos";

export const otherBankBrokers: POSProvider[] = [
  {
    id: "qnb-finansinvest",
    name: "QNB Finansinvest",
    type: "Borsa Aracı Kurum",
    logo: "/lovable-uploads/1582e9fb-1b29-4608-a202-4923d8e8721b.png",
    monthly_fee: "0 TL / Ay",
    commission_rate: "%0,21",
    features: [
      "Finnet veri terminali",
      "Yurt dışı piyasa erişimi",
      "Profesyonel analiz ekibi",
      "Özel portföy raporları",
      "Alternatif yatırım ürünleri"
    ]
  },
  {
    id: "deniz-yatirim",
    name: "Deniz Yatırım",
    type: "Borsa Aracı Kurum",
    logo: "/logos/denizbank.webp",
    monthly_fee: "0 TL / Ay",
    commission_rate: "%0,23",
    features: [
      "DenizTrader platformu",
      "Forex işlemleri",
      "Kişiselleştirilmiş danışmanlık",
      "Bono ve tahvil işlemleri",
      "Yatırım fonu seçenekleri"
    ]
  },
  {
    id: "ak-yatirim",
    name: "AK Yatırım",
    type: "Borsa Aracı Kurum",
    logo: "/lovable-uploads/1582e9fb-1b29-4608-a202-4923d8e8721b.png",
    monthly_fee: "0 TL / Ay",
    commission_rate: "%0,22",
    features: [
      "TradingGEN platformu",
      "Kapsamlı piyasa analizleri",
      "Mobil işlem uygulaması",
      "Robot danışmanlık",
      "Yurt dışı piyasa erişimi"
    ]
  },
  {
    id: "seker-yatirim",
    name: "Şeker Yatırım",
    type: "Borsa Aracı Kurum",
    logo: "/lovable-uploads/1582e9fb-1b29-4608-a202-4923d8e8721b.png",
    monthly_fee: "0 TL / Ay",
    commission_rate: "%0,18",
    features: [
      "Seker Expert platformu",
      "Kurumsal araştırma raporları",
      "Portföy yönetim hizmetleri",
      "Düşük komisyon oranları",
      "Yatırım danışmanlığı"
    ]
  }
];
