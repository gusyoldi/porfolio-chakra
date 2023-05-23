import { Stack } from '@chakra-ui/react'
import OCHENTA_NOVENTA from '../../assets/images/ProjectsImg/ochentaNoventa.jpg'
import PORFOLIO from '../../assets/images/ProjectsImg/portfolio-img.png'
import COMPARTI_UN_DATO from '../../assets/images/ProjectsImg/comparti-un-dato.png'
import SOCIAL_PROOF from '../../assets/images/ProjectsImg/desktop-design-img.jpg'
import { AnimatedCard } from './Card'
import { Section } from '../common/Section'



export default function ListMyProjects() {
	return (
		<Section styles={{display: {base: 'flex', md: 'grid'}, direction: {base: 'column'}, justifyContent: 'space-between', alignItems: {base: 'center'}, gridTemplateColumns: {md: 'auto auto', lg: 'auto auto auto'}, gap: {md: 20}}} >
		
				<AnimatedCard
					title='Porfolio'
					subtitle='Usted está aquí!'
					img={PORFOLIO}
					toProject=''
					toGitHub=''
				/>
				<AnimatedCard
					title='Compartí un dato'
					subtitle='App conectada a Supabase'
					img={COMPARTI_UN_DATO}
					toProject='https://comparti-un-dato-gustavoyoldi.netlify.app/'
					toGitHub='https://github.com/gusyoldi/comparti-un-dato'
				/>
				<AnimatedCard
					title='Ochenta Noventa'
					subtitle='Landing page'
					img={OCHENTA_NOVENTA}
					toProject='https://ochentanoventa.com.ar/'
					toGitHub='https://github.com/gusyoldi/ochentanoventa'
				/>
				<AnimatedCard
					title='Social Proof'
					subtitle='Diseño responsive'
					img={SOCIAL_PROOF}
					toProject='https://gusyoldi.github.io/social-proof-page-challenge/'
					toGitHub='https://github.com/gusyoldi/social-proof-page-challenge'
				/>
	
		</Section>
	)
}
