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
			<div className='grid gap-4 gap-y-7 sm:gap-y-0 sm:grid-cols-1 md:gap-y-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4'>
				{Array.from({ length: 8 }).map((_, index) => (
					<Skeleton
						key={index}
						className='h-80 lg:h-96'
					/>
				))}
			</div>
		)
	}

	if (products.length === 0) {
		return (
			<div className='w-full min-h-[50vh] lg:min-h-[60vh] flex items-center justify-center'>
				<div className='text-center'>
					<h3 className='text-heading-h4 font-medium text-neutral-900 mb-2'>
						No products found
					</h3>
					<p className='text-body text-neutral-600'>
						Try adjusting your filters or search terms
					</p>
				</div>
			</div>
		)
	}

	return (
		<div className='grid gap-4 gap-y-7 sm:gap-y-0 sm:grid-cols-1 md:gap-y-4 md:grid-cols-3 lg:grid-cols-3 lg:gap-y-7 xl:grid-cols-4 justify-items-center'>
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
