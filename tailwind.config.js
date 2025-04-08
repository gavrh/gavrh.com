module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
			},
			height: {
			},
			transitionProperty: {
				wh: 'width, height'
			},
			boxShadow: {
			},
			screens: {
			},
			keyframes: {
				appear: {
					'0%': {
						opacity: '0'
					},
					'100%': {
						opacity: '100%'
					}
				}
			},
			animation: {
				appear: 'appear 0.5s ease-in-out'
			}
		}
	},
	plugins: [
		function ({ addVariant }) {
			addVariant('child', '& > *');
			addVariant('child-hover', '& > *:hover');
		}
	]
};
