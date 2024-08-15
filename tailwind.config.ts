import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "siderbar" : "#1C1C1C",
        "text-sidebar" : "#9E9E9E",
        "nama" : "#212B36",
        "menu-lain" : "#202224",
        "primary" : "#A51535",
        "konten" : "#637381",
        "kalender" : "#64748B",
        "body" : "#F4F4F4",
        "border" : "#E2E8F0",
        "persen" : "#00B69B",
        "nama-lain" : "#202224"
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
};
export default config;
