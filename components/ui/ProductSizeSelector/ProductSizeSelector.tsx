'use client'
import { Size } from '@/services/products'
import { useState } from 'react'
import SizeSelector from '../SizeSelector/SizeSelector'

interface iProductSizeSelector {
	availableSizes: Size[]
	onSizeSelect?: (size: Size) => void
	defaultSize?: Size
}

export default function ProductSizeSelector({
	availableSizes,
	onSizeSelect,
	defaultSize
}: iProductSizeSelector) {
	const [selectedSize, setSelectedSize] = useState<Size[]>(
		defaultSize ? [defaultSize] : []
	)

	const handleSizeChange = (sizes: Size[]) => {
		setSelectedSize(sizes)
		if (onSizeSelect && sizes.length > 0) {
			onSizeSelect(sizes[0])
		}
	}

	return (
		<SizeSelector
			selectedSizes={selectedSize}
			onSizeChange={handleSizeChange}
			multiple={false}
			availableSizes={availableSizes}
		/>
	)
}
