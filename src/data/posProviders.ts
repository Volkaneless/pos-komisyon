import { yazarkasaPOSProviders } from './pos-types/yazarkasaPOS';
// Import other POS type providers here when they are created

export const posProviders = [
  ...yazarkasaPOSProviders,
  {
    id: "enpara-mobil",
    name: "Enpara Mobil POS",
    type: "Mobil (Taşınabilir) POS",
    logo: "/placeholder.svg",
    monthly_fee: "0TL",
    commission_rate: "1,99",
    features: [
      "Mobil cihaz uyumlu",
      "Taşınabilir",
      "Kolay kullanım",
      "7/24 destek"
    ]
  },
  {
    id: "esnek-pos",
    name: "Esnek POS",
    type: "Mobil (Taşınabilir) POS",
    logo: "/placeholder.svg",
    monthly_fee: "0TL",
    commission_rate: "0,1",
    features: [
      "Esnek kullanım",
      "Düşük komisyon",
      "Hızlı kurulum",
      "Teknik destek"
    ]
  },
  {
    id: "paycell-pos-mobil",
    name: "Paycell POS",
    type: "Mobil (Taşınabilir) POS",
    logo: "/placeholder.svg",
    monthly_fee: "249 TL / Ay",
    commission_rate: "2,7",
    features: [
      "Mobil ödeme",
      "Kolay taşıma",
      "Hızlı işlem",
      "7/24 destek"
    ]
  },
  // Cep POS
  {
    id: "logo-isbasi-cep",
    name: "Logo İşbaşı Cep POS",
    type: "Cep POS",
    logo: "/placeholder.svg",
    monthly_fee: "0TL",
    commission_rate: "3,99",
    features: [
      "Cep telefonu uyumlu",
      "Kolay kullanım",
      "Hızlı kurulum",
      "Teknik destek"
    ]
  },
  {
    id: "akbank-cebe",
    name: "Akbank Cebe POS",
    type: "Cep POS",
    logo: "/placeholder.svg",
    monthly_fee: "0TL",
    commission_rate: "1,79",
    features: [
      "Mobil uygulama",
      "Kolay kullanım",
      "Hızlı işlem",
      "7/24 destek"
    ]
  },
  {
    id: "vallet-mobil",
    name: "Vallet Mobil Pos",
    type: "Cep POS",
    logo: "/placeholder.svg",
    monthly_fee: "0TL",
    commission_rate: "0,29",
    features: [
      "Düşük komisyon",
      "Mobil uyumlu",
      "Kolay kullanım",
      "Teknik destek"
    ]
  },
  {
    id: "paytr-neopos",
    name: "PayTR NeoPOS+",
    type: "Cep POS",
    logo: "/placeholder.svg",
    monthly_fee: "0TL",
    commission_rate: "0,59",
    features: [
      "Modern arayüz",
      "Hızlı işlem",
      "Kolay kullanım",
      "7/24 destek"
    ]
  },
  {
    id: "esnekpos-cep",
    name: "EsnekPOS Cep POS",
    type: "Cep POS",
    logo: "/placeholder.svg",
    monthly_fee: "0TL",
    commission_rate: "2,69",
    features: [
      "Esnek kullanım",
      "Mobil uyumlu",
      "Kolay kurulum",
      "Teknik destek"
    ]
  },
  // Sanal POS
  {
    id: "vallet-sanal",
    name: "Vallet Sanal POS",
    type: "Sanal POS",
    logo: "/placeholder.svg",
    monthly_fee: "0TL",
    commission_rate: "0,49",
    features: [
      "E-ticaret uyumlu",
      "Kolay entegrasyon",
      "Düşük komisyon",
      "7/24 destek"
    ]
  },
  {
    id: "qnbpay-sanal",
    name: "QNBpay Sanal POS",
    type: "Sanal POS",
    logo: "/placeholder.svg",
    monthly_fee: "0TL",
    commission_rate: "1,99",
    features: [
      "Online ödeme",
      "Kolay entegrasyon",
      "Güvenli altyapı",
      "Teknik destek"
    ]
  },
  {
    id: "paytr-sanal",
    name: "PayTR Sanal POS",
    type: "Sanal POS",
    logo: "/placeholder.svg",
    monthly_fee: "0TL",
    commission_rate: "0,59",
    features: [
      "E-ticaret uyumlu",
      "Hızlı kurulum",
      "Düşük komisyon",
      "7/24 destek"
    ]
  },
  {
    id: "tosla-isim-sanal",
    name: "Tosla İşim Sanal POS",
    type: "Sanal POS",
    logo: "/placeholder.svg",
    monthly_fee: "0TL",
    commission_rate: "0,99",
    features: [
      "Online ödeme",
      "Kolay entegrasyon",
      "Modern arayüz",
      "Teknik destek"
    ]
  },
  {
    id: "moka-sanal",
    name: "Moka Sanal POS",
    type: "Sanal POS",
    logo: "/placeholder.svg",
    monthly_fee: "0TL",
    commission_rate: "1,89",
    features: [
      "E-ticaret uyumlu",
      "Kolay entegrasyon",
      "Güvenli altyapı",
      "7/24 destek"
    ]
  },
  {
    id: "garanti-sanal",
    name: "Garanti Bankası Sanal POS",
    type: "Sanal POS",
    logo: "/placeholder.svg",
    monthly_fee: "0TL",
    commission_rate: "2,09",
    features: [
      "Online ödeme",
      "Güvenli altyapı",
      "Kolay entegrasyon",
      "Teknik destek"
    ]
  },
  {
    id: "esnekpos-pazaryeri",
    name: "EsnekPOS Pazaryeri POS",
    type: "Sanal POS",
    logo: "/placeholder.svg",
    monthly_fee: "0TL",
    commission_rate: "2,69",
    features: [
      "Pazaryeri entegrasyonu",
      "Kolay kullanım",
      "Hızlı kurulum",
      "7/24 destek"
    ]
  },
  {
    id: "esnekpos",
    name: "EsnekPOS",
    type: "Sanal POS",
    logo: "/placeholder.svg",
    monthly_fee: "0TL",
    commission_rate: "2,69",
    features: [
      "Esnek kullanım",
      "E-ticaret uyumlu",
      "Kolay entegrasyon",
      "Teknik destek"
    ]
  },
  {
    id: "paycell-sanal",
    name: "Paycell POS",
    type: "Sanal POS",
    logo: "/placeholder.svg",
    monthly_fee: "0TL",
    commission_rate: "2,58",
    features: [
      "Online ödeme",
      "Güvenli altyapı",
      "Kolay entegrasyon",
      "7/24 destek"
    ]
  }
];
