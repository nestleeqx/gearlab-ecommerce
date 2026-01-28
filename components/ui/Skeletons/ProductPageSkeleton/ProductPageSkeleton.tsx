import PageContainer from '@/components/layout/PageContainer/PageContainer'
import ProductCarouselSkeleton from '@/components/ui/Skeletons/ProductCarouselSkeleton/ProductCarouselSkeleton'
import ProductDescriptionSkeleton from '@/components/ui/Skeletons/ProductDescriptionSkeleton/ProductDescriptionSkeleton'
import ProductDetailSkeleton from '@/components/ui/Skeletons/ProductDetailSkeleton/ProductDetailSkeleton'
import SimilarProductsSkeleton from '@/components/ui/Skeletons/SimilarProductsSkeleton/SimilarProductsSkeleton'
import { Skeleton } from '../Skeleton/Skeleton'

export default function ProductPageSkeleton() {
	return (
		<PageContainer className='relative after:absolute after:w-full after:h-px after:top-0 after:bg-neutral-light-100'>
			<div className='pt-5'>
				<Skeleton className='h-4 w-64 rounded' />
				<div className='mt-4 flex items-start gap-20'>
					<ProductCarouselSkeleton />
					<ProductDetailSkeleton />
				</div>
				<ProductDescriptionSkeleton />
				<SimilarProductsSkeleton />
			</div>
		</PageContainer>
	)
}
