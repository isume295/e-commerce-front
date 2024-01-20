/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                raleway: ['Raleway', 'sans-serif'],
            },
            colors: {
                mainColor: '#E3941C',
                secondColor: '#A6A940',
                lightMain: '#C29F30',
                rbgSecond: 'rgb(236, 27, 48, 0.5)',
                rbgMain: 'rgba(20, 88, 135, 0.5)',
                customDark: '#252525',
                customDarkRed: 'rgba(94, 22, 29, 0.5)',
                custumBlue: '#9883E5',
                highlight: '#52FFEE',
            },
        },
    },
    plugins: [],
};
