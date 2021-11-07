module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                Montserrat: ['Montserrat', 'sans-serif'],
                Quicksand: ['Quicksand', 'sans-serif'],
            },
            colors: {
                pink: {
                    DEFAULT: '#EF7C8E',
                },
                cream: {
                    DEFAULT: '#FFFEF2',
                },
                green: {
                    DEFAULT: '#3D5B59',
                },
                mint: {
                    DEFAULT: '#B5E5CF',
                },
                bluegreen: {
                    DEFAULT: '#75E6DA',
                },
                babyblue: {
                    DEFAULT: '#D4F1F4',
                },
            },
        },
        variants: {
            extend: {},
        },
        plugins: [],
    },
};
