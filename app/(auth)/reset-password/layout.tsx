import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
	title: 'Reset Password - GearLab',
	description: 'Reset your password.'
}

export default function ResetPasswordLayout({
	children
}: {
	children: React.ReactNode
}) {
	return <>{children}</>
}
