
import type { POSProvider } from "@/types/pos";

export const borsaAraciKurumProviders: POSProvider[] = [
  // Dijital Aracı Kurumlar
  {
    id: "midas",
    name: "Midas",
    type: "Borsa Aracı Kurum",
    logo: "/lovable-uploads/1582e9fb-1b29-4608-a202-4923d8e8721b.png",
    monthly_fee: "0 TL / Ay",
    commission_rate: "%0,08",
    features: [
      "BIST hisselerinde %0,08 komisyon",
      "Amerikan borsalarına erişim",
      "Zengin analiz araçları",
      "Kolay kullanımlı mobil uygulama",
      "Ücretsiz portföy takibi"
    ]
  },
  {
    id: "matriks",
    name: "Matriks",
    type: "Borsa Aracı Kurum",
    logo: "/lovable-uploads/1582e9fb-1b29-4608-a202-4923d8e8721b.png",
    monthly_fee: "159 TL / Ay",
    commission_rate: "%0,15",
    features: [
      "Gelişmiş analiz yazılımı",
      "Canlı veri akışı",
      "Profesyonel grafik araçları",
      "Özelleştirilebilir ekranlar",
      "Güçlü arama ve filtreleme"
    ]
  },
  {
    id: "piapiri",
    name: "Piapiri",
    type: "Borsa Aracı Kurum",
    logo: "/lovable-uploads/1582e9fb-1b29-4608-a202-4923d8e8721b.png",
    monthly_fee: "0 TL / Ay",
    commission_rate: "%0,10",
    features: [
      "Düşük komisyon oranları",
      "Kolay kullanımlı arayüz",
      "Hızlı işlem platformu",
      "Yeni nesil yatırım deneyimi",
      "Eğitici içerikler"
    ]
  },
  {
    id: "forinvest",
    name: "ForInvest",
    type: "Borsa Aracı Kurum",
    logo: "/lovable-uploads/1582e9fb-1b29-4608-a202-4923d8e8721b.png",
    monthly_fee: "0 TL / Ay",
    commission_rate: "%0,12",
    features: [
      "Rekabetçi komisyon oranları",
      "Forex ve hisse senedi işlemleri",
      "Teknik analiz araçları",
      "Mobil uygulama",
      "Ücretsiz eğitimler"
    ]
  },
  {
    id: "slayz",
    name: "Slayz",
    type: "Borsa Aracı Kurum",
    logo: "/lovable-uploads/1582e9fb-1b29-4608-a202-4923d8e8721b.png",
    monthly_fee: "0 TL / Ay",
    commission_rate: "%0,09",
    features: [
      "Yenilikçi yatırım platformu",
      "Düşük komisyon oranları",
      "Kullanıcı dostu arayüz",
      "Yatırım eğitimleri",
      "Hızlı hesap açılışı"
    ]
  },
  
  // Banka Aracı Kurumlar
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
  },
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
  },
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
