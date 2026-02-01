import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ブランドカラー（HubSpot CSSから移行）
        primary: {
          DEFAULT: "#E67635",
          light: "#F5A66D",
          dark: "#D4651F",
        },
        secondary: {
          DEFAULT: "#2B4C7E",
          light: "#3D5A80",
          dark: "#1A3A5C",
        },
        // テキスト・背景
        text: {
          DEFAULT: "#1f2933",
          light: "#4b5563",
        },
        gray: {
          DEFAULT: "#6b7280",
          border: "#e5e7eb",
          bg: "#f8fafc",
        },
      },
      fontFamily: {
        sans: [
          '"Noto Sans JP"',
          "sans-serif",
        ],
      },
      fontSize: {
        // デザイントークン
        xs: ["0.75rem", { lineHeight: "1.4" }],    // 12px
        sm: ["0.875rem", { lineHeight: "1.5" }],   // 14px
        base: ["1rem", { lineHeight: "1.75" }],    // 16px
        lg: ["1.125rem", { lineHeight: "1.75" }],  // 18px
        xl: ["1.25rem", { lineHeight: "1.5" }],    // 20px
        "2xl": ["1.5rem", { lineHeight: "1.4" }],  // 24px
        "3xl": ["1.875rem", { lineHeight: "1.4" }],// 30px
        "4xl": ["2.25rem", { lineHeight: "1.3" }], // 36px
      },
      spacing: {
        // カスタムスペーシング
        "18": "4.5rem",
        "22": "5.5rem",
      },
      borderRadius: {
        sm: "4px",
        md: "6px",
        lg: "8px",
      },
    },
  },
  plugins: [],
};
export default config;
