import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getTenure(startDate: Date): string {
  const now = new Date();
  const months =
    (now.getFullYear() - startDate.getFullYear()) * 12 +
    (now.getMonth() - startDate.getMonth()) +
    1;
  const years = Math.floor(months / 12);
  const rem = months % 12;
  if (years > 0) {
    return `${years} Year${years > 1 ? "s" : ""}${rem > 0 ? ` ${rem} Month${rem > 1 ? "s" : ""}` : ""}`;
  }
  return `${rem} Month${rem !== 1 ? "s" : ""}`;
}
