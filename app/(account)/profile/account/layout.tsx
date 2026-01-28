import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
	title: 'Account Details - GearLab',
	description: 'Manage your account details.'
}

export default function AccountLayout({
	children
}: {
	children: React.ReactNode
}) {
	return <>{children}</>
}
