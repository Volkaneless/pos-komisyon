
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names using clsx and tailwind-merge
 * @param inputs Class name inputs to be combined
 * @returns Combined class name string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Checks if the code is running in browser environment
 * @returns boolean indicating if code is running in browser
 */
export function isBrowser(): boolean {
  return typeof window !== "undefined";
}

/**
 * Verilen path için tam kanonik URL oluşturur
 * @param path URL yolu (örneğin: /pos-types/banka)
 * @returns Tam kanonik URL (örneğin: https://poskomisyon.com/pos-types/banka)
 */
export function getCanonicalUrl(path: string): string {
  // Path'in başında / olduğundan emin olun
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // Domain adresini URL'ye ekleyin
  return `https://poskomisyon.com${normalizedPath}`;
}

/**
 * Creates a canonical URL with an optional fragment
 * @param path Base URL path
 * @param fragment Optional URL fragment/hash to append
 * @returns Full canonical URL with optional fragment
 */
export function getCanonicalUrlWithFragment(path: string, fragment?: string): string {
  const baseUrl = getCanonicalUrl(path);
  return fragment ? `${baseUrl}${fragment}` : baseUrl;
}
