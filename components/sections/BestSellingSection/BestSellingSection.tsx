import PageContainer from '@/components/layout/PageContainer/PageContainer'
import ProductCard from '@/components/ui/ProductCard/ProductCard'
import BestSellersSkeleton from '@/components/ui/Skeletons/BestSellersSkeleton/BestSellersSkeleton'
import Title from '@/components/ui/Title/Title'
import { iProduct } from '@/services/products'

interface BestSellingSectionProps {
	bestSellers: iProduct[]
}

export default function BestSellingSection({
	bestSellers
}: BestSellingSectionProps) {
	if (!bestSellers || bestSellers.length === 0) {
		return <BestSellersSkeleton />
	}

	return (
		<PageContainer className='mt-42'>
			<div className='text-center'>
				<p className='text-label text-neutral-300'>SHOP NOW</p>
				<Title>Best Selling</Title>
			</div>
			<div className='flex justify-center items-center mt-20 space-x-10'>
				{bestSellers.map(elem => {
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
		</PageContainer>
	)
}
