
export interface CryptoExchange {
  id: string;
  name: string;
  logo: string;
  maker_fee: string;
  taker_fee: string;
  features: string[];
  founded: string;
  headquarters: string;
  mobile_app: boolean;
  credit_card: boolean;
  bank_transfer: boolean;
  has_turkish_lira: boolean;
}
