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
