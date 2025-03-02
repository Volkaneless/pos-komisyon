
// Global type declarations
interface Window {
  dataLayer: any[];
  gtag?: (
    command: string,
    action: string,
    params?: {
      [key: string]: any;
    }
  ) => void;
}

