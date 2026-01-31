'use client'

import PageContainer from '@/components/layout/PageContainer/PageContainer'
import { Button } from '@/components/ui/Button/Button'
import { Input } from '@/components/ui/Input/Input'
import Text from '@/components/ui/Text/Text'
import { useAuth } from '@/context/AuthContext'
import { useZodValidation } from '@/hooks/useZodValidation'
import { accountDataSchema } from '@/lib/validationSchemas'
import { getInitials } from '@/services/reviews'
import { useEffect, useMemo, useState } from 'react'

export default function AccountPage() {
	const { user, updateAccount } = useAuth()
	const [isSuccess, setIsSuccess] = useState<boolean>(false)
	const initialValues = useMemo(
		() => ({
			name: user?.name || '',
			email: user?.email || ''
		}),
		[user?.name, user?.email]
	)

	const {
		values,
		errors,
		handleChange,
		validateForm,
		setGlobalError,
		reset
	} = useZodValidation(accountDataSchema, initialValues)

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		if (validateForm()) {
			const success = updateAccount(values.name, values.email)

			if (success) {
				setIsSuccess(true)
				reset()
			} else {
				setGlobalError('Failed to update account details')
			}
		}
	}

	useEffect(() => {
		if (user) {
			reset()
		}
	}, [user, reset])

	if (!user) return null

	if (isSuccess) {
		return (
			<>
				<PageContainer>
					<div className='text-center mt-8 lg:mt-12 py-8 lg:py-12 px-4'>
						<Text className='text-lg lg:text-heading-h4 text-neutral-900 font-medium'>
							Account data has been successfully updated!
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
				Account Details
			</h1>
			<div className='mt-8 lg:mt-12 md:mx-auto lg:mx-0 md:max-w-80 w-full lg:w-80'>
				<div className='mb-6 lg:mb-8 flex h-14 w-14 md:h-17 md:w-17 lg:h-17 lg:w-17 items-center justify-center rounded-full bg-primary-100 text-xl lg:text-heading-h3 text-primary-900 md:mx-auto lg:mx-0'>
					{getInitials(user.name)}
				</div>
				<form
					onSubmit={handleSubmit}
					className='space-y-4 lg:space-y-6'
				>
					<div>
						<label
							htmlFor='fullName'
							className='mb-1.5 lg:mb-2 block text-sm lg:text-body font-medium text-neutral-600'
						>
							Full name
						</label>
						<Input
							id='fullName'
							type='text'
							value={values.name}
							placeholder='Enter your name'
							onChange={e => handleChange('name', e.target.value)}
							className='w-full py-4 lg:py-5'
							error={errors.name}
						/>
					</div>
					<div>
						<label
							htmlFor='email'
							className='mb-1.5 lg:mb-2 block text-sm lg:text-body font-medium text-neutral-600'
						>
							Email
						</label>
						<Input
							id='email'
							type='email'
							value={values.email}
							placeholder='Enter your email'
							onChange={e =>
								handleChange('email', e.target.value)
							}
							className='w-full py-4 lg:py-5'
							error={errors.email}
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
						Save Changes
					</Button>
				</form>
			</div>
		</div>
	)
}
