import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function hasEnvVars() {
  // Example: Check if specific env vars exist
  return process.env.NEXT_PUBLIC_API_KEY !== undefined;
}