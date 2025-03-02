
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats a date into a specific string format
 */
export function formatDate(date: Date | string): string {
  if (typeof date === 'string') {
    date = new Date(date);
  }
  
  return date.toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Generates a canonical URL
 */
export function getCanonicalUrl(path: string): string {
  const baseUrl = "https://poskomisyon.com";
  return `${baseUrl}${path !== "/" ? path : ""}`;
}

/**
 * Check if the script is running in a browser environment
 */
export function isBrowser(): boolean {
  return typeof window !== 'undefined';
}

