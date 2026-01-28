// app/products/components/FiltersSidebar.tsx
'use client'

import FilterSection from '@/components/sections/FilterSection/FilterSection'
import PriceFilter from '@/components/ui/PriceFilter/PriceFilter'
import { useQueryParams } from '@/hooks/useQueryParams'

interface FiltersSidebarProps {
	availableFilters: {
		availableColors: string[]
		availableSizes: string[]
		availableCategories: string[]
	}
}

export default function FiltersSidebar({
	availableFilters
}: FiltersSidebarProps) {
	const { params, updateQueryParams } = useQueryParams()

	const filterConfig = [
		{
			title: 'Categories',
			key: 'category',
			type: 'checkbox' as const,
			options: availableFilters.availableCategories.map(cat => ({
				label:
					cat.charAt(0).toUpperCase() +
					cat.slice(1).replace('-', ' '),
				value: cat
			}))
		},
		{
			title: 'Color',
			key: 'color',
			type: 'color' as const,
			options: availableFilters.availableColors.map(color => ({
				label: color,
				value: color
			}))
		},
		{
			title: 'Size',
			key: 'size',
			type: 'size' as const,
			options: availableFilters.availableSizes.map(size => ({
				label: size,
				value: size
			}))
		}
	]

	const handleFilterChange = (key: string) => (values: string[]) => {
		if (values.length > 0) {
			updateQueryParams({ [key]: values })
		} else {
			updateQueryParams({ [key]: null })
		}
	}

	return (
		<div className='border border-neutral-100 rounded-md w-64 min-w-64 h-max p-6 space-y-8'>
			{filterConfig.map(section => (
				<FilterSection
					key={section.key}
					title={section.title}
					options={section.options}
					type={section.type}
					selected={
						(params[
							section.key as keyof typeof params
						] as string[]) || []
					}
					onChange={handleFilterChange(section.key)}
				/>
			))}
			<PriceFilter />
		</div>
	)
}
