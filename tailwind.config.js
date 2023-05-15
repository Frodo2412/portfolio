/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                expand: 'expand 2s ease-in-out',
                fadeDown: 'fadeDown 2s ease-in-out',
                fadeRight: 'fadeRight 2s ease-in-out',
            },

            keyframes: {
                expand: {
                    '0%': {transform: 'scaleY(0)', opacity: '0'},
                    '100%': {transform: 'scaleY(1)', opacity: '1'},
                },
                fadeDown: {
                    '0%': {opacity: '0', transform: 'translateY(-50px)'},
                    '100%': {opacity: '1', transform: 'translateY(0)'},
                },
                fadeRight: {
                    '0%': {opacity: '0', transform: 'translateX(-50px)'},
                    '100%': {opacity: '1', transform: 'translateX(0)'},
                }
            },
        },
    },
    plugins: [],
}

