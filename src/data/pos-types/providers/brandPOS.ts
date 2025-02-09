
import type { POSProvider } from "@/types/pos";

export const brandPOSProviders: POSProvider[] = [
  {
    id: "beko-pos",
    name: "Beko Yazar Kasa POS",
    type: "Yazar Kasa (ÖKC) POS",
    logo: "/logos/beko.webp",
    monthly_fee: "0TL",
    commission_rate: "1,99",
    features: [
      "Entegre yazarkasa",
      "Kolay kullanım",
      "Hızlı kurulum",
      "7/24 destek"
    ]
  },
  {
    id: "ingenico-pos",
    name: "Ingenico POS",
    type: "Yazar Kasa (ÖKC) POS",
    logo: "/logos/ingenico.webp",
    monthly_fee: "0TL",
    commission_rate: "1,99",
    features: [
      "Global ödeme çözümleri",
      "Tüm kartlarla uyumlu",
      "Hızlı kurulum",
      "7/24 destek"
    ]
  }
];
