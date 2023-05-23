import { Stack } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { SectionTitle } from './SectionTitle'

interface SectionProps {
	children: ReactNode
	title?: string
	styles: object
}

export const Section = ({
	children,
	title,
	styles
}: SectionProps) => {
	return (
		<Stack as='section' my={10}>
			{title && <SectionTitle content={title} />}
			<Stack {...styles}>
				{children}
			</Stack>
		</Stack>
	)
}
