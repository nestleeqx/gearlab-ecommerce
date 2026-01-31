import PageContainer from '@/components/layout/PageContainer/PageContainer'
import ProductDescription from '@/components/sections/ProductDescription/ProductDescription'
import ProductDetail from '@/components/sections/ProductDetail/ProductDetail'
import SimilarProducts from '@/components/sections/SimilarProducts/SimilarProducts'
import BreadcrumbComponent from '@/components/ui/BreadcrumbComponent/BreadcrumbComponent'
import {
	Carousel,
	CarouselContent,
	CarouselDots,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/Carousel/Carousel'
import {
	getAllProductSlugs,
	getProductsBySlug,
	iProduct
} from '@/services/products'
import { getReviewsByProductId } from '@/services/reviews'
import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export const revalidate = 60

export async function generateMetadata({
	params
}: {
	params: Promise<{ slug: string }>
}): Promise<Metadata> {
	const { slug } = await params
	const product = await getProductsBySlug(slug)

	if (!product) {
		return {
			title: 'Product Not Found - GearLab',
			description: 'The product you are looking for does not exist.'
		}
	}

	return {
		title: `${product.title} - GearLab`,
		description: product.description.substring(0, 160)
	}
}

export async function generateStaticParams() {
	const slugs = getAllProductSlugs()

	return slugs.map(slug => ({ slug }))
}

export default async function ProductPage({
	params
}: {
	params: Promise<{ slug: string }>
}) {
	const { slug } = await params
	const product: iProduct | null = await getProductsBySlug(slug)

	if (!product) {
		return notFound()
	}

	const reviews = await getReviewsByProductId(product.id)

	return (
		<PageContainer className='relative border-t border-neutral-light-100'>
			<div className='pt-5'>
				<BreadcrumbComponent />
				<div className='mt-4 flex flex-col lg:flex-row items-start gap-6 lg:gap-10 xl:gap-20'>
					<div className='w-full lg:w-150 shrink-0'>
						<Carousel
							opts={{
								loop: true,
								align: 'center'
							}}
							className='w-full'
						>
							<div className='relative'>
								<CarouselContent>
									{product &&
										product.images.map((image, index) => {
											return (
												<CarouselItem
													key={index}
													className='pl-0 basis-full'
												>
													<div className='relative aspect-square overflow-hidden rounded-md bg-neutral-50'>
														<Image
															src={image}
															alt={`${product.title} - Image ${index + 1}`}
															fill
															sizes='(max-width: 768px) 100vw, 600px'
															className='object-cover'
															quality={90}
															priority={
																index === 0
															}
														/>
													</div>
												</CarouselItem>
											)
										})}
								</CarouselContent>
								<CarouselPrevious className='left-2 lg:left-4' />
								<CarouselNext className='right-2 lg:right-4' />
								<CarouselDots className='absolute bottom-4 left-1/2 -translate-x-1/2' />
							</div>
						</Carousel>
					</div>
					{product && <ProductDetail product={product} />}
				</div>
				{product && (
					<>
						<div>
							<ProductDescription
								details={product.description}
								features={product.features}
								rating={product.rating}
								reviewCount={product.reviewCount}
								reviews={reviews}
								productId={product.id}
							/>
						</div>
						<SimilarProducts product={product} />
					</>
				)}
			</div>
		</PageContainer>
	)
}
