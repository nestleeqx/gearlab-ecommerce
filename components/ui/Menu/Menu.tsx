'use client'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/DropdownMenu/DropdownMenu'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const CATEGORIES = [
	{
		value: 'perfume',
		label: 'Perfume'
	},
	{
		value: 'trousers',
		label: 'Trousers'
	},
	{
		value: 'shoe',
		label: 'Shoe'
	},
	{
		value: 'handbag',
		label: 'Handbag'
	},
	{
		value: 'hat',
		label: 'Hat'
	},
	{
		value: 'thermos',
		label: 'Thermos'
	}
]

export default function Menu() {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	return (
		<ul className='flex space-x-8 items-baseline'>
			<li>
				<Link
					href='/'
					className='text-body text-neutral-500 font-medium'
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
						<span className='flex text-body text-neutral-500 font-medium'>
							Categories{' '}
							{isOpen ? (
								<ChevronUp className='w-5 ml-1' />
							) : (
								<ChevronDown className='w-5 ml-1' />
							)}
						</span>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						{CATEGORIES.map(elem => {
							return (
								<DropdownMenuItem key={elem.value}>
									<Link
										href={`/products?cat=${elem.value}`}
										className='text-body text-neutral-500 font-medium'
									>
										{elem.label}
									</Link>
								</DropdownMenuItem>
							)
						})}
					</DropdownMenuContent>
				</DropdownMenu>
			</li>
			<li>
				<Link
					href='/about'
					className='text-body text-neutral-500 font-medium'
				>
					About
				</Link>
			</li>
			<li>
				<Link
					href='/contacts'
					className='text-body text-neutral-500 font-medium'
				>
					Contact
				</Link>
			</li>
		</ul>
	)
}
