
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
    has_turkish_lira: false
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
    has_turkish_lira: false
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
    has_turkish_lira: false
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
    has_turkish_lira: false
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
    has_turkish_lira: false
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
    has_turkish_lira: false
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
    has_turkish_lira: false
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
    has_turkish_lira: false
  }
];
