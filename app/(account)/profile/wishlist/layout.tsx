import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
	title: 'My Wishlist - GearLab',
	description: 'Your saved items.'
}

export default function WishlistLayout({
	children
}: {
	children: React.ReactNode
}) {
	return <>{children}</>
}
