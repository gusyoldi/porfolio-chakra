import { Box, IconButton, Stack, Tooltip, useClipboard } from '@chakra-ui/react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export default function Footer() {
	return (
		<Box as='section' bg='primary' mt={'16'}>
			<Stack
				direction='row'
				py='16px'
				px='40px'
				// maxWidth='1200px'
				justify='space-between'
				margin={'auto'}>
				<motion.div whileHover={{ scale: 1.2 }}>
					<IconButton
						as='a'
						target='_blank'
						href='https://www.linkedin.com/in/gustavo-yoldi-760957156/'
						variant='unstyled'
						bg='primary'
						color='secondary'
						boxSize='48px'
						aria-label='My LinkedIn'
						fontSize='48px'
						icon={<FaLinkedin />}
					/>
				</motion.div>

				<motion.div whileHover={{ scale: 1.2 }}>
					<IconButton
						as='a'
						target='_blank'
						href='https://github.com/gusyoldi?tab=repositories'
						variant='unstyled'
						bg='primary'
						color='secondary'
						/* GitHubColor: '#24292f' */
						boxSize='48px'
						aria-label='My GitHub'
						fontSize='48px'
						icon={<FaGithub />}
					/>
				</motion.div>

				<motion.div whileHover={{ scale: 1.2 }}>
					<CopyToClipboard>
						<IconButton
							variant='unstyled'
							color='secondary'
							bg='primary'
							boxSize='48px'
							aria-label='My Gmail'
							/* gmailColor: #ea4335 */
							fontSize='48px'
							
							icon={<FiMail />}
						/>
					</CopyToClipboard>
				</motion.div>
			</Stack>
		</Box>
	)
}

interface CopyToClipboardProps {
	children: ReactNode
}

const CopyToClipboard = ({ children }: CopyToClipboardProps) => {
	const email = 'yoldi.gustavo@gmail.com'
	const { onCopy, hasCopied } = useClipboard(email)

	return (
		<Stack onClick={onCopy}>
			<Tooltip
				label={hasCopied ? 'Copiado!' : 'Copiar email'}
				fontWeight={'bold'}
				fontFamily={'body'}
				mb={1}
				bg='secondary'
				placement='top'
				rounded={'md'}
				shadow={'xl'}
				openDelay={200}
				closeDelay={400}>
				{children}
			</Tooltip>
		</Stack>
	)
}
