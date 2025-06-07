
import type { POSProvider } from "@/types/pos";

export const cepPOSProviders: POSProvider[] = [
  {
    id: "logo-isbasi-cep",
    name: "Logo İşbaşı Cep POS",
    type: "Cep POS",
    logo: "/logos/logo.webp",
    monthly_fee: "0 TL",
    commission_rate: "1.49",
    features: [
      "Telefon uygulaması",
      "NFC teknolojisi",
      "QR kod ödeme",
      "Anlık bildirimler",
      "E-fatura entegrasyonu"
    ]
  },
  {
    id: "akbank-cebe",
    name: "Akbank Cebe POS",
    type: "Cep POS",
    logo: "/logos/akbank.webp",
    monthly_fee: "0 TL",
    commission_rate: "1.79",
    features: [
      "iOS ve Android",
      "Temassız ödeme",
      "Güvenli işlemler",
      "Hızlı kurulum",
      "Müşteri desteği"
    ]
  },
  {
    id: "vallet-mobil",
    name: "Vallet Mobil POS",
    type: "Cep POS",
    logo: "/logos/vallet.webp",
    monthly_fee: "0 TL",
    commission_rate: "1.69",
    features: [
      "Kolay kullanım",
      "Çoklu ödeme seçenekleri",
      "Detaylı raporlar",
      "Güvenli altyapı",
      "Hızlı aktivasyon"
    ]
  }
];
