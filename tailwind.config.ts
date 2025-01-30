import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                md: "2rem",
                lg: "4rem",
            },
        },
        fontFamily: {
            sans: ["var(--font-inter)", "sans-serif"],
        },
        screens: {
            sm: "375px",
            md: "768px",
            lg: "1200px",
        },
        extend: {
            animation: {
                bounce: "bounce 1.5s infinite", // Customized bounce animation
                staggered: "staggered 2s infinite", // Example for staggered animations
            },
            keyframes: {
                bounce: {
                    "0%, 100%": { transform: "translateY(-10%)" },
                    "50%": { transform: "translateY(0)" },
                },
                staggered: {
                    "0%, 100%": { opacity: 0 },
                    "50%": { opacity: 1 },
                },
            },
            colors: {
                lime: {
                    400: "#84cc16", // Lime green for your theme
                },
                neutral: {
                    900: "#171717", // Dark background color
                },
            },
        },
    },
    plugins: [],
};
export default config;
