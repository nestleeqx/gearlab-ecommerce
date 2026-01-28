import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
	title: 'Checkout - GearLab',
	description: 'Complete your purchase.'
}

export default function CheckoutLayout({
	children
}: {
	children: React.ReactNode
}) {
	return <>{children}</>
}
