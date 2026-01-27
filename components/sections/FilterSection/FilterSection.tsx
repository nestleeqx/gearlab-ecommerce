// components/ui/FilterSection/FilterSection.tsx
'use client'

import { Button } from '@/components/ui/Button/Button'
import { Checkbox } from '@/components/ui/Checkbox/Checkbox'
import { cn } from '@/lib/utils'

interface FilterSectionProps {
	title: string
	options: Array<{ label: string; value: string }>
	selected: string[]
	type: 'checkbox' | 'color' | 'size'
	onChange: (values: string[]) => void
}

export default function FilterSection({
	title,
	options,
	selected,
	type,
	onChange
}: FilterSectionProps) {
	const handleToggle = (value: string) => {
		const newValues = selected.includes(value)
			? selected.filter(v => v !== value)
			: [...selected, value]
		onChange(newValues)
	}

	if (options.length === 0) return null

	return (
		<div>
			<h3 className='font-medium text-neutral-900 mb-4'>{title}</h3>
			{type === 'checkbox' && (
				<div className='space-y-3'>
					{options.map(option => {
						const isSelected = selected.includes(option.value)
						return (
							<label
								key={option.value}
								className='flex items-center gap-3 cursor-pointer group'
							>
								<Checkbox
									checked={isSelected}
									onCheckedChange={() =>
										handleToggle(option.value)
									}
									className='w-4 h-4'
								/>
								<span
									className={cn(
										'text-body',
										isSelected
											? 'text-neutral-900 font-medium'
											: 'text-neutral-600',
										'group-hover:text-neutral-900'
									)}
								>
									{option.label}
								</span>
							</label>
						)
					})}
				</div>
			)}
			{type === 'color' && (
				<div className='flex flex-wrap gap-2'>
					{options.map(option => {
						const isSelected = selected.includes(option.value)
						const colorClass = getColorClass(option.value)

						return (
							<button
								key={option.value}
								onClick={() => handleToggle(option.value)}
								className={cn(
									'w-8 h-8 rounded-full border-2 transition-all',
									colorClass,
									isSelected
										? 'border-neutral-900 scale-110'
										: 'border-transparent hover:border-neutral-300'
								)}
								title={option.label}
								aria-label={`Color: ${option.label}`}
							/>
						)
					})}
				</div>
			)}
			{type === 'size' && (
				<div className='flex flex-wrap gap-2'>
					{options.map(option => {
						const isSelected = selected.includes(option.value)
						return (
							<Button
								variant='outline'
								key={option.value}
								onClick={() => handleToggle(option.value)}
								className={cn(
									'w-9 h-9 rounded-sm flex items-center justify-center',
									'transition-colors hover:border-neutral-400',
									isSelected
										? 'border-neutral-900 bg-neutral-50 font-medium'
										: 'border-neutral-200'
								)}
								aria-label={`Size: ${option.label}`}
							>
								{option.label}
							</Button>
						)
					})}
				</div>
			)}
		</div>
	)
}

function getColorClass(colorName: string): string {
	const colorMap: Record<string, string> = {
		blue: 'bg-primary-800',
		red: 'bg-semantic-red-800',
		green: 'bg-semantic-green-800',
		yellow: 'bg-semantic-yellow-800',
		black: 'bg-neutral-900',
		white: 'bg-white border border-neutral-300',
		gray: 'bg-neutral-400',
		purple: 'bg-purple-400',
		pink: 'bg-pink-400',
		orange: 'bg-orange-400'
	}

	const key = colorName.toLowerCase().split(' ')[0]
	return colorMap[key] || 'bg-neutral-200'
}
