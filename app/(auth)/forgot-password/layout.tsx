import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
	title: 'Forgot Password - GearLab',
	description: 'Reset your password.'
}

export default function ForgotPasswordLayout({
	children
}: {
	children: React.ReactNode
}) {
	return <>{children}</>
}
