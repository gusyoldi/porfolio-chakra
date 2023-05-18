import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
// import {mode} from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
	initialColorMode: 'dark',
	useSystemColorMode: false,
}

export const theme = extendTheme({
	config,

	styles: {
		global: {
			'html, body, #root': {
				width: '100%',
			},
		},
	},

	fonts: {
		heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
	},

	colors: {
		primary: '#2b2b36',
		secondary: '#8F43EE',
		third: '#413543',
		fourth: '#2b2b36',
		five: '#0e141b',
	},
})

/* Look and feel viejo */
//  primary: '#f2d288',
// secondary: '#FAFAFA',
//  darkCream:'#FFDD83'
// darkCream: '#e2b457'
