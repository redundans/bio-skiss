module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
	  	extend: {
	  		colors: {
	  			dark: {
	  				DEFAULT: '#141414',
	  				semi: '#262D34',
	  				midi: '#2C353D'
	  			},
	  			red: '#E2303C',
	  		},
	  		fontFamily: {
	  			'sans': ['Roboto', 'sans-serif'],
	  		},
			height: {
				"10v": "10vh",
				"20v": "20vh",
				"30v": "30vh",
				"40v": "40vh",
				"50v": "50vh",
				"60v": "60vh",
				"70v": "70vh",
				"80v": "80vh",
				"90v": "90vh",
				"100v": "100vh",
			},
	  	},
	},
	variants: {
  		extend: {},
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms'),
    ],
}
