import PageContainer from '@/components/layout/PageContainer/PageContainer'
import Title from '@/components/ui/Title/Title'
import ProductCardSkeleton from '../ProductCardSkeleton/ProductCardSkeleton'

export default function BestSellersSkeleton() {
	return (
		<PageContainer className='mt-38'>
			<div className='text-center'>
				<p className='text-label text-neutral-300'>SHOP NOW</p>
				<Title>Best Selling</Title>
			</div>
			<div className='mt-20 flex space-x-10 justify-center'>
				{Array.from({ length: 4 }).map((_, index) => (
					<ProductCardSkeleton key={index} />
				))}
			</div>
		</PageContainer>
	)
}
