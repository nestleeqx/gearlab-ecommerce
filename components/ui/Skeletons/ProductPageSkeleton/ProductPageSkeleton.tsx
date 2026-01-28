import PageContainer from '@/components/layout/PageContainer/PageContainer'
import ProductCarouselSkeleton from '@/components/ui/Skeletons/ProductCarouselSkeleton/ProductCarouselSkeleton'
import ProductDescriptionSkeleton from '@/components/ui/Skeletons/ProductDescriptionSkeleton/ProductDescriptionSkeleton'
import ProductDetailSkeleton from '@/components/ui/Skeletons/ProductDetailSkeleton/ProductDetailSkeleton'
import SimilarProductsSkeleton from '@/components/ui/Skeletons/SimilarProductsSkeleton/SimilarProductsSkeleton'

export default function ProductPageSkeleton() {
	return (
		<PageContainer className='relative after:absolute after:w-full after:h-px after:top-0 after:bg-neutral-light-100'>
			<div className='pt-5'>
				{/* Breadcrumb skeleton */}
				<div className='h-4 w-64 rounded bg-neutral-100 animate-pulse' />

				{/* Main product section */}
				<div className='mt-4 flex items-start gap-20'>
					<ProductCarouselSkeleton />
					<ProductDetailSkeleton />
				</div>

				{/* Description and tabs */}
				<ProductDescriptionSkeleton />

				{/* Similar products */}
				<SimilarProductsSkeleton />
			</div>
		</PageContainer>
	)
}
