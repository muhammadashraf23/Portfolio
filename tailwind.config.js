/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0a0118",
                foreground: "#171717",
                primary: "#111",
                secondary: "#7042f88b",
                tertiary: "#151030",
                "black-100": "#100d25",
                "black-200": "#090325",
                "white-100": "#f3f3f3",
                // Enhanced accent colors
                "accent-purple": {
                    50: "#faf5ff",
                    100: "#f3e8ff",
                    200: "#e9d5ff",
                    300: "#d8b4fe",
                    400: "#c084fc",
                    500: "#a855f7",
                    600: "#9333ea",
                    700: "#7e22ce",
                    800: "#6b21a8",
                    900: "#581c87",
                },
                "accent-cyan": {
                    50: "#ecfeff",
                    100: "#cffafe",
                    200: "#a5f3fc",
                    300: "#67e8f9",
                    400: "#22d3ee",
                    500: "#06b6d4",
                    600: "#0891b2",
                    700: "#0e7490",
                    800: "#155e75",
                    900: "#164e63",
                },
            },
            boxShadow: {
                card: "0px 35px 120px -15px #211e35",
                "glow-purple": "0 0 20px rgba(168, 85, 247, 0.4)",
                "glow-cyan": "0 0 20px rgba(6, 182, 212, 0.4)",
                "glow-purple-lg": "0 0 40px rgba(168, 85, 247, 0.6)",
                "glow-cyan-lg": "0 0 40px rgba(6, 182, 212, 0.6)",
            },
            screens: {
                xs: "450px",
            },
            backgroundImage: {
                "hero-pattern": "url('/herobg.png')",
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-primary": "linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)",
                "gradient-secondary": "linear-gradient(135deg, #7e22ce 0%, #0891b2 100%)",
            },
            animation: {
                "spin-slow": "spin 20s linear infinite",
                "reverse-spin": "reverse-spin 20s linear infinite",
                "float": "float 6s ease-in-out infinite",
                "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "fade-in": "fadeIn 0.6s ease-in-out",
                "slide-up": "slideUp 0.6s ease-out",
            },
            keyframes: {
                "reverse-spin": {
                    from: {
                        transform: "rotate(360deg)",
                    },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-20px)" },
                },
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { transform: "translateY(30px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
            },
            backdropBlur: {
                xs: "2px",
            },
        },
    },
    plugins: [],
};
