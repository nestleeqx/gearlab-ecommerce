import { z } from 'zod'

// Регулярное выражение для валидации email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Схема для логина
export const loginSchema = z.object({
	email: z
		.string()
		.min(1, 'Email is required')
		.regex(emailRegex, 'Invalid email format'),
	password: z.string().min(1, 'Password is required')
})

// Схема для регистрации
export const signupSchema = z.object({
	name: z
		.string()
		.min(1, 'Name is required')
		.min(8, 'Name must be at least 8 characters long'),
	email: z
		.string()
		.min(1, 'Email is required')
		.regex(emailRegex, 'Invalid email format'),
	password: z
		.string()
		.min(1, 'Password is required')
		.min(6, 'Password must be at least 6 characters long')
})

// Схема для сброса пароля
export const resetPasswordSchema = z
	.object({
		email: z
			.string()
			.min(1, 'Email is required')
			.regex(emailRegex, 'Invalid email format'),
		newPassword: z
			.string()
			.min(1, 'Password is required')
			.min(6, 'Password must be at least 6 characters long'),
		confirmPassword: z.string().min(1, 'Password confirmation is required')
	})
	.refine(data => data.newPassword === data.confirmPassword, {
		message: 'Passwords do not match',
		path: []
	})

// Схема для изменения пароля в профиле
export const changePasswordSchema = z
	.object({
		newPassword: z
			.string()
			.min(1, 'Password is required')
			.min(6, 'Password must be at least 6 characters long'),
		confirmPassword: z.string().min(1, 'Password confirmation is required')
	})
	.refine(data => data.newPassword === data.confirmPassword, {
		message: 'Passwords do not match',
		path: []
	})

// Схема для данных аккаунта
export const accountDataSchema = z.object({
	name: z
		.string()
		.min(1, 'Name is required')
		.min(8, 'Name must be at least 8 characters long'),
	email: z
		.string()
		.min(1, 'Email is required')
		.regex(emailRegex, 'Invalid email format')
})

// Схема для данных доставки (checkout)
export const shippingSchema = z.object({
	streetAddress: z.string().min(1, 'Street address is required'),
	city: z.string().min(1, 'City is required'),
	state: z.string().min(1, 'State is required'),
	zipCode: z.string().min(1, 'Zip code is required'),
	country: z.string().min(1, 'Country is required'),
	email: z
		.string()
		.min(1, 'Email is required')
		.regex(emailRegex, 'Invalid email format'),
	fullName: z.string().min(1, 'Full name is required')
})

// Схема для отзыва (review)
export const reviewSchema = z.object({
	email: z
		.string()
		.min(1, 'Email is required')
		.regex(emailRegex, 'Invalid email format'),
	fullName: z.string().min(1, 'Full name is required'),
	comment: z
		.string()
		.min(1, 'Review is required')
		.min(10, 'Review must be at least 10 characters'),
	rating: z.number().min(1, 'Please select a rating').max(5)
})

export const forgotPasswordSchema = z.object({
	email: z
		.string()
		.min(1, 'Email is required')
		.regex(emailRegex, 'Invalid email format')
})

export type LoginFormData = z.infer<typeof loginSchema>
export type SignupFormData = z.infer<typeof signupSchema>
export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>
export type ChangePasswordFormData = z.infer<typeof changePasswordSchema>
export type AccountDataFormData = z.infer<typeof accountDataSchema>
export type ShippingFormData = z.infer<typeof shippingSchema>
export type ReviewFormData = z.infer<typeof reviewSchema>
export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>
