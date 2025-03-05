
import type { POSProvider } from "@/types/pos";

export const bankBrokers: POSProvider[] = [
  {
    id: "is-yatirim",
    name: "İş Yatırım",
    type: "Borsa Aracı Kurum",
    logo: "/logos/isbank.webp",
    monthly_fee: "0 TL / Ay",
    commission_rate: "%0,25",
    features: [
      "Güçlü banka altyapısı",
      "Geniş şube ağı",
      "TradeMaster platformu",
      "Profesyonel analist raporları",
      "Kurumsal yatırım danışmanlığı"
    ]
  },
  {
    id: "garanti-bbva-yatirim",
    name: "Garanti BBVA Yatırım",
    type: "Borsa Aracı Kurum",
    logo: "/logos/garanti.webp",
    monthly_fee: "0 TL / Ay",
    commission_rate: "%0,22",
    features: [
      "e-Trader platformu",
      "Kapsamlı piyasa analizi",
      "Mobil borsa uygulaması",
      "VIP yatırımcı hizmetleri",
      "Uluslararası piyasa erişimi"
    ]
  },
  {
    id: "ziraat-yatirim",
    name: "Ziraat Yatırım",
    type: "Borsa Aracı Kurum",
    logo: "/logos/ziraat.webp",
    monthly_fee: "0 TL / Ay",
    commission_rate: "%0,20",
    features: [
      "Yaygın şube ağı",
      "Online işlem platformu",
      "Düzenli piyasa analizleri",
      "Özel portföy yönetimi",
      "Rekabetçi komisyon oranları"
    ]
  },
  {
    id: "vakif-yatirim",
    name: "Vakıf Yatırım",
    type: "Borsa Aracı Kurum",
    logo: "/logos/vakifbank.webp",
    monthly_fee: "0 TL / Ay",
    commission_rate: "%0,21",
    features: [
      "VOBAKTİF işlem platformu",
      "Temel ve teknik analiz desteği",
      "Mobil borsa uygulaması",
      "Araştırma raporları",
      "Halka arz aracılık hizmetleri"
    ]
  },
  {
    id: "halk-yatirim",
    name: "Halk Yatırım",
    type: "Borsa Aracı Kurum",
    logo: "/logos/halkbank.webp",
    monthly_fee: "0 TL / Ay",
    commission_rate: "%0,19",
    features: [
      "HalkTrader platformu",
      "Günlük bültenler",
      "Stratejist tavsiyeleri",
      "VIP müşteri programı",
      "Yatırım danışmanlığı"
    ]
  },
  {
    id: "yapi-kredi-yatirim",
    name: "Yapı Kredi Yatırım",
    type: "Borsa Aracı Kurum",
    logo: "/logos/yapi-kredi.webp",
    monthly_fee: "0 TL / Ay",
    commission_rate: "%0,24",
    features: [
      "TRADER+ platformu",
      "Profesyonel analiz desteği",
      "Geniş ürün yelpazesi",
      "Kurumsal finansman hizmetleri",
      "Yatırım ürünleri araştırmaları"
    ]
  }
];
