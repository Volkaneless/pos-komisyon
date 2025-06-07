
import type { POSProvider } from "@/types/pos";

export const mobilPOSProviders: POSProvider[] = [
  {
    id: "enpara-mobil-pos",
    name: "Enpara Mobil POS",
    type: "Mobil POS",
    logo: "/logos/enpara.webp",
    monthly_fee: "59 TL",
    commission_rate: "1.79",
    features: [
      "4G ve Wi-Fi desteği",
      "Uzun batarya ömrü",
      "Su geçirmez tasarım",
      "Temassız ödeme",
      "Hızlı kurulum"
    ]
  },
  {
    id: "paycell-mobil-pos",
    name: "Paycell Mobil POS",
    type: "Mobil POS",
    logo: "/logos/paycell.webp",
    monthly_fee: "49 TL",
    commission_rate: "1.89",
    features: [
      "Bluetooth bağlantı",
      "Kompakt tasarım",
      "Çoklu kart desteği",
      "Offline işlem",
      "Güvenli şifreleme"
    ]
  },
  {
    id: "vallet-mobil-pos",
    name: "Vallet Mobil POS",
    type: "Mobil POS",
    logo: "/logos/vallet.webp",
    monthly_fee: "69 TL",
    commission_rate: "1.69",
    features: [
      "Android entegrasyonu",
      "QR kod desteği",
      "Gelişmiş raporlama",
      "Kolay kullanım",
      "7/24 destek"
    ]
  }
];
