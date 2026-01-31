'use client'
import CartIcon from '@/components/ui/CartIcon/CartIcon'
import Logo from '@/components/ui/Logo/Logo'
import Menu from '@/components/ui/Menu/Menu'
import { useAuth } from '@/context/AuthContext'
import { useMounted } from '@/hooks/useMounted'
import { ICategory } from '@/services/filters'
import { MenuIcon, User, X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

interface IHeader {
	categories: ICategory[]
}

export default function Header({ categories }: IHeader) {
	const router = useRouter()
	const { isAuthenticated, user } = useAuth()
	const mounted = useMounted()
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	const handleUserIconClick = (e: React.MouseEvent) => {
		e.preventDefault()

		if (isAuthenticated) {
			router.push('/profile')
		} else {
			router.push('/login')
		}
		setMobileMenuOpen(false)
	}

	const handleLinkClick = () => {
		setMobileMenuOpen(false)
	}

	useEffect(() => {
		if (mobileMenuOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'unset'
		}

		return () => {
			document.body.style.overflow = 'unset'
		}
	}, [mobileMenuOpen])

	return (
		<>
			<header className='container-custom min-h-21 flex justify-between items-center py-4'>
				<Logo />
				<div className='hidden md:flex items-center justify-center'>
					<Menu categories={categories} />
				</div>
				<div className='hidden md:flex items-center justify-end'>
					<div className='flex items-center space-x-6'>
						<CartIcon />
						<button
							onClick={handleUserIconClick}
							className='cursor-pointer relative p-2 rounded-full transition-colors'
							aria-label={
								mounted && isAuthenticated
									? 'Go to profile'
									: 'Sign in'
							}
							title={
								mounted && isAuthenticated
									? `Logged in as ${user?.name}`
									: 'Sign in'
							}
						>
							<User className='text-neutral-500 hover:text-neutral-300' />
							{mounted && isAuthenticated && (
								<span className='absolute top-1 right-1 h-2 w-2 bg-green-500 rounded-full'></span>
							)}
						</button>
					</div>
				</div>
				<div className='md:hidden flex items-center gap-4'>
					<CartIcon />
					<button
						onClick={() => setMobileMenuOpen(true)}
						className='p-2'
						aria-label='Open menu'
					>
						<MenuIcon className='h-6 w-6 text-neutral-500' />
					</button>
				</div>
			</header>
			<div
				className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
					mobileMenuOpen
						? 'opacity-100 pointer-events-auto'
						: 'opacity-0 pointer-events-none'
				}`}
			>
				<div
					className='absolute inset-0 bg-white'
					onClick={() => setMobileMenuOpen(false)}
				/>
				<div className='relative h-full flex flex-col'>
					<div className='flex justify-between items-center p-6 pt-5.5 border-b border-neutral-100'>
						<Logo />
						<button
							onClick={() => setMobileMenuOpen(false)}
							className='p-2 hover:bg-neutral-50 rounded-full transition-colors'
							aria-label='Close menu'
						>
							<X className='h-6 w-6 text-neutral-500' />
						</button>
					</div>
					<div className='flex-1 overflow-y-auto px-6 py-8'>
						<nav className='space-y-1'>
							<Menu
								categories={categories}
								isMobile={true}
								onLinkClick={handleLinkClick}
							/>
						</nav>
					</div>
					<div className='border-t border-neutral-100 p-6'>
						<button
							onClick={handleUserIconClick}
							className='w-full flex items-center justify-center gap-3 py-4 px-6 bg-neutral-900 text-white rounded-md hover:bg-neutral-800 transition-colors'
						>
							<User className='h-5 w-5' />
							<span className='font-medium'>
								{mounted && isAuthenticated
									? 'My Account'
									: 'Sign In'}
							</span>
						</button>
					</div>
				</div>
			</div>
		</>
	)
}
