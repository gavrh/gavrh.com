module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				pop: '#1f252e'
			},
			height: {
				'32rem': '32rem',
				'35rem': '35rem'
			},
			transitionProperty: {
				sidebarIcons:
					'border-radius, color, background-color, box-shadow',
				wh: 'width, height'
			},
			boxShadow: {
				bottom: '0px 3px 8px 0px rgb(0 0 0 / 0.2)'
			},
			screens: {
				'icon-wrap': '798px'
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
				appear: 'appear 0.75s ease-in-out'
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
