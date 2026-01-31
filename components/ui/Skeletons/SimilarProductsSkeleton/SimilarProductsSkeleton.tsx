import PageContainer from '@/components/layout/PageContainer/PageContainer'
import Title from '@/components/ui/Title/Title'
import ProductCardSkeleton from '../ProductCardSkeleton/ProductCardSkeleton'

export default function SimilarProductsSkeleton() {
	return (
		<PageContainer className='mt-16 lg:mt-42'>
			<div className='text-center'>
				<Title className='text-2xl font-bold'>
					You might also like
				</Title>
				<p className='text-xs lg:text-label text-neutral-300 mt-2'>
					SIMILAR PRODUCTS
				</p>
			</div>
			<div className='hidden lg:flex justify-center items-center mt-12 lg:mt-20 gap-6 xl:gap-10'>
				{Array.from({ length: 4 }).map((_, index) => (
					<ProductCardSkeleton key={index} />
				))}
			</div>
			<div className='lg:hidden mt-8 overflow-x-auto scrollbar-hide -mx-4'>
				<div className='flex gap-4 px-4 pb-4'>
					{Array.from({ length: 4 }).map((_, index) => (
						<div
							key={index}
							className='shrink-0 w-64 sm:w-70'
						>
							<ProductCardSkeleton />
						</div>
					))}
				</div>
			</div>
		</PageContainer>
	)
}
