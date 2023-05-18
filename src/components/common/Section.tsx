import { Stack } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { SectionTitle } from './SectionTitle'

interface SectionProps {
	children: ReactNode
	title?: string
}

export const Section = ({ children, title }: SectionProps) => {
	return (
		<Stack as='section' my={20} >
			<SectionTitle content={title} />
			{children}
		</Stack>
	)
}
