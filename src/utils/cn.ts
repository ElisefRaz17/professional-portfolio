// utils/cn.ts
import { clsx } from "clsx";
import type { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn - Merge Tailwind classes with conditional logic
 * @param inputs - class names or conditional class objects
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}
