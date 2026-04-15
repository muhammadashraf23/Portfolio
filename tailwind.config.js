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
                background: "#e8e6e3",
                foreground: "#0a0a0a",
                primary: "#f5f5f5",
                secondary: "#0a0a0a",
                tertiary: "#111111",
                "black-100": "#0a0a0a",
                "black-200": "#050505",
                "white-100": "#f3f3f3",
                // Enhanced accent colors
                "accent-purple": {
                    50: "#050505",
                    100: "#111111",
                    200: "#1a1a1a",
                    300: "#262626",
                    400: "#404040",
                    500: "#737373",
                    600: "#525252",
                    700: "#404040",
                    800: "#262626",
                    900: "#171717",
                },
                "accent-cyan": {
                    50: "#050505",
                    100: "#111111",
                    200: "#1a1a1a",
                    300: "#262626",
                    400: "#404040",
                    500: "#737373",
                    600: "#525252",
                    700: "#404040",
                    800: "#262626",
                    900: "#171717",
                },
            },
            boxShadow: {
                card: "0px 35px 120px -15px #050505",
                "glow-purple": "0 0 1px rgba(255, 255, 255, 0.2)",
                "glow-cyan": "0 0 1px rgba(255, 255, 255, 0.2)",
                "glow-purple-lg": "0 0 3px rgba(255, 255, 255, 0.3)",
                "glow-cyan-lg": "0 0 3px rgba(255, 255, 255, 0.3)",
            },
            screens: {
                xs: "450px",
            },
            backgroundImage: {
                "hero-pattern": "url('/herobg.png')",
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-primary": "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
                "gradient-secondary": "linear-gradient(135deg, #1f1f1f 0%, #333333 100%)",
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
