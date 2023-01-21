const colors = require('tailwindcss/colors');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	// https://colorbox.io/?c0=%26p%24s%24%3D11%26p%24h%24st%24%3D192%26p%24h%24e%24%3D192%26p%24h%24c%24%3Deqo%26p%24sa%24st%24%3D0.26%26p%24sa%24e%24%3D0.26%26p%24sa%24r%24%3D1%26p%24sa%24c%24%3Deqo%26p%24b%24st%24%3D0.7%26p%24b%24e%24%3D0%26p%24b%24c%24%3Dl%26o%24n%24%3DDeep+Space+Sparkle%26o%24ro%24%3Dccw%26o%24ms%24%3D0%2C1%26o%24lockHex%24%3D495e63&c1=%26p%24s%24%3D11%26p%24h%24st%24%3D207%26p%24h%24e%24%3D207%26p%24h%24c%24%3Deqo%26p%24sa%24st%24%3D0.47%26p%24sa%24e%24%3D0.47%26p%24sa%24r%24%3D1%26p%24sa%24c%24%3Deqo%26p%24b%24st%24%3D0.99%26p%24b%24e%24%3D0.33%26p%24b%24c%24%3Dl%26o%24n%24%3DSteel+Blue%26o%24ro%24%3Dccw%26o%24ms%24%3D0%2C1%26o%24lockHex%24%3D5985A8&c2=%26p%24s%24%3D11%26p%24h%24st%24%3D208%26p%24h%24e%24%3D208%26p%24h%24c%24%3Deqo%26p%24sa%24st%24%3D0.39%26p%24sa%24e%24%3D0.39%26p%24sa%24r%24%3D1%26p%24sa%24c%24%3Deqo%26p%24b%24st%24%3D1%26p%24b%24e%24%3D0.56%26p%24b%24c%24%3Dl%26o%24n%24%3DIceberg%26o%24ro%24%3Dccw%26o%24ms%24%3D0%2C1%26o%24lockHex%24%3D7ba4c8&c3=%26p%24s%24%3D11%26p%24h%24st%24%3D15%26p%24h%24e%24%3D15%26p%24h%24c%24%3Deqo%26p%24sa%24st%24%3D0.74%26p%24sa%24e%24%3D0.74%26p%24sa%24r%24%3D1%26p%24sa%24c%24%3Deqo%26p%24b%24st%24%3D1%26p%24b%24e%24%3D0.64%26p%24b%24c%24%3Dl%26o%24n%24%3DFlame%26o%24ro%24%3Dccw%26o%24ms%24%3D0%2C1%26o%24lockHex%24%3DD15E37&c4=%26p%24s%24%3D11%26p%24h%24st%24%3D37%26p%24h%24e%24%3D37%26p%24h%24c%24%3Deqo%26p%24sa%24st%24%3D0.40%26p%24sa%24e%24%3D0.40%26p%24sa%24r%24%3D1%26p%24sa%24c%24%3Deqo%26p%24b%24st%24%3D1%26p%24b%24e%24%3D0.76%26p%24b%24c%24%3Dl%26o%24n%24%3DGold+Crayola%26o%24ro%24%3Dccw%26o%24ms%24%3D0%2C1%26o%24lockHex%24%3DE1BE87&c5=%26p%24s%24%3D11%26p%24h%24st%24%3D1%26p%24h%24e%24%3D1%26p%24h%24c%24%3Deqo%26p%24sa%24st%24%3D0.82%26p%24sa%24e%24%3D0.82%26p%24sa%24r%24%3D1%26p%24sa%24c%24%3Deqo%26p%24b%24st%24%3D1%26p%24b%24e%24%3D0.56%26p%24b%24c%24%3Dl%26o%24n%24%3DLava%26o%24ro%24%3Dccw%26o%24ms%24%3D0%2C1%26o%24lockHex%24%3DC72624
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: colors.white,
			black: colors.black,
			xxsecondary: {
				50: '#7CA0A8',
				100: '#75969E',
				200: '#658289',
				300: '#577076',
				400: '#495E63',
				500: '#3D4E53',
				600: '#313F42',
				700: '#252F32',
				800: '#181F21',
				900: '#0C1010'
			},
			primary: {
				50: '#81C0F4',
				100: '#7DBAEC',
				200: '#74ADDB',
				300: '#6BA0CA',
				400: '#6292B9',
				500: '#5985A8',
				600: '#507897',
				700: '#476A86',
				800: '#3E5D76',
				900: '#355065'
			},
			xsecondary: {
				50: '#FA7041',
				100: '#F66E40',
				200: '#ED6A3E',
				300: '#E3663C',
				400: '#DA6239',
				500: '#D15E37',
				600: '#C85A34',
				700: '#BF5532',
				800: '#B6512F',
				900: '#AC4D2D'
			},
			secondary: {
				50: '#FCD597',
				100: '#F9D395',
				200: '#F3CE92',
				300: '#EDC88E',
				400: '#E7C38B',
				500: '#E1BE87',
				600: '#DBB983',
				700: '#D5B480',
				800: '#CEAE7C',
				900: '#C8A978'
			},
			third: {
				50: '#FCD597',
				100: '#F9D395',
				200: '#F3CE92',
				300: '#EDC88E',
				400: '#E7C38B',
				500: '#E1BE87',
				600: '#DBB983',
				700: '#D5B480',
				800: '#CEAE7C',
				900: '#C8A978'
			}
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
