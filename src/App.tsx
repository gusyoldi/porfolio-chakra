import { Stack, Box, Text, useColorMode, Container } from '@chakra-ui/react'

import ListMyProjects from './components/MyProjects/ListMyProjects'
import Header, { DarkModeBtn } from './components/Header'
import { ListSkills } from './components/Skills'
import { About } from './components/About'
import Footer from './components/Footer'
import { motion } from 'framer-motion'
import Contact from './components/Contact/Contact'
import { useState } from 'react'


const Layout = ({children}) => {
	return <Container maxW={{ sm: 'lg', md: '3xl', lg: '5xl'}} centerContent >
		
		{children}
	</Container>
}

function App() {
	const { toggleColorMode } = useColorMode()
	return (
		<>
			<Stack alignItems={'end'}>
				<DarkModeBtn toggleColorMode={toggleColorMode} />
			</Stack>
			<Header />
		<Layout>

			<Stack
				userSelect={'none'}
				as='main'
				height='100%'
				
				margin='auto'
				bg=''>
				<ListMyProjects />
				<ListSkills />
				<About />
				<Contact />
			</Stack>

			
			{/* TEMPORAL */}
			{/* <Stack textAlign={"center"} py={"200px"}>
				<motion.h1
				// initial={{ color: "#fff", scale: 1 }}
				transition={{ duration: 5 }}
				animate={{
					scale:[1, 2, 4, 4, 1],
					rotate:[0, 0, 270, 360]
				}}
				// animate={{ y: 100, color: "#023f4f", scale: 3 }}
				>
				Hello World
				</motion.h1>
			</Stack> */}
		</Layout>
<Footer />
		</>
	)
}

export default App
