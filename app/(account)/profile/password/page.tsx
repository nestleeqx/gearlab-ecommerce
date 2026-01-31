'use client'

import PageContainer from '@/components/layout/PageContainer/PageContainer'
import { Button } from '@/components/ui/Button/Button'
import { Input } from '@/components/ui/Input/Input'
import Text from '@/components/ui/Text/Text'
import { useAuth } from '@/context/AuthContext'
import { useZodValidation } from '@/hooks/useZodValidation'
import {
	ChangePasswordFormData,
	changePasswordSchema
} from '@/lib/validationSchemas'
import { useState } from 'react'

const initialPasswordValues: ChangePasswordFormData = {
	newPassword: '',
	confirmPassword: ''
}

export default function PasswordPage() {
	const {
		values,
		errors,
		handleChange,
		validateForm,
		setGlobalError,
		reset
	} = useZodValidation(changePasswordSchema, initialPasswordValues)
	const [isSuccess, setIsSuccess] = useState<boolean>(false)
	const { user, resetPassword } = useAuth()

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		if (user) {
			if (validateForm()) {
				const success = resetPassword(user.email, values.newPassword)
				if (success) {
					setIsSuccess(true)
					reset()
				} else {
					setGlobalError('Failed to change password')
				}
			}
		}
	}

	if (isSuccess) {
		return (
			<>
				<PageContainer>
					<div className='text-center mt-8 lg:mt-12 py-8 lg:py-12 px-4'>
						<Text className='text-lg lg:text-heading-h4 text-neutral-900 font-medium'>
							Password change successful!
						</Text>
						<Button
							variant='default'
							size='lg'
							className='mt-4 lg:mt-6 font-medium rounded-sm w-full sm:w-auto'
							onClick={() => setIsSuccess(false)}
						>
							Continue
						</Button>
					</div>
				</PageContainer>
			</>
		)
	}

	return (
		<div>
			<h1 className='mb-4 lg:mb-8 text-lg lg:text-heading-h4 font-semibold text-neutral-900 md:text-center lg:text-start'>
				Change Password
			</h1>
			<div className='mt-8 lg:mt-12 max-w-none md:max-w-80 md:mx-auto lg:mx-0'>
				<form
					onSubmit={handleSubmit}
					className='space-y-4 lg:space-y-6'
				>
					<div>
						<label
							htmlFor='newPassword'
							className='mb-1.5 lg:mb-2 block text-sm lg:text-body font-medium text-neutral-600'
						>
							New Password
						</label>
						<Input
							id='newPassword'
							type='password'
							value={values.newPassword}
							placeholder='Enter new password'
							onChange={e =>
								handleChange('newPassword', e.target.value)
							}
							className='w-full py-4 lg:py-5'
							error={errors.newPassword}
						/>
					</div>
					<div>
						<label
							htmlFor='confirmPassword'
							className='mb-1.5 lg:mb-2 block text-sm lg:text-body font-medium text-neutral-600'
						>
							Confirm Password
						</label>
						<Input
							id='confirmPassword'
							type='password'
							value={values.confirmPassword}
							placeholder='Confirm your password'
							onChange={e =>
								handleChange('confirmPassword', e.target.value)
							}
							className='w-full py-4 lg:py-5'
							error={errors.confirmPassword}
						/>
					</div>
					{errors.global && (
						<p className='mt-1 text-sm lg:text-body text-red-500'>
							{errors.global}
						</p>
					)}
					<Button
						type='submit'
						size='lg'
						className='mt-4 lg:mt-5 w-full sm:w-auto md:mx-auto lg:mx-0 md:block rounded-sm'
					>
						Change password
					</Button>
				</form>
			</div>
		</div>
	)
}
