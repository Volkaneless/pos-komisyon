
import type { POSProvider } from "@/types/pos";

export const bankaPOSProviders: POSProvider[] = [
  {
    id: "teb-pos",
    name: "TEB POS",
    type: "Banka POS",
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
    id: "halkbank-pos",
    name: "Halkbank POS",
    type: "Banka POS",
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
    id: "ziraat-pos",
    name: "Ziraat POS",
    type: "Banka POS",
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
    id: "kuveyt-turk-pos",
    name: "Kuveyt Türk POS",
    type: "Banka POS",
    logo: "/logos/kuveyt-turk.webp",
    monthly_fee: "109 TL / Ay",
    commission_rate: "1,89",
    features: [
      "İslami finans uyumlu",
      "Tüm kartlarla uyumlu",
      "Hızlı kurulum",
      "7/24 destek"
    ]
  }
];
