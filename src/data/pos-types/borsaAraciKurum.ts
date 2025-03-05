
import type { POSProvider } from "@/types/pos";
import { digitalBrokers } from "./borsa/digitalBrokers";
import { bankBrokers } from "./borsa/bankBrokers";
import { otherBankBrokers } from "./borsa/otherBankBrokers";
import { independentBrokers } from "./borsa/independentBrokers";

export const borsaAraciKurumProviders: POSProvider[] = [
  // Dijital Aracı Kurumlar
  ...digitalBrokers,
  
  // Banka Aracı Kurumlar
  ...bankBrokers,
  ...otherBankBrokers,
  ...independentBrokers
];
