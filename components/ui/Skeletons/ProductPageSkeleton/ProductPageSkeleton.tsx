import PageContainer from '@/components/layout/PageContainer/PageContainer'
import ProductCarouselSkeleton from '@/components/ui/Skeletons/ProductCarouselSkeleton/ProductCarouselSkeleton'
import ProductDescriptionSkeleton from '@/components/ui/Skeletons/ProductDescriptionSkeleton/ProductDescriptionSkeleton'
import ProductDetailSkeleton from '@/components/ui/Skeletons/ProductDetailSkeleton/ProductDetailSkeleton'
import SimilarProductsSkeleton from '@/components/ui/Skeletons/SimilarProductsSkeleton/SimilarProductsSkeleton'
import { Skeleton } from '../Skeleton/Skeleton'

export default function ProductPageSkeleton() {
	return (
		<PageContainer className='relative border-t border-neutral-light-100'>
			<div className='pt-5'>
				<Skeleton className='h-3.5 lg:h-4 w-48 lg:w-64 rounded' />
				<div className='mt-4 lg:mt-6 flex flex-col lg:flex-row items-start gap-6 lg:gap-10 xl:gap-20'>
					<ProductCarouselSkeleton />
					<ProductDetailSkeleton />
				</div>
				<ProductDescriptionSkeleton />
				<SimilarProductsSkeleton />
			</div>
		</PageContainer>
	)
}
