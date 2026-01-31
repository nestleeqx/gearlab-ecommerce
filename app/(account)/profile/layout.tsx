'use client'
import PageContainer from '@/components/layout/PageContainer/PageContainer'
import PageTitleWide from '@/components/ui/PageTitleWide/PageTitleWide'
import ProfileSidebar from '@/components/ui/ProfileSidebar/ProfileSidebar'
import { useAuth } from '@/context/AuthContext'
import { useMounted } from '@/hooks/useMounted'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function ProfileLayout({
	children
}: {
	children: React.ReactNode
}) {
	const { isAuthenticated, isLoading } = useAuth()
	const router = useRouter()
	const mounted = useMounted()

	useEffect(() => {
		if (mounted && !isLoading && !isAuthenticated) {
			router.push('/login')
		}
	}, [isAuthenticated, isLoading, router, mounted])

	if (!mounted || isLoading) {
		return (
			<>
				<PageTitleWide title='My Account' />
				<PageContainer className='mt-8 lg:mt-16'>
					<div className='flex min-h-[40vh] lg:min-h-[60vh] items-center justify-center'>
						<div className='text-sm lg:text-base text-neutral-600'>
							Loading...
						</div>
					</div>
				</PageContainer>
			</>
		)
	}

	if (!isAuthenticated) {
		return null
	}

	return (
		<>
			<PageTitleWide title='My Account' />
			<PageContainer className='mt-8 lg:mt-16'>
				<div className='flex flex-col lg:flex-row gap-6 lg:gap-8'>
					<ProfileSidebar />
					<main className='flex-1 min-w-0'>{children}</main>
				</div>
			</PageContainer>
		</>
	)
}
