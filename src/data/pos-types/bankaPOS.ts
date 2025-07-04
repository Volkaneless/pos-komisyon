
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
      "12 aya varan taksit imkanı",
      "7/24 teknik destek",
      "Mobil uygulama desteği"
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
      "Esnaf dostu komisyon oranları",
      "QR kod ile ödeme",
      "Temassız ödeme desteği",
      "Anında para transferi",
      "Kampanya yönetimi"
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
      "Düşük komisyon oranları",
      "Tarım sektörüne özel avantajlar",
      "Kolay kullanım",
      "Geniş servis ağı",
      "Online raporlama"
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
      "Mobil POS çözümleri",
      "E-ticaret entegrasyonu",
      "Ücretsiz kurulum"
    ]
  },
  {
    id: "garanti-bbva-pos",
    name: "Garanti BBVA POS",
    type: "Banka POS",
    logo: "/logos/garanti.webp",
    monthly_fee: "139 TL / Ay",
    commission_rate: "1,85",
    features: [
      "GarantiPAY entegrasyonu",
      "QR ile ödeme",
      "18 aya varan taksit",
      "Sektörel kampanyalar",
      "Bonus program desteği"
    ]
  },
  {
    id: "yapi-kredi-pos",
    name: "Yapı Kredi POS",
    type: "Banka POS",
    logo: "/logos/yapi-kredi.webp",
    monthly_fee: "119 TL / Ay",
    commission_rate: "1,82",
    features: [
      "World program desteği",
      "Mobil cüzdan entegrasyonu",
      "E-ticaret çözümleri",
      "Çoklu para birimi",
      "Anlık bildirimler"
    ]
  },
  {
    id: "isbank-sanal-pos",
    name: "İş Bankası POS",
    type: "Banka POS",
    logo: "/logos/isbank.webp",
    monthly_fee: "149 TL / Ay",
    commission_rate: "1,95",
    features: [
      "Maximum kart program desteği",
      "E-ticaret entegrasyonu",
      "3D Secure güvenliği",
      "Mobil ödeme çözümleri",
      "18 aya varan taksit imkanı"
    ]
  },
  {
    id: "vakifbank-sanal-pos",
    name: "VakıfBank POS",
    type: "Banka POS",
    logo: "/logos/vakifbank.webp",
    monthly_fee: "129 TL / Ay",
    commission_rate: "1,85",
    features: [
      "World kart program desteği",
      "Kolay entegrasyon API",
      "7/24 teknik destek",
      "Çoklu para birimi desteği",
      "Otomatik ödeme sistemi"
    ]
  },
  {
    id: "denizbank-sanal-pos",
    name: "Denizbank POS",
    type: "Banka POS",
    logo: "/logos/denizbank.webp",
    monthly_fee: "139 TL / Ay",
    commission_rate: "1,92",
    features: [
      "Bonus kart program desteği",
      "E-ticaret entegrasyonu",
      "Gelişmiş raporlama",
      "Uluslararası kart kabulü",
      "Dinamik kur çevrimi"
    ]
  },
  {
    id: "akbank-pos",
    name: "Akbank POS",
    type: "Banka POS",
    logo: "/logos/akbank.webp",
    monthly_fee: "119 TL / Ay",
    commission_rate: "1,79",
    features: [
      "Axess kart program desteği",
      "Mobil ödeme çözümleri",
      "Güvenli altyapı",
      "Kolay entegrasyon",
      "7/24 teknik destek"
    ]
  },
  {
    id: "finansbank-pos",
    name: "QNB Finansbank POS",
    type: "Banka POS",
    logo: "/logos/qnb-finansbank.webp",
    monthly_fee: "129 TL / Ay",
    commission_rate: "1,85",
    features: [
      "Finanscard program desteği",
      "E-ticaret entegrasyonu",
      "Mobil POS çözümleri",
      "Güvenli işlem altyapısı",
      "7/24 müşteri desteği"
    ]
  },
  {
    id: "ing-pos",
    name: "ING Bank POS",
    type: "Banka POS",
    logo: "/logos/ing.webp",
    monthly_fee: "139 TL / Ay",
    commission_rate: "1,89",
    features: [
      "Dijital bankacılık entegrasyonu",
      "Modern ödeme çözümleri",
      "Güvenli altyapı",
      "Kolay kullanım",
      "7/24 teknik destek"
    ]
  }
];
