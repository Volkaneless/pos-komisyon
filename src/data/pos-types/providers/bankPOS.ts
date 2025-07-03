
import type { POSProvider } from "@/types/pos";

export const bankPOSProviders: POSProvider[] = [
  {
    id: "teb-pos-yazarkasa",
    name: "TEB POS",
    type: "Yazar Kasa (ÖKC) POS",
    logo: "/logos/teb.webp",
    monthly_fee: "129 TL / Ay",
    commission_rate: "1,89",
    features: [
      "Güvenli ödeme altyapısı",
      "Tüm kartlarla uyumlu",
      "Hızlı kurulum",
      "7/24 destek"
    ]
  },
  {
    id: "halkbank-pos-yazarkasa",
    name: "Halkbank POS",
    type: "Yazar Kasa (ÖKC) POS",
    logo: "/logos/halkbank.webp",
    monthly_fee: "99 TL / Ay",
    commission_rate: "1,79",
    features: [
      "Güvenli altyapı",
      "Kolay kullanım",
      "Hızlı kurulum",
      "7/24 destek"
    ]
  },
  {
    id: "ziraat-pos-yazarkasa",
    name: "Ziraat POS",
    type: "Yazar Kasa (ÖKC) POS",
    logo: "/logos/ziraat.webp",
    monthly_fee: "89 TL / Ay",
    commission_rate: "1,69",
    features: [
      "Güvenli ödeme altyapısı",
      "Tüm kartlarla uyumlu",
      "Hızlı kurulum",
      "7/24 destek"
    ]
  },
  {
    id: "kuveyt-turk-pos-yazarkasa",
    name: "Kuveyt Türk POS",
    type: "Yazar Kasa (ÖKC) POS",
    logo: "/logos/kuveyt-turk.webp",
    monthly_fee: "109 TL / Ay",
    commission_rate: "1,89",
    features: [
      "İslami finans uyumlu",
      "Tüm kartlarla uyumlu",
      "Hızlı kurulum",
      "7/24 destek"
    ]
  },
  {
    id: "garanti-pos-yazarkasa",
    name: "Garanti BBVA POS",
    type: "Yazar Kasa (ÖKC) POS",
    logo: "/logos/garanti.webp",
    monthly_fee: "139 TL / Ay",
    commission_rate: "1,85",
    features: [
      "GarantiPAY entegrasyonu",
      "Yazar kasa desteği",
      "Güvenli altyapı",
      "7/24 destek"
    ]
  },
  {
    id: "akbank-pos-yazarkasa",
    name: "Akbank POS",
    type: "Yazar Kasa (ÖKC) POS",
    logo: "/logos/akbank.webp",
    monthly_fee: "119 TL / Ay",
    commission_rate: "1,79",
    features: [
      "Axess kart desteği",
      "Yazar kasa entegrasyonu",
      "Güvenli altyapı",
      "7/24 teknik destek"
    ]
  },
  {
    id: "vakifbank-pos-yazarkasa",
    name: "VakıfBank POS",
    type: "Yazar Kasa (ÖKC) POS",
    logo: "/logos/vakifbank.webp",
    monthly_fee: "129 TL / Ay",
    commission_rate: "1,85",
    features: [
      "World kart desteği",
      "Yazar kasa entegrasyonu",
      "7/24 teknik destek",
      "Güvenli işlem altyapısı"
    ]
  },
  {
    id: "isbank-pos-yazarkasa",
    name: "İş Bankası POS",
    type: "Yazar Kasa (ÖKC) POS",
    logo: "/logos/isbank.webp",
    monthly_fee: "149 TL / Ay",
    commission_rate: "1,95",
    features: [
      "Maximum kart desteği",
      "Yazar kasa entegrasyonu",
      "3D Secure güvenliği",
      "7/24 teknik destek"
    ]
  }
];
