/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    teal: '#25d3af',
                    blue: '#002d67',
                }
            },
        },
    },
    plugins: [],
}
