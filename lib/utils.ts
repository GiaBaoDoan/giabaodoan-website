import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number | string, withCurrency = true) {
  const number =
    typeof price === "string" ? parseFloat(price.replace(/\D/g, "")) : price;

  if (isNaN(number)) return "";

  const formatted = new Intl.NumberFormat("vi-VN").format(number);

  return withCurrency ? `${formatted} ₫` : formatted;
}
