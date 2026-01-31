'use client'
import { useAuth } from '@/context/AuthContext'
import { cn } from '@/lib/utils'
import { Heart, Key, LogOut, ShoppingCart, User } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

interface MenuItem {
	href: string
	label: string
	icon: React.ElementType
}

const menuItems: MenuItem[] = [
	{ href: '/profile/orders', label: 'Orders', icon: ShoppingCart },
	{ href: '/profile/wishlist', label: 'Wishlist', icon: Heart },
	{ href: '/profile/password', label: 'Password', icon: Key },
	{ href: '/profile/account', label: 'Account Detail', icon: User }
]

export default function ProfileSidebar() {
	const pathname = usePathname()
	const { logout } = useAuth()
	const router = useRouter()

	const handleLogout = () => {
		logout()
		router.push('/')
	}

	return (
		<>
			<aside className='lg:hidden w-full'>
				<nav className='flex overflow-x-auto scrollbar-hide gap-2 pb-2 -mx-4 px-4'>
					{menuItems.map(item => {
						const Icon = item.icon
						const isActive = pathname === item.href

						return (
							<Link
								key={item.href}
								href={item.href}
								className={cn(
									'flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap',
									isActive
										? 'bg-neutral-light-100 text-neutral-900'
										: 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
								)}
							>
								<Icon className='h-4 w-4' />
								{item.label}
							</Link>
						)
					})}
					<button
						onClick={handleLogout}
						className='flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-neutral-900 cursor-pointer whitespace-nowrap'
					>
						<LogOut className='h-4 w-4' />
						Logout
					</button>
				</nav>
			</aside>
			<aside className='hidden lg:block w-64 shrink-0 border-r border-neutral-light-200'>
				<nav className='space-y-1 mt-15 mr-13'>
					{menuItems.map(item => {
						const Icon = item.icon
						const isActive = pathname === item.href

						return (
							<Link
								key={item.href}
								href={item.href}
								className={cn(
									'flex items-center gap-3 rounded-lg px-4 py-3 text-body font-medium transition-colors',
									isActive
										? 'bg-neutral-light-100 text-neutral-900'
										: 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
								)}
							>
								<Icon className='h-5 w-5' />
								{item.label}
							</Link>
						)
					})}
					<button
						onClick={handleLogout}
						className='flex w-full items-center gap-3 rounded-lg px-4 py-3 text-body font-medium text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-neutral-900 cursor-pointer'
					>
						<LogOut className='h-5 w-5' />
						Logout
					</button>
				</nav>
			</aside>
		</>
	)
}
