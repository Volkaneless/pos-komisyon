
import { yazarkasaPOSProviders } from './pos-types/yazarkasaPOS';
import { sanalPOSProviders } from './pos-types/sanalPOS';
import { mobilPOSProviders } from './pos-types/mobilPOS';
import { cepPOSProviders } from './pos-types/cepPOS';
import { bankaPOSProviders } from './pos-types/bankaPOS';
import { borsaAraciKurumProviders } from './pos-types/borsaAraciKurum';

export const posProviders = [
  ...yazarkasaPOSProviders,
  ...sanalPOSProviders,
  ...mobilPOSProviders,
  ...cepPOSProviders,
  ...bankaPOSProviders,
  ...borsaAraciKurumProviders
];
