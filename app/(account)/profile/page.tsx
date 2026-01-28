import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
	title: 'My Profile - GearLab',
	description: 'Your user profile.'
}

export default function ProfilePage() {
	redirect('/profile/orders')
}
