
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
    has_turkish_lira: true,
    
    // Adding new required properties
    trading_fee: "0.1%",
    withdrawal_fee: "Değişken",
    is_turkish: true,
    country: "Türkiye",
    year_founded: "2019",
    deposit_methods: "Havale/EFT, Kredi Kartı",
    withdrawal_methods: "Havale/EFT",
    description: "Binance TR, dünyanın en büyük kripto para borsası Binance'in Türkiye'deki resmi platformudur.",
    website: "www.binance.com/tr",
    availability: "7/24",
    customer_support: "Türkçe Canlı Destek",
    social_media: "@BinanceTR"
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
    has_turkish_lira: true,
    
    // Adding new required properties
    trading_fee: "0.20%",
    withdrawal_fee: "Minimum tutar + ağ ücreti",
    is_turkish: true,
    country: "Türkiye",
    year_founded: "2021",
    deposit_methods: "Havale/EFT, Kredi Kartı",
    withdrawal_methods: "Havale/EFT",
    description: "Midas Kripto, kullanıcı dostu arayüzü ile Türk yatırımcılara hizmet veren yerli bir kripto para borsasıdır.",
    website: "www.midaskripto.com",
    availability: "7/24",
    customer_support: "Türkçe E-posta ve Canlı Destek",
    social_media: "@MidasKripto"
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
    has_turkish_lira: true,
    
    // Adding new required properties
    trading_fee: "0.20%",
    withdrawal_fee: "Coin bazında değişken",
    is_turkish: true,
    country: "Türkiye",
    year_founded: "2018",
    deposit_methods: "Havale/EFT, Kredi Kartı, FAST",
    withdrawal_methods: "Havale/EFT, FAST",
    description: "Bitlo, Türk kullanıcılar için optimize edilmiş arayüzü ve Türkçe desteğiyle bilinen yerli bir kripto para platformudur.",
    website: "www.bitlo.com",
    availability: "7/24",
    customer_support: "Türkçe Telefon ve Canlı Destek",
    social_media: "@Bitlocom"
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
    has_turkish_lira: true,
    
    // Adding new required properties
    trading_fee: "0.15%",
    withdrawal_fee: "Sabit ücret",
    is_turkish: true,
    country: "Türkiye",
    year_founded: "2017",
    deposit_methods: "Havale/EFT",
    withdrawal_methods: "Havale/EFT",
    description: "Paribu, Türkiye'nin en popüler kripto para borsalarından biridir ve kolay kullanımı ile bilinir.",
    website: "www.paribu.com",
    availability: "7/24",
    customer_support: "Türkçe E-posta ve Destek Merkezi",
    social_media: "@paribucom"
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
    has_turkish_lira: true,
    
    // Adding new required properties
    trading_fee: "0.20%",
    withdrawal_fee: "Değişken ücretlendirme",
    is_turkish: true,
    country: "Türkiye",
    year_founded: "2013",
    deposit_methods: "Havale/EFT, Kredi Kartı, ATM",
    withdrawal_methods: "Havale/EFT",
    description: "BtcTürk, Türkiye'nin ilk Bitcoin alım satım platformu olarak 2013 yılında kurulmuştur.",
    website: "www.btcturk.com",
    availability: "7/24",
    customer_support: "Türkçe Canlı Destek ve Telefon",
    social_media: "@btcturkpro"
  }
];
