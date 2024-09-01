import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */

module.exports = {
	darkMode: ['class', '.theme-dark'],
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./src/**/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./src/**/**/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		flowbite.content(),
	],
	theme: {
		extend: {},
	},
	plugins: [
		flowbite.plugin()
	],
	
}