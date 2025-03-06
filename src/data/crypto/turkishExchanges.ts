
import { CryptoExchange } from '@/types/crypto';

/**
 * Turkish cryptocurrency exchanges
 * These exchanges support Turkish Lira trading pairs
 */
export const turkishExchanges: CryptoExchange[] = [
  {
    id: "binance-tr",
    name: "Binance TR",
    logo: "/logos/binance-tr.webp",
    maker_fee: "0.1%",
    taker_fee: "0.1%",
    features: [
      "TL yatırma/çekme",
      "30+ kripto para",
      "Binance ekosistemine erişim",
      "Türkçe destek"
    ],
    founded: "2019",
    headquarters: "Türkiye",
    mobile_app: true,
    credit_card: true,
    bank_transfer: true,
    has_turkish_lira: true
  },
  {
    id: "midas-kripto",
    name: "Midas Kripto",
    logo: "/logos/midas.webp",
    maker_fee: "0.15%",
    taker_fee: "0.25%",
    features: [
      "Türk lirası ile işlem",
      "Kullanıcı dostu arayüz",
      "Mobil uygulama",
      "Türkçe destek"
    ],
    founded: "2021",
    headquarters: "Türkiye",
    mobile_app: true,
    credit_card: true,
    bank_transfer: true,
    has_turkish_lira: true
  },
  {
    id: "bitlo",
    name: "Bitlo",
    logo: "/logos/bitlo.webp",
    maker_fee: "0.15%",
    taker_fee: "0.25%",
    features: [
      "Türk lirası ile işlem",
      "Kolay kullanım",
      "7/24 Türkçe destek",
      "Mobil uygulama"
    ],
    founded: "2018",
    headquarters: "Türkiye",
    mobile_app: true,
    credit_card: true,
    bank_transfer: true,
    has_turkish_lira: true
  },
  {
    id: "paribu",
    name: "Paribu",
    logo: "/logos/paribu.webp",
    maker_fee: "0.1%",
    taker_fee: "0.2%",
    features: [
      "Türk lirası ile işlem",
      "Basit arayüz",
      "7/24 Türkçe destek",
      "Hızlı para yatırma/çekme"
    ],
    founded: "2017",
    headquarters: "Türkiye",
    mobile_app: true,
    credit_card: false,
    bank_transfer: true,
    has_turkish_lira: true
  },
  {
    id: "btcturk",
    name: "BtcTürk",
    logo: "/logos/btcturk.webp",
    maker_fee: "0.15%",
    taker_fee: "0.25%",
    features: [
      "Türk lirası ile işlem",
      "Yüksek güvenlik",
      "Pro trading platformu",
      "Mobil uygulama"
    ],
    founded: "2013",
    headquarters: "Türkiye",
    mobile_app: true,
    credit_card: true,
    bank_transfer: true,
    has_turkish_lira: true
  }
];
