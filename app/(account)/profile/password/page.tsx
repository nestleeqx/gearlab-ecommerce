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
					<div className='text-center mt-12 py-12'>
						<Text className='text-heading-h4 text-neutral-900 font-medium'>
							Password change successful!
						</Text>
						<Button
							variant='default'
							size='lg'
							className='mt-6 font-medium rounded-sm'
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
			<h1 className='mb-8 text-heading-h4 font-semibold text-neutral-900'>
				Change Password
			</h1>
			<div className='mt-12 max-w-80'>
				<form
					onSubmit={handleSubmit}
					className='space-y-6'
				>
					<div>
						<label
							htmlFor='newPassword'
							className='mb-2 block text-body font-medium text-neutral-600'
						>
							New Password
						</label>
						<Input
							id='newPassword'
							type='password'
							value={values.newPassword}
							onChange={e =>
								handleChange('newPassword', e.target.value)
							}
							className='w-full py-5'
							error={errors.newPassword}
						/>
					</div>
					<div>
						<label
							htmlFor='confirmPassword'
							className='mb-2 block text-body font-medium text-neutral-600'
						>
							Confirm Password
						</label>
						<Input
							id='confirmPassword'
							type='password'
							value={values.confirmPassword}
							onChange={e =>
								handleChange('confirmPassword', e.target.value)
							}
							className='w-full py-5'
							error={errors.confirmPassword}
						/>
					</div>
					{errors.global && (
						<p className='mt-1 text-body text-red-500'>
							{errors.global}
						</p>
					)}
					<Button
						type='submit'
						size='lg'
						className='mt-5 rounded-sm'
					>
						Change password
					</Button>
				</form>
			</div>
		</div>
	)
}
