import ProductCardSkeleton from '../ProductCardSkeleton/ProductCardSkeleton'
import { Skeleton } from '../Skeleton/Skeleton'

export default function CatalogSkeleton() {
	return (
		<div>
			<div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 mb-6'>
				<Skeleton className='h-5 w-48' />
				<Skeleton className='h-8 w-29' />
			</div>
			<div className='mt-4 grid gap-4 gap-y-7 sm:gap-y-0 sm:grid-cols-1 md:gap-y-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 justify-items-center'>
				{Array.from({ length: 8 }).map((_, index) => (
					<ProductCardSkeleton key={index} />
				))}
			</div>
			<div className='mt-16 flex justify-center'>
				<div className='flex gap-2 rounded-sm border border-neutral-100 p-2'>
					<Skeleton className='h-6 w-10' />
					<Skeleton className='h-6 w-6' />
					<Skeleton className='h-6 w-6' />
					<Skeleton className='h-6 w-6' />
					<Skeleton className='h-6 w-10' />
				</div>
			</div>
		</div>
	)
}
