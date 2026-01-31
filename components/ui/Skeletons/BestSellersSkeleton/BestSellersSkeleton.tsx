import PageContainer from '@/components/layout/PageContainer/PageContainer'
import Title from '@/components/ui/Title/Title'
import ProductCardSkeleton from '../ProductCardSkeleton/ProductCardSkeleton'

export default function BestSellersSkeleton() {
	return (
		<PageContainer className='mt-16 lg:mt-38'>
			<div className='text-center'>
				<p className='text-label text-neutral-300'>SHOP NOW</p>
				<Title>Best Selling</Title>
			</div>
			<div className='mt-12 lg:mt-20 hidden lg:flex space-x-10 justify-center'>
				{Array.from({ length: 4 }).map((_, index) => (
					<ProductCardSkeleton key={index} />
				))}
			</div>
			<div className='mt-8 lg:hidden overflow-x-auto scrollbar-hide -mx-4'>
				<div className='flex gap-4 px-4 pb-8'>
					{Array.from({ length: 4 }).map((_, index) => (
						<div
							key={index}
							className='shrink-0 w-70'
						>
							<ProductCardSkeleton />
						</div>
					))}
				</div>
			</div>
		</PageContainer>
	)
}
