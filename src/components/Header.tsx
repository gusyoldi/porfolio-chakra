import {
	Stack,
	Image,
	Text,
	Button,
	useBoolean,
	useColorMode,
	IconButton,
	useColorModeValue,
} from '@chakra-ui/react'
import { FaLinkedin, FaMoon, FaSun } from 'react-icons/fa'
import MY_FACE from '../assets/images/myFace.jpg'
import PULPO from '../assets/images/pulpo.jpg' //Tiene mas onda y es purpura
import { MyButton } from './common/Buttons'
import CV from '../assets/GustavoYoldi-CV.pdf'
import { Section } from './common/Section'
interface Props {
	toggleColorMode: () => void
}

export const DarkModeBtn = ({ toggleColorMode }: Props) => {
	const toggleIcon = useColorModeValue(
		<FaMoon color='secondary' />,
		<FaSun color='secondary' />
	)
	return (
		<IconButton
			onClick={toggleColorMode}
			as='button'
			variant='unstyled'
			aria-label='dark mode'
			color='secondary'
			fontSize={{ base: '2xl', sm: '4xl' }}
			icon={toggleIcon}
		/>
	)
}

export default function Header() {
	//TRUCAZO!
	const [flag, setFlag] = useBoolean()

	const bgColor = useColorModeValue('#fafafa', 'primary')
	const textColor = useColorModeValue('five', 'secondary')

	return (
		<Section
		
		styles={{direction: {base: 'column', lg: 'row'}, align: 'center', bg: {bgColor}}}
			>
			{flag && <Text>El useBoolean papa!</Text>}
			<Image
				visibility={flag ? 'hidden' : 'visible'}
				src={PULPO}
				alt='myFace'
				borderRadius='full'
				margin='auto'
				mb={{lg:7}}
				mr={{ lg: 20 }}
				w={{ base: 'xs', md: 'sm' }}
			/>

			<Stack
			
				color={textColor}
				spacing={6}
				textAlign={{ base: 'center', lg: 'start' }}
				maxW={{ md: 'xl' }}>
				<Text
					as='h1'
					fontWeight={'bold'}
					fontSize={{ base: '3xl', md: '6xl' }}
					mb={{ md: 0 }}>
					Gustavo Yoldi
				</Text>
				<Text as='h2' fontSize={{ md: '2xl' }}>
					Buscando un puesto como Front End Developer
				</Text>
				<Text as='h2' fontSize={{ md: 'xl' }}>
					React - TypeScript - ChakraUi
				</Text>

				<MyButton content='Descargar mi cv' url={CV} />
				{/* <MyButton onClick={setFlag.toggle} content='Chau pulpo' /> */}
			</Stack>
		</Section>
	)
}
