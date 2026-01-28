import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
	title: 'Change Password - GearLab',
	description: 'Update your password.'
}

export default function PasswordLayout({
	children
}: {
	children: React.ReactNode
}) {
	return <>{children}</>
}
