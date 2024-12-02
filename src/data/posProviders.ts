import { ortakPOSProviders } from './pos-types/ortakPOS';
import { dovizPOSProviders } from './pos-types/dovizPOS';
import { bulutPOSProviders } from './pos-types/bulutPOS';
import { selfServisPOSProviders } from './pos-types/selfServisPOS';
import { mobilPOSProviders } from './pos-types/mobilPOS';
import { yazarkasaPOSProviders } from './pos-types/yazarkasaPOS';

export const posProviders = [
  ...yazarkasaPOSProviders,
  ...ortakPOSProviders,
  ...dovizPOSProviders,
  ...bulutPOSProviders,
  ...selfServisPOSProviders,
  ...mobilPOSProviders,
];