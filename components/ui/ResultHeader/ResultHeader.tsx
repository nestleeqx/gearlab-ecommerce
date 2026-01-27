// app/products/components/ResultsHeader.tsx
'use client'

import { SortOption } from '@/data/sort.data'
import SortSelect from '@/components/ui/SortSelect/SortSelect'

interface ResultsHeaderProps {
	showingFrom: number
	showingTo: number
	total: number
	sortBy: SortOption
	onSortChange: (value: SortOption) => void
}

export default function ResultsHeader({
	showingFrom,
	showingTo,
	total,
	sortBy,
	onSortChange
}: ResultsHeaderProps) {
	return (
		<div className='flex justify-between items-center mb-6'>
			<div>
				<span className='text-sm text-neutral-600'>
					Showing {showingFrom}-{showingTo} of {total} Results.
				</span>
			</div>
			<SortSelect
				sortBy={sortBy}
				handleSortChange={value => onSortChange(value as SortOption)}
			/>
		</div>
	)
}
