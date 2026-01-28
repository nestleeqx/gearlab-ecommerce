import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
	title: 'Sign Up - GearLab',
	description: 'Create a new account.'
}

export default function SignUpLayout({
	children
}: {
	children: React.ReactNode
}) {
	return <>{children}</>
}
