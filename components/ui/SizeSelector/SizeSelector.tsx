'use client'

import { cn } from '@/lib/utils'
import { getSizeOptions, Size } from '@/services/products'
import { ToggleGroup, ToggleGroupItem } from '../ToggleGroup/ToggleGroup'

interface iSizeSelector {
	selectedSizes: Size[]
	onSizeChange: (sizes: Size[]) => void
	multiple?: boolean
	availableSizes?: Size[]
}

export default function SizeSelector({
	selectedSizes,
	onSizeChange,
	multiple = true,
	availableSizes
}: iSizeSelector) {
	const sizeOptions =
		availableSizes !== undefined ? availableSizes : getSizeOptions()

	const handleMultipleChange = (values: string[]) => {
		onSizeChange(values as Size[])
	}

	const handleSingleChange = (value: string) => {
		onSizeChange(value ? [value as Size] : [])
	}

	const renderItems = () =>
		sizeOptions.map(elem => {
			const isSelected = selectedSizes.includes(elem)
			return (
				<ToggleGroupItem
					key={elem}
					value={elem}
					variant='outline'
					className={cn(
						'rounded-sm border hover:border hover:border-1.7 hover:border-neutral-900',
						{
							'border border-1.7 border-neutral-900': isSelected
						}
					)}
					aria-label={`Size ${elem}`}
				>
					{elem.toUpperCase()}
				</ToggleGroupItem>
			)
		})

	return (
		<div>
			{multiple ? (
				<ToggleGroup
					type='multiple'
					className='space-x-2.5'
					value={selectedSizes}
					onValueChange={handleMultipleChange}
				>
					{renderItems()}
				</ToggleGroup>
			) : (
				<ToggleGroup
					type='single'
					className='space-x-2.5'
					value={selectedSizes[0]}
					onValueChange={handleSingleChange}
				>
					{renderItems()}
				</ToggleGroup>
			)}
		</div>
	)
}
