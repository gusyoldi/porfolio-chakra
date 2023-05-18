import { Button, useColorModeValue } from '@chakra-ui/react'

interface Props {
	url?: string
	content: string
	onClick?: () => void
}

export const MyButton = ({ url, content, onClick }: Props) => {
	const textColor = useColorModeValue('five', 'primary')
	return (
		<Button
			as='a'
			href={url}
			bg={'secondary'}
			color={textColor}
			// boxShadow='md'
			// _hover={{ bg: 'five' }}
			onClick={onClick}
			variant="outline"
			boxShadow={'0 5px 20px 0px rgb(211,55,239/ 43%)'}
			_hover={{
				bg: 'purple.700',
			}}
			_focus={{
				bg: 'purple.800',
			}}
			download>
				
			{content}
		</Button>
	)
}

/* boxShadow={'0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'} */