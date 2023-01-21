const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: '#ffffffff',
			'deep-space-sparkle': '#495e63ff',
			'steel-blue': '#5985A8ff',
			iceberg: '#7ba4c8ff',
			flame: '#D15E37ff',
			'gold-crayola': '#E1BE87ff',
			lava: '#C72624ff'
		},
		extend: {
			fontFamily: {
				kaushan: ['Kaushan Script', 'cursive'],
				berkshire: ['Berkshire Swash', 'sans-serif'],
				sans: ['Signika Negative', 'sans-serif']
			}
		}
	},

	plugins: []
};

module.exports = config;
