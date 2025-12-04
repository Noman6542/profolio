/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#A055FF",
                "background-light": "#F3F4F6",
                "background-dark": "#0a0112",
            },
            fontFamily: {
                display: ["Poppins", "sans-serif"],
                body: ["Inter", "sans-serif"],
            },
        },
    },
    plugins: [],
}
