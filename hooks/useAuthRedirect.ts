'use client'
import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export function useAuthRedirect(redirectTo: string = '/') {
	const { isAuthenticated } = useAuth()
	const router = useRouter()

	useEffect(() => {
		if (isAuthenticated) {
			router.push(redirectTo)
		}
	}, [isAuthenticated, router, redirectTo])

	return isAuthenticated
}
