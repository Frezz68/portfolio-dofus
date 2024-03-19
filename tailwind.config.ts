import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "marge": ' calc(100vw + 150px)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "layer-5": "url('/background/5.png')",
        "layer-4": "url('/background/4.png')",
        "layer-3": "url('/background/3.png')",
        "layer-2": "url('/background/2.png')",
        "layer-1": "url('/background/1.png')",
      },
      animation: {
        'backAnime5': "frameMove5 30s ease-in-out infinite",
        'backAnime4': "frameMove4 30s ease-in-out infinite",
        'backAnime3': "frameMove3 30s ease-in-out infinite",
        'backAnime1': "frameMove1 30s linear infinite",
      },
      keyframes: {
        frameMove5: {
          "0%": { transform: "translateX(10px)" },
          "50%": { transform: "translateX(-10px)" },
          "100%": { transform: "translateX(10px)" },
        },
        frameMove4: {
          "0%": { transform: "translateX(-15px)" },
          "50%": { transform: "translateX(15px)" },
          "100%": { transform: "translateX(-15px)" },
        },
        frameMove3: {
          "0%": { transform: "translateX(-30px)" },
          "50%": { transform: "translateX(30px)" },
          "100%": { transform: "translateX(-30px)" },
        },
        frameMove1: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "0 899px"},
        },

      },
    },
  },
  plugins: [],
};
export default config;
