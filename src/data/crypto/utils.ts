
import type { CryptoExchange } from '@/types/crypto';
import { turkishExchanges } from './turkishExchanges';
import { internationalExchanges } from './internationalExchanges';

/**
 * Find an exchange by its ID
 * @param id The exchange ID to search for
 * @param exchanges Optional array of exchanges to search in
 * @returns The found exchange or undefined
 */
export function findExchangeById(
  id: string,
  exchanges?: CryptoExchange[]
): CryptoExchange | undefined {
  const allExchanges = exchanges || [...turkishExchanges, ...internationalExchanges];
  
  return allExchanges.find(exchange => exchange.id === id);
}

/**
 * Get exchanges by feature
 * @param feature The feature to filter by
 * @param exchanges Optional array of exchanges to filter
 * @returns Array of exchanges with the specified feature
 */
export function getExchangesByFeature(
  feature: string,
  exchanges?: CryptoExchange[]
): CryptoExchange[] {
  const allExchanges = exchanges || [...turkishExchanges, ...internationalExchanges];
  
  return allExchanges.filter(exchange => 
    exchange.features.some(f => f.toLowerCase().includes(feature.toLowerCase()))
  );
}

/**
 * Sort exchanges by a specific property
 * @param exchanges Exchanges to sort
 * @param property Property to sort by
 * @param direction Sort direction (asc or desc)
 * @returns Sorted array of exchanges
 */
export function sortExchanges(
  exchanges: CryptoExchange[],
  property: keyof CryptoExchange,
  direction: 'asc' | 'desc' = 'asc'
): CryptoExchange[] {
  return [...exchanges].sort((a, b) => {
    // Handle numeric properties
    if (typeof a[property] === 'number' && typeof b[property] === 'number') {
      return direction === 'asc' 
        ? (a[property] as number) - (b[property] as number)
        : (b[property] as number) - (a[property] as number);
    }
    
    // Handle string properties
    const aStr = String(a[property]).toLowerCase();
    const bStr = String(b[property]).toLowerCase();
    
    return direction === 'asc'
      ? aStr.localeCompare(bStr)
      : bStr.localeCompare(aStr);
  });
}
