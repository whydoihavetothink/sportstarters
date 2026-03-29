import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateVariableSymbol(phoneInput: string): string {
  const cleanPhone = phoneInput.replace(/\D/g, '');
  const exactTimestamp = Date.now().toString(); // e.g., 1711726569000
  
  // Combine the two strings into one master seed
  const combinedSeed = `${cleanPhone}${exactTimestamp}`;
  
  // Create a simple numeric hash
  let hash = 0;
  for (let i = 0; i < combinedSeed.length; i++) {
    // Multiply by a prime (31) and add the character code, keeping it under 10 digits
    hash = (hash * 31 + combinedSeed.charCodeAt(i)) % 10000000000;
  }
  
  // Ensure it is always exactly 10 digits long (pad with zeros at the front if needed)
  return String(hash).padStart(10, '0');
};

export function formatPhoneNumber(value: string): string {
// 1. Remove all characters except digits and a leading '+'
  let cleaned = value.replace(/(?!^\+)[^\d]/g, '');
  
  let formatted = cleaned;
  
  if (cleaned.startsWith('+')) {
    // Separate the country code (e.g., "+420")
    const prefix = cleaned.substring(0, 4);
    
    // Grab the rest of the numbers and STRICTLY CAP at 9 digits
    let rest = cleaned.substring(4).slice(0, 9); 
    
    // Add a space after every 3rd digit
    rest = rest.replace(/(\d{3})(?=\d)/g, "$1 ");
    
    // Stitch it back together
    formatted = rest ? `${prefix} ${rest}` : prefix;
  } else {
    // STRICTLY CAP standard numbers at 9 digits
    cleaned = cleaned.slice(0, 9);
    
    // Add a space after every 3rd digit
    formatted = cleaned.replace(/(\d{3})(?=\d)/g, "$1 ");
  }
  
  return formatted.trim();
};


export function formatZipCode(value: string): string {
  // 1. Remove all non-numeric characters (blocks letters and symbols)
  let cleaned = value.replace(/\D/g, '');

  // 2. Strictly cap the input at 5 digits
  cleaned = cleaned.slice(0, 5);

  // 3. Insert a space after the 3rd digit if the user has typed that far
  if (cleaned.length > 3) {
    return `${cleaned.slice(0, 3)} ${cleaned.slice(3)}`;
  }

  return cleaned;
};