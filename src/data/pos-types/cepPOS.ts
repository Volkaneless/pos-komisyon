import { POSProvider } from "@/types/pos";

export const cepPOSProviders: POSProvider[] = [
  {
    id: "logo-isbasi-cep",
    logo: "/logos/logo.png",
    name: "Logo İşbaşı Cep POS",
    type: "Cep POS",
    monthly_fee: "0TL",
    commission_rate: "3,99",
    features: [
      "Akıllı telefon uyumlu",
      "Hızlı kurulum",
      "Anlık bildirimler",
      "Detaylı raporlama"
    ]
  },
  {
    id: "akbank-cebe",
    logo: "/logos/akbank.png",
    name: "Akbank Cebe POS",
    type: "Cep POS",
    monthly_fee: "0TL",
    commission_rate: "1,79",
    features: [
      "Kolay kullanım",
      "Güvenli altyapı",
      "7/24 destek",
      "Hızlı para transferi"
    ]
  },
  {
    id: "vallet-mobil",
    logo: "/logos/vallet.png",
    name: "Vallet Mobil Pos",
    type: "Cep POS",
    monthly_fee: "0TL",
    commission_rate: "0,29",
    features: [
      "Düşük komisyon",
      "Anında aktivasyon",
      "Tüm kartlarla uyumlu",
      "Mobil uygulama"
    ]
  },
  {
    id: "paytr-neopos",
    logo: "/logos/paytr.png",
    name: "PayTR NeoPOS+",
    type: "Cep POS",
    monthly_fee: "0TL",
    commission_rate: "0,59",
    features: [
      "Modern arayüz",
      "Hızlı işlem",
      "Güvenli altyapı",
      "Teknik destek"
    ]
  },
  {
    id: "esnekpos-cep",
    logo: "/logos/esnek.png",
    name: "EsnekPOS Cep POS",
    type: "Cep POS",
    monthly_fee: "0TL",
    commission_rate: "2,69",
    features: [
      "Esnek kullanım",
      "Kolay entegrasyon",
      "Online destek",
      "Gelişmiş raporlama"
    ]
  }
];