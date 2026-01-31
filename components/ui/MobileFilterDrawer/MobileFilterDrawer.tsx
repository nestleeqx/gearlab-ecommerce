'use client'
import FilterSection from '@/components/sections/FilterSection/FilterSection'
import { Button } from '@/components/ui/Button/Button'
import PriceFilter from '@/components/ui/PriceFilter/PriceFilter'
import { SlidersHorizontal, X } from 'lucide-react'
import { useEffect, useState } from 'react'

interface FilterConfigItem {
	title: string
	key: 'category' | 'color' | 'size'
	type: 'checkbox' | 'color' | 'size'
	options: { label: string; value: string; tailwindClass?: string }[]
}

interface MobileFilterDrawerProps {
	filterConfig: FilterConfigItem[]
	params: {
		category: string[]
		color: string[]
		size: string[]
		price_min: string
		price_max: string
		page: string
	}
	handleFilterChange: (
		key: 'category' | 'color' | 'size'
	) => (values: string[]) => void
}

export default function MobileFilterDrawer({
	filterConfig,
	params,
	handleFilterChange
}: MobileFilterDrawerProps) {
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'unset'
		}
		return () => {
			document.body.style.overflow = 'unset'
		}
	}, [isOpen])

	return (
		<>
			<Button
				variant='outline'
				onClick={() => setIsOpen(true)}
				className='w-full mb-4 gap-2'
			>
				<SlidersHorizontal className='w-4 h-4' />
				Filters
			</Button>

			{isOpen && (
				<div
					className='fixed inset-0 bg-black/50 z-40'
					onClick={() => setIsOpen(false)}
				/>
			)}

			<div
				className={`fixed inset-y-0 left-0 z-50 w-full max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
					isOpen ? 'translate-x-0' : '-translate-x-full'
				}`}
			>
				<div className='flex justify-between items-center p-4 border-b border-neutral-100'>
					<h2 className='text-lg font-semibold text-neutral-900'>
						Filters
					</h2>
					<button
						onClick={() => setIsOpen(false)}
						className='p-2 hover:bg-neutral-50 rounded-full transition-colors'
						aria-label='Close filters'
					>
						<X className='h-5 w-5 text-neutral-500' />
					</button>
				</div>

				<div className='overflow-y-auto h-[calc(100%-8rem)] p-6 space-y-8'>
					{filterConfig.map(section => (
						<FilterSection
							key={section.key}
							title={section.title}
							options={section.options}
							type={section.type}
							selected={params[section.key] || []}
							onChange={handleFilterChange(section.key)}
						/>
					))}
					<PriceFilter />
				</div>

				<div className='absolute bottom-0 left-0 right-0 p-4 border-t border-neutral-100 bg-white'>
					<Button
						onClick={() => setIsOpen(false)}
						className='w-full'
					>
						Show Results
					</Button>
				</div>
			</div>
		</>
	)
}
