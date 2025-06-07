
import type { POSProvider } from "@/types/pos";

export const sanalPOSProviders: POSProvider[] = [
  {
    id: "iyzico-sanal-pos",
    name: "iyzico Sanal POS",
    type: "Sanal POS",
    logo: "/logos/iyzico.webp",
    monthly_fee: "0 TL",
    commission_rate: "1.95",
    features: [
      "Hızlı entegrasyon",
      "Güvenli ödeme altyapısı",
      "Çoklu dil desteği",
      "Mobil uyumlu",
      "7/24 teknik destek"
    ]
  },
  {
    id: "paytr-sanal",
    name: "PayTR Sanal POS",
    type: "Sanal POS",
    logo: "/logos/paytr.webp",
    monthly_fee: "0 TL",
    commission_rate: "0.59",
    features: [
      "En düşük komisyon",
      "Kolay API entegrasyonu",
      "Anlık ödeme bildirimleri",
      "Fraud koruması",
      "Detaylı raporlama"
    ]
  },
  {
    id: "param-sanal",
    name: "Param Sanal POS",
    type: "Sanal POS",
    logo: "/logos/param.webp",
    monthly_fee: "0 TL",
    commission_rate: "1.89",
    features: [
      "BKM Express entegrasyonu",
      "3D Secure güvenliği",
      "Taksit imkanları",
      "E-ticaret modülleri",
      "Çoklu para birimi"
    ]
  }
];
