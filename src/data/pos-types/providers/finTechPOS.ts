
import type { POSProvider } from "@/types/pos";

export const finTechPOSProviders: POSProvider[] = [
  {
    id: "cepteb-iste",
    name: "CEPTEB İşte POS",
    type: "Yazar Kasa (ÖKC) POS",
    logo: "/logos/cepteb-iste.webp",
    monthly_fee: "0TL",
    commission_rate: "0,99",
    features: [
      "Yazar kasa entegrasyonu",
      "Düşük komisyon oranı",
      "Aidat ödemesi yok",
      "7/24 teknik destek"
    ]
  },
  {
    id: "logo-isbasi",
    name: "Logo İşbaşı POS",
    type: "Yazar Kasa (ÖKC) POS",
    logo: "/logos/logo-isbasi.webp",
    monthly_fee: "0TL",
    commission_rate: "0",
    features: [
      "Entegre yazarkasa",
      "Stok takibi",
      "Raporlama özellikleri",
      "Teknik destek"
    ]
  },
  {
    id: "odeal-pos",
    name: "Ödeal POS",
    type: "Yazar Kasa (ÖKC) POS",
    logo: "/logos/odeal.webp",
    monthly_fee: "0TL",
    commission_rate: "0",
    features: [
      "Kolay kullanım",
      "Hızlı kurulum",
      "Ücretsiz kurulum",
      "Teknik destek"
    ]
  },
  {
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
  },
  {
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
  },
  {
    id: "tosla-isim",
    name: "Tosla İşim POS",
    type: "Yazar Kasa (ÖKC) POS",
    logo: "/logos/tosla.webp",
    monthly_fee: "0TL",
    commission_rate: "1,69",
    features: [
      "Modern arayüz",
      "Kolay kullanım",
      "Hızlı kurulum",
      "Teknik destek"
    ]
  }
];
