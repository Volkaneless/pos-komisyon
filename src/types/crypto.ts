
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
  
  // Adding missing properties
  trading_fee: string;
  withdrawal_fee: string;
  is_turkish: boolean;
  country: string;
  year_founded: string;
  deposit_methods: string;
  withdrawal_methods: string;
  description: string;
  website: string;
  availability: string;
  customer_support: string;
  social_media: string;
}
