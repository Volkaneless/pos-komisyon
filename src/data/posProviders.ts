import { yazarkasaProviders } from './pos/yazarkasaProviders';
import { mobilProviders } from './pos/mobilProviders';
import { cepProviders } from './pos/cepProviders';
import { sanalProviders } from './pos/sanalProviders';

export const posProviders = [
  ...yazarkasaProviders,
  ...mobilProviders,
  ...cepProviders,
  ...sanalProviders
];