import { Image, Stack, Text, Link } from '@chakra-ui/react'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import { motion } from 'framer-motion'
import { MyButton } from '../common/Buttons'
import { ReactNode, useState } from 'react'

// const cardAnimate = {
// 	hidden: {
// 		opacity: 1,
// 		scale: 1,
// 	},
// 	visible: {
// 		opacity: 1,
// 		scale: 1.2,
// 	},
// }

interface AnimatedCardProps {
	toProject: string
	toGitHub: string
	title: string
	subtitle: string
	img: string
}

export const AnimatedCard = ({
	toProject,
	toGitHub,
	title,
	subtitle,
	img,
}: AnimatedCardProps) => {
	const [isActive, setIsActive] = useState(false);
	return (
		<motion.div
			transition={{ duration: 0.8, type: 'spring', stiffness: 200 }}
			whileHover={{
				// scale: [1, 1.1],
				// originX: 0,
				rotateY: 180,
			}}
      // onHoverStart={() => setIsActive(!isActive)}
      // animate={{
      //   rotateY: isActive ? 180 : 0
      // }}
			>
			<Card toProject={toProject} toGitHub={toGitHub}>
				<CardHead title={title} subtitle={subtitle} />
				<CardImg link={toProject} img={img} />
			</Card>
		</motion.div>
	)
}
interface CardProps {
	children: ReactNode
	toProject: string
	toGitHub: string
}

const Card = ({ children, toProject, toGitHub }: CardProps) => {
	return (
		<Stack
			spacing={2}
			my={8}
			bg={'primary'}
			borderColor='gray.300'
			rounded='xl'
			maxWidth={{ base: '300px' }}
			textAlign='center'
			boxShadow='dark-lg'
			width={{ base: '220' }}
			height='330px'>
			{children}
			<Stack direction='row' justifyContent='center'>
				<MyButton content='Proyecto' url={toProject} />
				<MyButton content='GitHub' url={toGitHub} />
			</Stack>
		</Stack>
	)
}

interface cardHeadProps {
	title: string
	subtitle: string
}

const CardHead = ({ title, subtitle }: cardHeadProps) => {
	return (
		<Stack color={'secondary'}>
			<Text as='h5' fontSize={{ base: '18px' }}>
				{title}
			</Text>
			<Text as='h6' fontSize={{ base: '12px' }}>
				{subtitle}
			</Text>
		</Stack>
	)
}

interface CardImgProps {
	link: string
	img: string
}

const CardImg = ({ link, img }: CardImgProps) => {
	return (
		<Link href={link} isExternal _hover={{ textDecoration: 'none' }}>
			<Image
				src={img}
				alt='projectImg'
				width='220px'
				height='210'
				filter='grayscale(1)'
				_hover={{ filter: 'grayscale(0)' }}
			/>
		</Link>
	)
}
