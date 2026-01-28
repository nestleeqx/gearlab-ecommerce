'use client'

import ProductCard from '@/components/ui/ProductCard/ProductCard'
import { Skeleton } from '@/components/ui/Skeletons/Skeleton/Skeleton'
import { iProduct } from '@/services/products'

interface iProductsGrid {
	products: iProduct[]
	loading?: boolean
}

export default function ProductsGrid({
	products,
	loading = false
}: iProductsGrid) {
	if (loading) {
		return (
			<div className='grid grid-cols-4 gap-4'>
				{Array.from({ length: 8 }).map((_, index) => (
					<Skeleton
						key={index}
						className='h-80'
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
		<div className='grid grid-cols-4 gap-4'>
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
