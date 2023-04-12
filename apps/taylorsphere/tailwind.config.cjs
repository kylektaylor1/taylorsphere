/** @type {import('tailwindcss').Config} */

// this should work to extend the default theme???
import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'brand-pink': '#F999CB',
                'brand-darkest': '#192639',
                'brand-dark': '#37465d',
                'brand-mid': '#b3bcc7',
                'brand-light': '#E2E8F0',
                'brand-lightest': '#FFFFFF',
            },
            fontFamily: {
                display: ['Teko', ...defaultTheme.fontFamily.sans],
                body: ['Ubuntu', ...defaultTheme.fontFamily.sans],
            },
            backgroundImage: {
                'space-hero': "url('/images/space-hero.jpg')",
            },
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: `1rem`,
                md: `2rem`,
                lg: `3rem`,
            },
        },
    },
    plugins: [],
};
