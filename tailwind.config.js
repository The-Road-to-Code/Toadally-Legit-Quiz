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
                    DEFAULT: '#FAE8E0',
                },
                green: {
                    DEFAULT: '#3D5B59',
                },
            },
        },
        variants: {
            extend: {},
        },
        plugins: [],
    },
};
