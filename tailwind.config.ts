import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./context/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Plus Jakarta Sans", "sans-serif"],
				display: ["Outfit", "sans-serif"],
			},
			colors: {
				// primary dark = brand-900 (no black, logo-aligned)
				obsidian: "#0d1233",
				// Фирменный оранжевый из логотипа
				gold: "#F59220",
				surface: "#f8fafc",
				// Фирменный синий из логотипа (#2D409B) — палитра brand
				brand: {
					50: "#e8ebf5",
					100: "#d1d7ec",
					200: "#a3afe0",
					300: "#7587d3",
					400: "#4a5fc7",
					500: "#2D409B",
					600: "#243380",
					700: "#1b2666",
					800: "#121a4d",
					900: "#0d1233",
					950: "#080b1f",
				},
				accent: "#F59220",
				// Синий логотипа для индиго-акцентов
				indigo: {
					200: "#a3afe0",
					400: "#4a5fc7",
					500: "#2D409B",
					600: "#243380",
					DEFAULT: "#2D409B",
				},
			},
			animation: {
				float: "float 6s ease-in-out infinite",
				"pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
			},
			keyframes: {
				float: {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-20px)" },
				},
			},
		},
	},
	plugins: [],
};

export default config;
