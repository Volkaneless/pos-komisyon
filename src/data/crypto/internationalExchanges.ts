
import { CryptoExchange } from '@/types/crypto';

/**
 * International cryptocurrency exchanges
 * These exchanges don't support direct Turkish Lira trading
 */
export const internationalExchanges: CryptoExchange[] = [
  {
    id: "binance",
    name: "Binance",
    logo: "/logos/binance.webp",
    maker_fee: "0.1%",
    taker_fee: "0.1%",
    features: [
      "700+ kripto para çifti",
      "Yüksek likidite",
      "Gelişmiş trading araçları",
      "Staking imkanları"
    ],
    founded: "2017",
    headquarters: "Cayman Adaları",
    mobile_app: true,
    credit_card: true,
    bank_transfer: true,
    has_turkish_lira: false,
    
    // Adding new required properties
    trading_fee: "0.1%",
    withdrawal_fee: "Coin bazında değişken",
    is_turkish: false,
    country: "Cayman Adaları",
    year_founded: "2017",
    deposit_methods: "Banka Transferi, Kredi Kartı, P2P",
    withdrawal_methods: "Banka Transferi, P2P",
    description: "Binance, dünyanın en büyük kripto para borsası olup, geniş ürün yelpazesi ve düşük ücretleri ile bilinir.",
    website: "www.binance.com",
    availability: "Global",
    customer_support: "Çoklu Dil Desteği",
    social_media: "@binance"
  },
  {
    id: "okx",
    name: "OKX",
    logo: "/logos/okx.webp",
    maker_fee: "0.08%",
    taker_fee: "0.1%",
    features: [
      "400+ kripto para çifti",
      "Türev ürünler",
      "DeFi entegrasyonu",
      "NFT pazaryeri"
    ],
    founded: "2017",
    headquarters: "Seyşeller",
    mobile_app: true,
    credit_card: true,
    bank_transfer: true,
    has_turkish_lira: false,
    
    // Adding new required properties
    trading_fee: "0.09%",
    withdrawal_fee: "Minimum tutar + ağ ücreti",
    is_turkish: false,
    country: "Seyşeller",
    year_founded: "2017",
    deposit_methods: "Banka Transferi, Kredi Kartı, P2P",
    withdrawal_methods: "Banka Transferi, P2P",
    description: "OKX, geniş ürün yelpazesi ve gelişmiş trading araçları sunan global bir kripto para borsasıdır.",
    website: "www.okx.com",
    availability: "Global",
    customer_support: "İngilizce ve Çince",
    social_media: "@okx"
  },
  {
    id: "bybit",
    name: "Bybit",
    logo: "/logos/bybit.webp",
    maker_fee: "0.1%",
    taker_fee: "0.1%",
    features: [
      "Türev işlemler",
      "Spot trading",
      "Yüksek likidite",
      "Web3 cüzdan"
    ],
    founded: "2018",
    headquarters: "Dubai",
    mobile_app: true,
    credit_card: true,
    bank_transfer: true,
    has_turkish_lira: false,
    
    // Adding new required properties
    trading_fee: "0.1%",
    withdrawal_fee: "Coin bazında değişken",
    is_turkish: false,
    country: "Dubai",
    year_founded: "2018",
    deposit_methods: "Banka Transferi, Kredi Kartı",
    withdrawal_methods: "Banka Transferi",
    description: "Bybit, özellikle türev işlemler konusunda uzmanlaşmış ve kullanıcı dostu arayüzü ile bilinen bir kripto para borsasıdır.",
    website: "www.bybit.com",
    availability: "Global",
    customer_support: "Çoklu Dil Desteği",
    social_media: "@Bybit_Official"
  },
  {
    id: "gate-io",
    name: "Gate.io",
    logo: "/logos/gate-io.webp",
    maker_fee: "0.2%",
    taker_fee: "0.2%",
    features: [
      "1400+ kripto para",
      "Yenilikçi tokenler",
      "Düşük komisyonlar",
      "Margin trading"
    ],
    founded: "2013",
    headquarters: "Cayman Adaları",
    mobile_app: true,
    credit_card: true,
    bank_transfer: true,
    has_turkish_lira: false,
    
    // Adding new required properties
    trading_fee: "0.2%",
    withdrawal_fee: "Coin bazında sabit ücret",
    is_turkish: false,
    country: "Cayman Adaları",
    year_founded: "2013",
    deposit_methods: "Banka Transferi, Kredi Kartı",
    withdrawal_methods: "Banka Transferi",
    description: "Gate.io, geniş kripto para listesi ve yenilikçi tokenler sunmasıyla bilinen global bir kripto para borsasıdır.",
    website: "www.gate.io",
    availability: "Global",
    customer_support: "İngilizce E-posta Desteği",
    social_media: "@gate_io"
  },
  {
    id: "coinbase",
    name: "Coinbase",
    logo: "/logos/coinbase.webp",
    maker_fee: "0.4%",
    taker_fee: "0.6%",
    features: [
      "Kullanıcı dostu",
      "Yüksek güvenlik",
      "Kurumsal çözümler",
      "Kripto para cüzdanı"
    ],
    founded: "2012",
    headquarters: "ABD",
    mobile_app: true,
    credit_card: true,
    bank_transfer: true,
    has_turkish_lira: false,
    
    // Adding new required properties
    trading_fee: "0.5%",
    withdrawal_fee: "Network ücretleri",
    is_turkish: false,
    country: "ABD",
    year_founded: "2012",
    deposit_methods: "ACH, Wire Transfer, Kredi Kartı",
    withdrawal_methods: "ACH, Wire Transfer",
    description: "Coinbase, ABD merkezli halka açık bir kripto para borsası olup, güvenlik ve uyumluluk özellikleriyle öne çıkar.",
    website: "www.coinbase.com",
    availability: "50+ ülke",
    customer_support: "İngilizce Destek",
    social_media: "@coinbase"
  },
  {
    id: "kucoin",
    name: "Kucoin",
    logo: "/logos/kucoin.webp",
    maker_fee: "0.1%",
    taker_fee: "0.1%",
    features: [
      "700+ kripto para",
      "Futures trading",
      "Staking imkanları",
      "Token launchpad"
    ],
    founded: "2017",
    headquarters: "Seyşeller",
    mobile_app: true,
    credit_card: true,
    bank_transfer: true,
    has_turkish_lira: false,
    
    // Adding new required properties
    trading_fee: "0.1%",
    withdrawal_fee: "Coin bazında değişken",
    is_turkish: false,
    country: "Seyşeller",
    year_founded: "2017",
    deposit_methods: "Banka Transferi, Kredi Kartı, P2P",
    withdrawal_methods: "Banka Transferi, P2P",
    description: "Kucoin, 'Halkın Borsası' sloganıyla bilinen ve çok sayıda altcoin sunan global bir kripto para borsasıdır.",
    website: "www.kucoin.com",
    availability: "Global",
    customer_support: "Çoklu Dil Desteği",
    social_media: "@kucoincom"
  },
  {
    id: "kraken",
    name: "Kraken",
    logo: "/logos/kraken.webp",
    maker_fee: "0.16%",
    taker_fee: "0.26%",
    features: [
      "Gelişmiş güvenlik",
      "Futures trading",
      "90+ kripto para",
      "Kurumsal hizmetler"
    ],
    founded: "2011",
    headquarters: "ABD",
    mobile_app: true,
    credit_card: true,
    bank_transfer: true,
    has_turkish_lira: false,
    
    // Adding new required properties
    trading_fee: "0.21%",
    withdrawal_fee: "Network bazlı ücretlendirme",
    is_turkish: false,
    country: "ABD",
    year_founded: "2011",
    deposit_methods: "SWIFT, SEPA, Fedwire",
    withdrawal_methods: "SWIFT, SEPA, Fedwire",
    description: "Kraken, güvenlik odaklı yaklaşımı ve kurumsal hizmetleriyle tanınan köklü bir kripto para borsasıdır.",
    website: "www.kraken.com",
    availability: "190+ ülke",
    customer_support: "Çoklu Dil Desteği",
    social_media: "@krakenfx"
  },
  {
    id: "mexc",
    name: "MEXC",
    logo: "/logos/mexc.webp",
    maker_fee: "0.2%",
    taker_fee: "0.2%",
    features: [
      "1500+ kripto para",
      "Düşük işlem ücretleri",
      "Yeni coinler",
      "Futures işlemleri"
    ],
    founded: "2018",
    headquarters: "Singapur",
    mobile_app: true,
    credit_card: true,
    bank_transfer: true,
    has_turkish_lira: false,
    
    // Adding new required properties
    trading_fee: "0.2%",
    withdrawal_fee: "Sabit ücretlendirme",
    is_turkish: false,
    country: "Singapur",
    year_founded: "2018",
    deposit_methods: "Banka Transferi, Kredi Kartı, P2P",
    withdrawal_methods: "Banka Transferi, P2P",
    description: "MEXC, çok sayıda yeni altcoin listelemesi ve düşük işlem ücretleriyle bilinen global bir kripto para borsasıdır.",
    website: "www.mexc.com",
    availability: "Global",
    customer_support: "İngilizce ve Çince",
    social_media: "@MEXC_Global"
  }
];
