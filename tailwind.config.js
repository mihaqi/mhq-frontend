/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				"sea1": "url('/')",
				"sea2": "url('/)",
				"sea3": "url('/')",
			},
			screens: {
				xs: "320px",
				sm: "375px",
				sml: "500px",
				md: "667px",
				mdl: "768px",
				lg: "960px",
				lgl: "1024px",
				xl: "1280px",
			},
		},
	},
	//图片纵横比插件：npm install @tailwindcss/aspect-ratio
	plugins: [require("@tailwindcss/aspect-ratio")],
};

// theme: {
//   backgroundImage: {
//     'sea1': "url('/1920-1.jpg')",
//     'sea2': "url('/1920-2.jpg')",
//     'sea3': "url('/screen/screen-1.jpg')",
//   },
//   extend: {
//   },

// },
// //图片纵横比插件：npm install @tailwindcss/aspect-ratio
// plugins: [
//   require('@tailwindcss/aspect-ratio'),
// ],
