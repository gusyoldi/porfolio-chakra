import { Box, Stack, Text } from '@chakra-ui/react'
import { Section } from './common/Section'
import { SectionTitle } from './common/SectionTitle'
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
} from '@chakra-ui/react'
interface Props {
	name: string
}

export const ListSkills = () => {
	return (
		<Section title='Tecnologías'>
			<Accordion allowToggle>
				<AccordionItem>
					<h2>
						<AccordionButton _expanded={{ bg: 'five', color: 'white' }}>
							<Text as='span' flex='1' textAlign='left' color={'secondary'} fontWeight={'bold'} >
								Skills
							</Text>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel py={4}>
						<Skill name='JavaScript' />
						{/* <Skill name='React' />
						<Skill name='NodeJs' />
						<Skill name='Bootstrap' />
						<Skill name='Express' />
						<Skill name='Tailwind' />
						<Skill name='MySQL' />
						<Skill name='ChakraUI' />
						<Skill name='Sequelize' />
						<Skill name='Git' /> */}
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</Section>
	)
}

const Skill = ({ name }: Props) => {
	return (
		<Box p={4} mb={6} textAlign={'center'} bg={'secondary'} borderRadius={8}>
			<Text>{name}</Text>
		</Box>
	)
}
