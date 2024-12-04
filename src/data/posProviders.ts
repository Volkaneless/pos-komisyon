import { yazarkasaPOSProviders } from './pos-types/yazarkasaPOS';
import { sanalPOSProviders } from './pos-types/sanalPOS';
import { mobilPOSProviders } from './pos-types/mobilPOS';
import { cepPOSProviders } from './pos-types/cepPOS';

export const posProviders = [
  ...yazarkasaPOSProviders,
  ...sanalPOSProviders,
  ...mobilPOSProviders,
  ...cepPOSProviders
];