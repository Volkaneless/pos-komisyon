
// Export all crypto exchange data from a central file
import { turkishExchanges } from './turkishExchanges';
import { internationalExchanges } from './internationalExchanges';
import { CryptoExchange } from '@/types/crypto';

// Combine all exchanges for when we need the complete list
export const cryptoExchanges: CryptoExchange[] = [
  ...turkishExchanges,
  ...internationalExchanges
];

// Re-export the individual exchange lists
export { turkishExchanges } from './turkishExchanges';
export { internationalExchanges } from './internationalExchanges';

// Export utility functions
export * from './utils';
