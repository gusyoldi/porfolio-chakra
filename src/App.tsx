import { Stack, Box, Text, useColorMode, Container } from '@chakra-ui/react'
import { ReactNode } from 'react'
import ListMyProjects from './components/MyProjects/ListMyProjects'
import Header, { DarkModeBtn } from './components/Header'
import { ListSkills } from './components/Skills'
import { About } from './components/About'
import Footer from './components/Footer'
import { motion } from 'framer-motion'
import { Contact } from './components/Contact/Contact'

interface LayoutProps {
	children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<Stack
			mx={'auto'}
			maxW={{ sm: 'lg', md: '3xl', lg: '5xl' }}
			userSelect={'none'}>
			{children}
		</Stack>
	)
}

function App() {
	const { toggleColorMode } = useColorMode()
	return (
		<>
			<Stack alignItems={'end'}>
				<DarkModeBtn toggleColorMode={toggleColorMode} />
			</Stack>
			<Layout>
				<Header />
				<ListMyProjects />
				<ListSkills />
				<About />
				<Contact />
				<Footer />
			</Layout>
		</>
	)
}

export default App

{
	/* TEMPORAL */
}
{
	/* <Stack textAlign={"center"} py={"200px"}>
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
			</Stack> */
}
