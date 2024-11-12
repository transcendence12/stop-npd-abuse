"use client";
import { CoffeeIcon } from "@/assets/icons/CoffeeIcon";

export const ButtonBuyMeCoffe = () => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center btn"
      href="https://paypal.me/Krawczuk"
    >
      Postaw mi
      <CoffeeIcon />
    </a>
  );
};
