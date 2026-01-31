'use client'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/DropdownMenu/DropdownMenu'
import { ICategory } from '@/services/filters'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

interface IMenu {
	categories: ICategory[]
	isMobile?: boolean
	onLinkClick?: () => void
}

export default function Menu({
	categories = [],
	isMobile = false,
	onLinkClick
}: IMenu) {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const capitalizeFirstLetter = (str: string) => {
		if (!str) return ''
		return str.charAt(0).toUpperCase() + str.slice(1)
	}

	if (isMobile) {
		return (
			<nav className='flex flex-col space-y-4 py-4'>
				<Link
					href='/'
					className='text-base lg:text-body text-neutral-900 font-medium hover:text-neutral-500'
					onClick={onLinkClick}
				>
					Home
				</Link>
				<div className='flex flex-col space-y-2'>
					<span className='text-base lg:text-body text-neutral-900 font-medium'>
						Categories
					</span>
					{categories.map(elem => (
						<Link
							key={elem.name}
							href={`/products?category=${elem.name.toLowerCase()}`}
							className='ml-4 text-sm lg:text-body text-neutral-600 hover:text-neutral-400'
							onClick={onLinkClick}
						>
							{capitalizeFirstLetter(elem.name)}
						</Link>
					))}
				</div>
				<Link
					href='#'
					className='text-base lg:text-body text-neutral-900 font-medium hover:text-neutral-500'
					onClick={onLinkClick}
				>
					About
				</Link>
				<Link
					href='#'
					className='text-base lg:text-body text-neutral-900 font-medium hover:text-neutral-500'
					onClick={onLinkClick}
				>
					Contact
				</Link>
			</nav>
		)
	}

	return (
		<ul className='flex space-x-8 items-baseline'>
			<li>
				<Link
					href='/'
					className='text-sm lg:text-body text-neutral-500 font-medium hover:text-neutral-300'
				>
					Home
				</Link>
			</li>
			<li>
				<DropdownMenu
					onOpenChange={() => setIsOpen(!isOpen)}
					modal={false}
				>
					<DropdownMenuTrigger className='cursor-pointer'>
						<span className='flex text-sm lg:text-body text-neutral-500 font-medium hover:text-neutral-300'>
							Categories{' '}
							{isOpen ? (
								<ChevronUp className='w-5 ml-1' />
							) : (
								<ChevronDown className='w-5 ml-1' />
							)}
						</span>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						{categories.map(elem => {
							return (
								<DropdownMenuItem key={elem.name}>
									<Link
										href={`/products?category=${elem.name.toLowerCase()}`}
										className='text-sm lg:text-body text-neutral-500 font-medium hover:text-neutral-300'
									>
										{capitalizeFirstLetter(elem.name)}
									</Link>
								</DropdownMenuItem>
							)
						})}
					</DropdownMenuContent>
				</DropdownMenu>
			</li>
			<li>
				<Link
					href='#'
					className='text-sm lg:text-body text-neutral-500 font-medium hover:text-neutral-300'
				>
					About
				</Link>
			</li>
			<li>
				<Link
					href='#'
					className='text-sm lg:text-body text-neutral-500 font-medium hover:text-neutral-300'
				>
					Contact
				</Link>
			</li>
		</ul>
	)
}
