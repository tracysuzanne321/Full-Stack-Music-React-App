module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			xs: '320px',
			sm: '500px',
			md: '640px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
