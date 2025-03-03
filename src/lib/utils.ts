
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
 * Formats a number as currency
 * @param amount - The amount to format
 * @param currency - The currency code (defaults to TRY)
 * @returns Formatted currency string
 */
export function formatCurrency(amount: number, currency: string = 'TRY'): string {
  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
}

/**
 * Formats a number as percentage
 * @param value - The value to format as percentage
 * @param decimals - Number of decimal places
 * @returns Formatted percentage string
 */
export function formatPercentage(value: number, decimals: number = 2): string {
  return new Intl.NumberFormat('tr-TR', {
    style: 'percent',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(value / 100);
}

/**
 * Generates a canonical URL with proper formatting
 * @param path - The path to generate canonical URL for
 * @param additionalPath - Optional subpath to add
 * @returns Properly formatted canonical URL
 */
export function getCanonicalUrl(path: string, additionalPath?: string): string {
  const baseUrl = "https://poskomisyon.com";
  // Ensure path starts with a slash and remove trailing slash if exists
  const formattedPath = path.startsWith('/') ? path : `/${path}`;
  const formatted = formattedPath.endsWith('/') ? formattedPath.slice(0, -1) : formattedPath;
  
  // Add additional path if provided
  const fullPath = additionalPath 
    ? `${formatted}/${additionalPath.startsWith('/') ? additionalPath.slice(1) : additionalPath}`
    : formatted;
    
  return `${baseUrl}${fullPath !== "/" ? fullPath : ""}`;
}

/**
 * Check if the script is running in a browser environment
 */
export function isBrowser(): boolean {
  return typeof window !== 'undefined';
}

/**
 * Generate a slug from a string
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')        // Replace spaces with -
    .replace(/&/g, '-and-')      // Replace & with 'and'
    .replace(/[^\w\-]+/g, '')    // Remove all non-word characters
    .replace(/\-\-+/g, '-');     // Replace multiple - with single -
}
