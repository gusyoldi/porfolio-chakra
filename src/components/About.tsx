import { Image, Link, Stack, Text } from '@chakra-ui/react'
// import MY_FACE_SAX from "../assets/images/myFaceSax.png"
import PULPO from '../assets/images/among.jpg'
import { Section } from './common/Section'
import { SectionTitle } from './common/SectionTitle'

export const About = () => {
	return (
		<Section title='Sobre mí'>
			<Stack
				justify='space-between'
				direction={{ base: 'column', md: 'row-reverse' }}
				textAlign='center'
				letterSpacing='2px'
				p={4}>
				<Image
					src={PULPO}
					boxSize={{ base: '300px', md: '400px' }}
					borderRadius='50%'
					opacity='0.8'
					alignSelf='center'
				/>
				<Stack spacing='32px' maxWidth='590px' textAlign='justify'>
					<Text as='p' fontSize='17.6px'>
						Hola! Gracias por entrar a mi portfolio. Después de terminar el
						curso Fullstack Web Developer en{' '}
						<Link
							href='https://www.digitalhouse.com/ar/productos/programcion/programacion-web-full-stack'
							target='_blank'
							rel='noreferrer'>
							Digital House
						</Link>
						, me dediqué a afianzar mis conocimientos en Frontend y Backend.
					</Text>
					<Text as='p' fontSize='17.6px'>
						Hice, con React, la landing page del grupo musical para eventos{' '}
						<Link
							href='https://ochentanoventa.com.ar'
							target='_blank'
							rel='noreferrer'>
							Ochenta Noventa
						</Link>{' '}
						con la cual tuve la posibilidad de tocar en varias oportunidades,
						fusionando así mi hobby de toda la vida con mi nueva pasión: la
						informática. Además, realicé 4 proyectos de{' '}
						<a
							href='https://www.frontendmentor.io/challenges'
							target='_blank'
							rel='noreferrer'>
							FrontendMentor
						</a>
						, para practicar mis habilidades con CSS. Por otro lado, para
						ejercitar mis skills para resolver problemas realicé varios
						ejercicios en{' '}
						<a href='https://exercism.org/' target='_blank' rel='noreferrer'>
							{' '}
							Exercism.org
						</a>{' '}
						en JavaScript.
					</Text>
					<Text as='p' fontSize='17.6px'>
						Lo último que hice en Enero de 2023 para entrenar mis habilidades
						fue el curso{' '}
						<a
							href='https://www.udemy.com/course/full-stack-crash-course/'
							target='_blank'
							rel='noreferrer'>
							{' '}
							Full Stack Crash Course
						</a>{' '}
						en Udemy, dictado por Jonas Schmedtmann, de 12.5 horas de duración.
					</Text>
					<Text as='p' fontSize='17.6px'>
						Aprendí muchísimo en este último tiempo, pero soy consciente de que
						me queda aún un largo recorrido.
					</Text>
					<Text as='p' fontSize='17.6px'>
						Desde noviembre de 2022, formo parte del equipo de "
						<a
							href='https://www.edefi.com.ar/'
							target='_blank'
							rel='noreferrer'>
							EDeFI
						</a>
						" como desarrollador frontend. Trabajo modelando componentes React
						con Tailwind CSS para replicar el mockup enviado por el diseñador.
					</Text>
					<Text as='p' fontSize='17.6px'>
						El código de todos estos proyectos está en mi{' '}
						<a
							href='https://github.com/gusyoldi?tab=repositories'
							target='_blank'
							rel='noreferrer'>
							GitHub
						</a>{' '}
						personal.
					</Text>
				</Stack>
			</Stack>
		</Section>
	)
}
