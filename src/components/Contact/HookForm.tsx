import { ReactNode, useState } from 'react'
import { useForm } from 'react-hook-form'
import {
	FormErrorMessage,
	FormLabel,
	FormControl,
	Input,
	Button,
	Textarea,
	Stack,
	FormHelperText,
	useFormErrorStyles,
} from '@chakra-ui/react'
import { useEffect } from 'react'

const regEx =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

interface Props {
	children: ReactNode
}

export const FormStyles = ({ children }: Props) => {
	return (
		<Stack mb={20} p={25} boxShadow={'dark-lg'} rounded={'2xl'} bg={'primary'}>
			{children}
		</Stack>
	)
}

type FormValues = {
	name: string
	email: string
	message: string
}

export const HookForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitSuccessful },
	} = useForm()

	const [input, setInput] = useState('')

  const handleInputChange = (e) => setInput(e.target.value)

	//validaciones por onChange
  const isError = input === ''
	// const [data, setData] = useState('')

	useEffect(() => {
		// if (isSubmitSuccessful) {
		// 	reset()
		// 	alert(data)
		// }
		
	})

	return (
		//TRAE LA DATA POR SUBMIT
		<form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
			<FormControl
			// isRequired={errors.name && errors.email && errors.message}
			// isInvalid={errors.name || errors.email}
			isInvalid={isError}
			>
				<FormLabel color='secondary' htmlFor='name'>
					Nombre
				</FormLabel>

				<Input
				value={input}
				onChange={handleInputChange}
					id='name'
					focusBorderColor='secondary'
					_placeholder={{ opacity: 0.6, color: 'secondary' }}
					placeholder='Tu nombre'
					/* {...register('name', {
						required: 'El campo "Nombre" es obligatorio',
						minLength: {
							value: 2,
							message: 'El nombre debe tener 2 letras como mínimo',
						},
					})} */
				/>
				  {!isError ? (
        <FormHelperText>
          Enter the email you'd like to receive the newsletter on.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
  
				{/* <FormErrorMessage>
					{errors.name && errors.name.message}
				</FormErrorMessage> */}
				{/* <FormLabel htmlFor='email'>Email</FormLabel>
				<Input
					id='email'
					placeholder='Tu email'
					focusBorderColor='secondary'
					_placeholder={{ opacity: 0.6, color: 'secondary' }}
					{...register('email', {
						required: 'El campo "Email" es obligatorio',

						pattern: {
							value: regEx,
							message: 'Ingresá un Email válido',
						},
					})}
				/>
				<FormErrorMessage>
					{errors.email && errors.email.message}
				</FormErrorMessage>

				<FormLabel htmlFor='message'>Mensaje</FormLabel>
				<Textarea
					id='message'
					placeholder='Tu mensaje'
					focusBorderColor='secondary'
					_placeholder={{ opacity: 0.6, color: 'secondary' }}
					{...register('message', {
						required: 'El campo "Mensaje" es obligatorio',
						// minLength: { value: 10, message: '' },
					})}
				/>
				<FormErrorMessage>
					{errors.message && errors.message.message}
				</FormErrorMessage> */}
				<Button
					mt={4}
					bg='secondary'
					color='primary'
					// isLoading={isSubmitting}
					type='submit'>
					Contactar
				</Button>
			</FormControl>
		</form>
	)
}
