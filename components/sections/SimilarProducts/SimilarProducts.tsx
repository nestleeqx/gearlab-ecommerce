'use client'
import PageContainer from '@/components/layout/PageContainer/PageContainer'
import ProductCard from '@/components/ui/ProductCard/ProductCard'
import SimilarProductsSkeleton from '@/components/ui/Skeletons/SimilarProductsSkeleton/SimilarProductsSkeleton'
import Title from '@/components/ui/Title/Title'
import { getSimilarProducts, iProduct } from '@/services/products'
import { useEffect, useState } from 'react'

export default function SimilarProducts({ product }: { product: iProduct }) {
	const [similarProducts, setSimilarProducts] = useState<iProduct[]>([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		getSimilarProducts(product, 4)
			.then(products => {
				setSimilarProducts(products)
			})
			.finally(() => {
				setLoading(false)
			})
	}, [product])

	if (loading) {
		return <SimilarProductsSkeleton />
	}

	if (!similarProducts || similarProducts.length === 0) {
		return null
	}

	return (
		<PageContainer className='mt-16 lg:mt-42'>
			<div className='text-center'>
				<Title className='text-2xl lg:text-3xl'>
					You might also like
				</Title>
				<p className='text-label text-neutral-300 mt-2'>
					SIMILAR PRODUCTS
				</p>
			</div>
			<div className='hidden lg:flex justify-center items-center mt-12 lg:mt-20 gap-6 xl:gap-10'>
				{similarProducts.map(elem => {
					return (
						<ProductCard
							key={elem.id}
							id={elem.id}
							slug={elem.slug}
							images={elem.images}
							title={elem.title}
							status={elem.status}
							price={elem.price}
							color={elem.color[0]}
							size={elem.size}
						/>
					)
				})}
			</div>
			<div className='lg:hidden mt-8 overflow-x-auto scrollbar-hide -mx-4'>
				<div className='flex gap-4 px-4 pb-4'>
					{similarProducts.map(elem => {
						return (
							<div
								key={elem.id}
								className='shrink-0 w-64 sm:w-70'
							>
								<ProductCard
									id={elem.id}
									slug={elem.slug}
									images={elem.images}
									title={elem.title}
									status={elem.status}
									price={elem.price}
									color={elem.color[0]}
									size={elem.size}
								/>
							</div>
						)
					})}
				</div>
			</div>
		</PageContainer>
	)
}
