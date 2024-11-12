"use client"
import { CoffeeIcon } from "@/assets/icons/CoffeeIcon"

export const ButtonBuyMeCoffe = () => {
    return (
        <button className="btn">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="link link-accent link-hover"
              href="https://paypal.me/Krawczuk?country.x=PL&locale.x=pl_PL"
            >
              Postaw mi
            </a>
            <CoffeeIcon />
          </button>
    )
}