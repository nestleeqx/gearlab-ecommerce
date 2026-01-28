import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
	title: 'My Orders - GearLab',
	description: 'View your order history.'
}

export default function OrdersLayout({
	children
}: {
	children: React.ReactNode
}) {
	return <>{children}</>
}
