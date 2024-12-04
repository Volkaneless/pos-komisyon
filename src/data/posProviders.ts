import { yazarkasaPOSProviders } from './pos-types/yazarkasaPOS';
import { sanalPOSProviders } from './pos-types/sanalPOS';

export const posProviders = [
  ...yazarkasaPOSProviders,
  ...sanalPOSProviders
];