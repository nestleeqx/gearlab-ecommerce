import PageContainer from '@/components/layout/PageContainer/PageContainer'
import Title from '@/components/ui/Title/Title'
import ProductCardSkeleton from '../ProductCardSkeleton/ProductCardSkeleton'

export default function SimilarProductsSkeleton() {
	return (
		<PageContainer className='mt-42'>
			<div className='text-center'>
				<Title>You might also like</Title>
				<p className='text-label text-neutral-300'>SIMILAR PRODUCTS</p>
			</div>
			<div className='flex justify-center items-center mt-20 gap-10'>
				{Array.from({ length: 4 }).map((_, index) => (
					<ProductCardSkeleton key={index} />
				))}
			</div>
		</PageContainer>
	)
}
