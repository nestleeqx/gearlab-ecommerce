'use client'
import AuthRedirect from '@/components/auth/AuthRedirect/AuthRedirect'
import PageContainer from '@/components/layout/PageContainer/PageContainer'
import { Button } from '@/components/ui/Button/Button'
import { Input } from '@/components/ui/Input/Input'
import PageTitleWide from '@/components/ui/PageTitleWide/PageTitleWide'
import { useAuth } from '@/context/AuthContext'
import { useZodValidation } from '@/hooks/useZodValidation'
import {
	ForgotPasswordFormData,
	forgotPasswordSchema
} from '@/lib/validationSchemas'
import { useRouter } from 'next/navigation'

const initialValues: ForgotPasswordFormData = {
	email: ''
}

export default function ForgotPasswordPage() {
	const { values, errors, handleChange, validateForm, setGlobalError } =
		useZodValidation(forgotPasswordSchema, initialValues)
	const { checkEmailExists } = useAuth()
	const router = useRouter()

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		if (validateForm()) {
			const exists = checkEmailExists(values.email)

			if (exists) {
				router.push(
					`/reset-password?email=${encodeURIComponent(values.email)}`
				)
			} else {
				setGlobalError('No account found with this email')
			}
		}
	}

	return (
		<AuthRedirect redirectTo='/'>
			<PageTitleWide title='Forgot Password' />
			<PageContainer className='px-4'>
				<div className='flex mt-16 md:mt-24 lg:mt-32 items-center justify-center py-8 md:py-12'>
					<div className='w-full max-w-sm md:max-w-80 space-y-6 md:space-y-8'>
						<div>
							<p className='text-sm md:text-body leading-relaxed text-neutral-600'>
								Please enter the email address associated with
								your account. We&apos;ll promptly send you a
								link to reset your password.
							</p>
						</div>
						<form
							onSubmit={handleSubmit}
							className='space-y-4 md:space-y-5'
						>
							<div>
								<label
									htmlFor='email'
									className='mb-1.5 md:mb-2 block text-sm md:text-body font-medium text-neutral-600'
								>
									Email
								</label>
								<Input
									id='email'
									type='email'
									value={values.email}
									onChange={e =>
										handleChange('email', e.target.value)
									}
									placeholder='Enter your email'
									className='w-full py-4 md:py-5'
									error={errors.email}
								/>
							</div>
							{errors.global && (
								<p className='mt-1 text-sm md:text-body text-red-500'>
									{errors.global}
								</p>
							)}
							<Button
								type='submit'
								className='w-full rounded-sm'
								size='lg'
							>
								Send reset link
							</Button>
						</form>
					</div>
				</div>
			</PageContainer>
		</AuthRedirect>
	)
}
