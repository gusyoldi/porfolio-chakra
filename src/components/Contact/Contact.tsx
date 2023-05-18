import { Section } from '../common/Section'
import { HookForm, FormStyles } from './HookForm'

export default function Contact({ children }) {
	return (
		<Section title='Contacto'>
			<FormStyles>
				<HookForm />
			</FormStyles>
		</Section>
	)
}
