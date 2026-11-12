import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.tsx", "./components/**/*.tsx"],
  theme: { extend: {
    colors: { ivory: "#FBF6EA", gold: "#B8892E", goldlt: "#E8C97A", maroon: "#6B1230", emerald: "#0F5B45" },
    fontFamily: { display: ["var(--font-cinzel)"], serif: ["var(--font-cormorant)"] },
  } },
} satisfies Config;
