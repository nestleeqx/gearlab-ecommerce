'use client'
import PageContainer from '@/components/layout/PageContainer/PageContainer'
import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

interface AuthRedirectProps {
	children: React.ReactNode
	redirectTo?: string
}

export default function AuthRedirect({
	children,
	redirectTo = '/'
}: AuthRedirectProps) {
	const { isAuthenticated } = useAuth()
	const router = useRouter()

	useEffect(() => {
		if (isAuthenticated) {
			router.replace(redirectTo)
		}
	}, [isAuthenticated, router, redirectTo])

	if (isAuthenticated) {
		return (
			<PageContainer>
				<div className='flex mt-32 items-center justify-center py-12'>
					<div className='text-neutral-600'>Redirecting...</div>
				</div>
			</PageContainer>
		)
	}

	return <>{children}</>
}
