
import type { POSProvider } from "@/types/pos";

export const independentBrokers: POSProvider[] = [
  {
    id: "meksa-yatirim",
    name: "Meksa Yatırım",
    type: "Borsa Aracı Kurum",
    logo: "/lovable-uploads/1582e9fb-1b29-4608-a202-4923d8e8721b.png",
    monthly_fee: "0 TL / Ay",
    commission_rate: "%0,20",
    features: [
      "MeksaTrader platformu",
      "Kaldıraçlı işlemler",
      "Teknik analiz araçları",
      "Ücretsiz eğitimler",
      "Mobil işlem imkanı"
    ]
  },
  {
    id: "anadolu-yatirim",
    name: "Anadolu Yatırım",
    type: "Borsa Aracı Kurum",
    logo: "/lovable-uploads/1582e9fb-1b29-4608-a202-4923d8e8721b.png",
    monthly_fee: "0 TL / Ay",
    commission_rate: "%0,19",
    features: [
      "WebTrader platformu",
      "Piyasa analizleri",
      "Haftalık bültenler",
      "Portföy yönetimi",
      "Sabit getirili ürünler"
    ]
  },
  {
    id: "burgan-yatirim",
    name: "Burgan Yatırım",
    type: "Borsa Aracı Kurum",
    logo: "/lovable-uploads/1582e9fb-1b29-4608-a202-4923d8e8721b.png",
    monthly_fee: "0 TL / Ay",
    commission_rate: "%0,21",
    features: [
      "BurganTrader platformu",
      "Kurumsal finansman hizmetleri",
      "Stratejik araştırma raporları",
      "Yurt dışı işlem imkanı",
      "Özel müşteri temsilcisi"
    ]
  },
  {
    id: "integral-yatirim",
    name: "İntegral Yatırım",
    type: "Borsa Aracı Kurum",
    logo: "/lovable-uploads/1582e9fb-1b29-4608-a202-4923d8e8721b.png",
    monthly_fee: "0 TL / Ay",
    commission_rate: "%0,17",
    features: [
      "IntegralTrader platformu",
      "Forex işlemleri",
      "24/5 müşteri desteği",
      "Vadeli işlemler",
      "Eğitim webinarları"
    ]
  },
  {
    id: "global-yatirim",
    name: "Global Yatırım",
    type: "Borsa Aracı Kurum",
    logo: "/lovable-uploads/1582e9fb-1b29-4608-a202-4923d8e8721b.png",
    monthly_fee: "0 TL / Ay",
    commission_rate: "%0,20",
    features: [
      "GlobalTrader platformu",
      "Portföy yönetim hizmetleri",
      "Araştırma raporları",
      "VIP yatırımcı programı",
      "Uluslararası piyasa erişimi"
    ]
  }
];
