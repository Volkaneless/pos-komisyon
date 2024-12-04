import { POSProvider } from "@/types/pos";

export const mobilPOSProviders: POSProvider[] = [
  {
    id: "enpara-mobil",
    logo: "/logos/enpara.png",
    name: "Enpara Mobil POS",
    type: "Mobil (Taşınabilir) POS",
    monthly_fee: "0TL",
    commission_rate: "1,99",
    features: [
      "Mobil cihazlarla uyumlu",
      "Hızlı kurulum",
      "7/24 teknik destek",
      "Tüm kartlarla uyumlu"
    ]
  },
  {
    id: "esnek-mobil",
    logo: "/logos/esnek.png",
    name: "Esnek POS",
    type: "Mobil (Taşınabilir) POS",
    monthly_fee: "0TL",
    commission_rate: "0,1",
    features: [
      "Düşük komisyon oranı",
      "Kolay kullanım",
      "Hızlı para transferi",
      "Mobil uygulama desteği"
    ]
  },
  {
    id: "paycell-mobil",
    logo: "/logos/paycell.png",
    name: "Paycell POS",
    type: "Mobil (Taşınabilir) POS",
    monthly_fee: "249 TL / Ay",
    commission_rate: "2,7",
    features: [
      "Profesyonel destek",
      "Gelişmiş raporlama",
      "Güvenli işlem altyapısı",
      "Çoklu kullanıcı desteği"
    ]
  }
];