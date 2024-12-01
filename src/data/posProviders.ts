import { ortakPOSProviders } from './pos-types/ortakPOS';
import { dovizPOSProviders } from './pos-types/dovizPOS';
import { bulutPOSProviders } from './pos-types/bulutPOS';
import { selfServisPOSProviders } from './pos-types/selfServisPOS';
import { mobilPOSProviders } from './pos-types/mobilPOS';

export const posProviders = [
  {
    id: "odeal-pos",
    logo: "/logo.svg",
    name: "Ödeal Yazar Kasa POS",
    type: "Yazar Kasa (ÖKC) POS",
    monthly_fee: "0 TL / Ay",
    commission_rate: "%1,00",
    features: [
      "Harcıkredi KOBİ'ye Özel Ertesi Güne %0 Komisyonlu POS! Hem de İlk Ay Aidat Hediye!"
    ],
  },
  {
    id: "akbank-yazarkasa",
    logo: "/logo.svg",
    name: "Akbank Yazar Kasa Pos",
    type: "Yazar Kasa (ÖKC) POS",
    monthly_fee: "0 TL / Ay",
    commission_rate: "%1,79",
    features: [
      "Akbank POS ile 3 ay boyunca %1,79 komisyon ve 1 yıl ücretsizlik avantajına ek, şimdi başvuranlara 1.500 TL chip-para fırsatı!"
    ],
  },
  {
    id: "enpara-yazarkasa",
    logo: "/logo.svg",
    name: "Enpara.com Yazar Kasa POS",
    type: "Yazar Kasa (ÖKC) POS",
    monthly_fee: "0 TL / Ay",
    commission_rate: "%1,99",
    features: [
      "%1,99 oran ve taksitli satış imkanı!"
    ],
  },
  {
    id: "tosla-isim",
    logo: "/logo.svg",
    name: "Tosla İşim POS",
    type: "Yazar Kasa (ÖKC) POS",
    monthly_fee: "0 TL / Ay",
    commission_rate: "%1,69",
    features: [
      "Ertesi Güne %1,69 Komisyonlu POS!"
    ],
  },
  {
    id: "fisbin-pos",
    logo: "/logo.svg",
    name: "Fisbin POS",
    type: "Yazar Kasa (ÖKC) POS",
    monthly_fee: "145 TL / Ay",
    commission_rate: "%2,09",
    features: [
      "İlk 3 ay ücretsiz!"
    ],
  },
  {
    id: "akbank-fiziki",
    logo: "/logo.svg",
    name: "Akbank Fiziki / Masaüstü POS",
    type: "Yazar Kasa (ÖKC) POS",
    monthly_fee: "0 TL / Ay",
    commission_rate: "%1,79",
    features: [
      "Akbank POS ile 3 ay boyunca %1,79 komisyon ve 1 yıl ücretsizlik avantajına ek, şimdi başvuranlara 1.500 TL chip-para fırsatı!"
    ],
  },
  {
    id: "aninda-pos",
    logo: "/logo.svg",
    name: "Anında POS",
    type: "Yazar Kasa (ÖKC) POS",
    monthly_fee: "119 TL / Ay",
    commission_rate: "%2,15",
    features: [
      "Avantajlı oranlarla Anında POS'a başvurun!"
    ],
  },
  {
    id: "qnbpay-fiziki",
    logo: "/logo.svg",
    name: "QNBPay Fiziki POS",
    type: "Yazar Kasa (ÖKC) POS",
    monthly_fee: "0 TL / Ay",
    commission_rate: "%1,99",
    features: [
      "Ertesi güne %1,99 komisyon avantajı!"
    ],
  },
  {
    id: "enpara-pos",
    logo: "/logo.svg",
    name: "Enpara.com Yazar Kasa POS",
    type: "Yazar Kasa (ÖKC) POS",
    monthly_fee: "0 TL / Ay",
    commission_rate: "%1,99",
    features: [
      "%1,99 oran ve taksitli satış imkanı!"
    ],
  },
  {
    id: "esnekpos-android",
    logo: "/logo.svg",
    name: "Android POS",
    type: "Mobil (Taşınabilir) POS",
    monthly_fee: "0 TL / Ay",
    commission_rate: "%0,10",
    features: [
      "EsnekPOS'tan kobilere özel 10 numara oranın hazır!"
    ],
  },
  {
    id: "logo-isbasi",
    logo: "/logo.svg",
    name: "Logo İşbaşı POS",
    type: "Cep POS",
    monthly_fee: "0 TL / Ay",
    commission_rate: "%3,99",
    features: [
      "İşbaşı POS ile mobilden temassız ödeme alarak fiziksel POS ve sarf malzemesi maliyetini ortadan kaldırın."
    ],
  },
  {
    id: "paytr-neopos",
    logo: "/logo.svg",
    name: "NeoPOS+",
    type: "Cep POS",
    monthly_fee: "0 TL / Ay",
    commission_rate: "%0,59",
    features: [
      "PayTR NeoPOS+ ile Android işletim sistemli NFC özellikli cep telefonu veya tabletlerinizi anında POS cihazına dönüştürerek ödemelerinizi temassız bir şekilde tek çekim veya taksitli alabilirsiniz."
    ],
  },
  {
    id: "akbank-sanal",
    logo: "/logo.svg",
    name: "Akbank Sanal POS",
    type: "Sanal POS",
    monthly_fee: "0 TL / Ay",
    commission_rate: "%1,79",
    features: [
      "Akbank POS ile 3 ay boyunca %1,79 komisyon ve 1 yıl ücretsizlik avantajına ek, şimdi başvuranlara 1.500 TL chip-para fırsatı!"
    ],
  },
  {
    id: "tosla-sanal",
    logo: "/logo.svg",
    name: "Tosla İşim Sanal POS",
    type: "Sanal POS",
    monthly_fee: "0 TL / Ay",
    commission_rate: "%0,99",
    features: [
      "Tosla İşim ile Ücretsiz, Hızlı ve Güvenli Sanal POS!"
    ],
  },
  {
    id: "moka-sanal",
    logo: "/logo.svg",
    name: "Moka Sanal POS",
    type: "Sanal POS",
    monthly_fee: "0 TL / Ay",
    commission_rate: "%1,89",
    features: [
      "%1,89 komisyon oranıyla ödemeleriniz ertesi gün hesabınızda."
    ],
  },
  {
    id: "esnekpos-cep",
    logo: "/logo.svg",
    name: "Cep POS",
    type: "Cep POS",
    monthly_fee: "0 TL / Ay",
    commission_rate: "%2,69",
    features: [
      "EsnekPOS'la NFC'li Android Telefondan CepPOS'a!"
    ],
  },
  {
    id: "garanti-sanal",
    logo: "/logo.svg",
    name: "Sanal POS",
    type: "Sanal POS",
    monthly_fee: "0 TL / Ay",
    commission_rate: "%2,09",
    features: [
      "%2,09 komisyon oranı ve ilk yıl ücretsiz Sanal POS fırsatından yararlanın!"
    ],
  },
  {
    id: "isbank-aninda",
    logo: "/logo.svg",
    name: "Anında POS",
    type: "Yazar Kasa (ÖKC) POS",
    monthly_fee: "119 TL / Ay",
    commission_rate: "%2,15",
    features: [
      "Avantajlı oranlarla Anında POS'a başvurun!"
    ],
  },
  {
    id: "esnekpos-pazaryeri",
    logo: "/logo.svg",
    name: "Pazaryeri POS",
    type: "Sanal POS",
    monthly_fee: "0 TL / Ay",
    commission_rate: "%2,69",
    features: [
      "EsnekPOS ile artık Pazaryeri çözümleriniz çok daha kolay!"
    ],
  },
  {
    id: "esnekpos-sanal",
    logo: "/logo.svg",
    name: "EsnekPOS",
    type: "Sanal POS",
    monthly_fee: "0 TL / Ay",
    commission_rate: "%2,69",
    features: [
      "Aynı gün kurulum ile ertesi gün ödemeli SanalPOS'unuz hazır!"
    ],
  },
  {
    id: "paycell-sanal",
    logo: "/logo.svg",
    name: "Sanal POS",
    type: "Sanal POS",
    monthly_fee: "0 TL / Ay",
    commission_rate: "%2,58",
    features: [
      "Tek entegrasyonla 24 saat içinde bütün bankalar elinizin altında! valörlü çalışma için %0'dan başlayan komisyon oranları sizi bekliyor."
    ],
  },
  ...ortakPOSProviders,
  ...dovizPOSProviders,
  ...bulutPOSProviders,
  ...selfServisPOSProviders,
  ...mobilPOSProviders,
];