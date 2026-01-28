import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
	title: 'Shopping Cart - GearLab',
	description: 'View your shopping cart.'
}

export default function CartLayout({
	children
}: {
	children: React.ReactNode
}) {
	return <>{children}</>
}
