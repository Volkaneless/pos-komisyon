
import { bankPOSProviders } from './providers/bankPOS';
import { brandPOSProviders } from './providers/brandPOS';
import { finTechPOSProviders } from './providers/finTechPOS';

export const yazarkasaPOSProviders = [
  ...bankPOSProviders,
  ...brandPOSProviders,
  ...finTechPOSProviders
];
