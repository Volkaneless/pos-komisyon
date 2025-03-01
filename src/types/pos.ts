
export interface POSProvider {
  id: string;
  logo: string;
  name: string;
  type: string;
  monthly_fee: string;
  commission_rate: string;
  features: string[];
  created_at?: string;
  description?: string;
  pros?: string[];
  cons?: string[];
  rating?: number;
  slug?: string;
}

export type POSProviderInput = Omit<POSProvider, 'id' | 'created_at'>;
