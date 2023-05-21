import { Text } from '@chakra-ui/react'

interface Props  {
content: string
}

export const SectionTitle = ({content}: Props) => {
	return (
		<Text
			as='h3'
			textAlign='center'
			fontSize='20px'
			fontWeight='semibold'
			// textDecoration='underline'
      color={'secondary'}
			mb='48px'
			rounded={'2xl'}
			p={1}
			boxShadow={'0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(211 55 239 / 43%)'}
			>
			{content}
		</Text>
	)
}
