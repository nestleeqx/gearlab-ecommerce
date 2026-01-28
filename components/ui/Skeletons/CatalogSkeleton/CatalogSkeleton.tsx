import ProductCardSkeleton from '../ProductCardSkeleton/ProductCardSkeleton'

export default function CatalogSkeleton() {
	return (
		<div>
			<div className='flex justify-between items-center animate-pulse'>
				<div className='h-5 w-48 bg-neutral-100 rounded'></div>
				<div className='h-8 w-29 bg-neutral-100 rounded'></div>
			</div>
			<div className='mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6 xl:grid-cols-4'>
				{Array.from({ length: 8 }).map((_, index) => (
					<ProductCardSkeleton key={index} />
				))}
			</div>
			<div className='mt-16 flex justify-center animate-pulse'>
				<div className='flex gap-2 rounded-sm border border-neutral-100 p-2'>
					<div className='h-6 w-10 bg-neutral-100 rounded'></div>
					<div className='h-6 w-6 bg-neutral-100 rounded'></div>
					<div className='h-6 w-6 bg-neutral-100 rounded'></div>
					<div className='h-6 w-6 bg-neutral-100 rounded'></div>
					<div className='h-6 w-10 bg-neutral-100 rounded'></div>
				</div>
			</div>
		</div>
	)
}
