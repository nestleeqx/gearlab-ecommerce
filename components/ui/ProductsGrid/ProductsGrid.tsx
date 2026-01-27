// app/products/components/ProductsGrid.tsx
'use client'

import ProductCard from '@/components/ui/ProductCard/ProductCard'
import { iProduct } from '@/services/products'

interface ProductsGridProps {
	products: iProduct[]
	loading?: boolean
}

export default function ProductsGrid({
	products,
	loading = false
}: ProductsGridProps) {
	if (loading) {
		return (
			<div className='grid grid-cols-4 gap-6'>
				{Array.from({ length: 8 }).map((_, index) => (
					<div
						key={index}
						className='h-80 bg-neutral-100 animate-pulse rounded'
					/>
				))}
			</div>
		)
	}

	if (products.length === 0) {
		return (
			<div className='text-center py-12'>
				<h3 className='text-lg font-medium text-neutral-900 mb-2'>
					No products found
				</h3>
				<p className='text-neutral-600'>
					Try adjusting your filters or search terms
				</p>
			</div>
		)
	}

	return (
		<div className='grid grid-cols-4 gap-6'>
			{products.map(product => (
				<ProductCard
					key={product.id}
					id={product.id}
					slug={product.slug}
					images={product.images}
					title={product.title}
					status={product.status}
					price={product.price}
					color={product.color[0]}
					size={product.size}
				/>
			))}
		</div>
	)
}
