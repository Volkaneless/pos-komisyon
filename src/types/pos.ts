export interface POSProvider {
  id: string;
  logo: string;
  name: string;
  type: string;
  monthly_fee: string;
  commission_rate: string;
  features: string[];
  created_at?: string;
}

export type POSProviderInput = Omit<POSProvider, 'id' | 'created_at'>;