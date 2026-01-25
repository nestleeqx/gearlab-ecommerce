'use client'
import { useZodValidation } from '@/hooks/useZodValidation'
import { ShippingFormData, shippingSchema } from '@/lib/validationSchemas'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'

interface CheckoutFormProps {
	onSubmit: (data: ShippingFormData) => void
}

export default function CheckoutForm({ onSubmit }: CheckoutFormProps) {
	const initialFormData: ShippingFormData = {
		streetAddress: '',
		city: '',
		state: '',
		zipCode: '',
		country: '',
		email: '',
		fullName: ''
	}

	const { values, errors, handleChange, validateForm } = useZodValidation(
		shippingSchema,
		initialFormData
	)

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (validateForm()) {
			onSubmit(values)
		}
	}

	return (
		<div className='border-r border-neutral-100'>
			<h1 className='mb-8 text-heading-h3 font-semibold text-neutral-900'>
				Shipping Address
			</h1>
			<form
				onSubmit={handleSubmit}
				className='space-y-6 mt-16 max-w-115'
			>
				<div>
					<label
						htmlFor='streetAddress'
						className='mb-2 block text-body font-medium text-neutral-600'
					>
						Street Address
					</label>
					<Input
						id='streetAddress'
						type='text'
						value={values.streetAddress}
						onChange={e =>
							handleChange('streetAddress', e.target.value)
						}
						className='w-full'
						error={errors.streetAddress}
					/>
				</div>
				<div className='grid grid-cols-2 gap-4'>
					<div>
						<label
							htmlFor='city'
							className='mb-2 block text-body font-medium text-neutral-600'
						>
							City
						</label>
						<Input
							id='city'
							type='text'
							value={values.city}
							onChange={e => handleChange('city', e.target.value)}
							className='w-full'
							error={errors.city}
						/>
					</div>
					<div>
						<label
							htmlFor='state'
							className='mb-2 block text-body font-medium text-neutral-600'
						>
							State
						</label>
						<Input
							id='state'
							type='text'
							value={values.state}
							onChange={e =>
								handleChange('state', e.target.value)
							}
							className='w-full'
							error={errors.state}
						/>
					</div>
				</div>
				<div className='grid grid-cols-2 gap-4'>
					<div>
						<label
							htmlFor='zipCode'
							className='mb-2 block text-body font-medium text-neutral-600'
						>
							Zip Code
						</label>
						<Input
							id='zipCode'
							type='text'
							value={values.zipCode}
							onChange={e =>
								handleChange('zipCode', e.target.value)
							}
							className='w-full'
							error={errors.zipCode}
						/>
					</div>
					<div>
						<label
							htmlFor='country'
							className='mb-2 block text-body font-medium text-neutral-600'
						>
							Country
						</label>
						<Input
							id='country'
							type='text'
							value={values.country}
							onChange={e =>
								handleChange('country', e.target.value)
							}
							className='w-full'
							error={errors.country}
						/>
					</div>
				</div>
				<div className='grid grid-cols-2 gap-4 mt-13'>
					<div>
						<label
							htmlFor='email'
							className='mb-2 block text-body font-medium text-neutral-600'
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
							className='w-full'
							error={errors.email}
						/>
					</div>
					<div>
						<label
							htmlFor='fullName'
							className='mb-2 block text-body font-medium text-neutral-600'
						>
							Full name
						</label>
						<Input
							id='fullName'
							type='text'
							value={values.fullName}
							onChange={e =>
								handleChange('fullName', e.target.value)
							}
							className='w-full'
							error={errors.fullName}
						/>
					</div>
				</div>
				<Button
					type='submit'
					className='mt-8 w-full rounded-sm'
					size='lg'
				>
					Place Order
				</Button>
			</form>
		</div>
	)
}
