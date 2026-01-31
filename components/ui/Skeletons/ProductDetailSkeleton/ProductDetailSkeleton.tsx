import { Skeleton } from '../Skeleton/Skeleton'

export default function ProductDetailSkeleton() {
	return (
		<div className='w-full lg:flex-1 mt-4 lg:mt-0'>
			<Skeleton className='h-6 lg:h-8 w-3/4 rounded' />
			<div className='mt-2 lg:mt-3 flex flex-wrap gap-2 lg:gap-3'>
				<Skeleton className='h-5 lg:h-6 w-28 lg:w-32 rounded-full' />
				<Skeleton className='h-5 lg:h-6 w-16 lg:w-20 rounded-full' />
			</div>
			<Skeleton className='mt-4 lg:mt-6 h-6 lg:h-7 w-20 lg:w-24 rounded' />
			<div className='mt-6 lg:mt-8'>
				<Skeleton className='mb-2 h-3.5 lg:h-4 w-24 lg:w-32 rounded' />
				<div className='flex gap-2'>
					{Array.from({ length: 4 }).map((_, i) => (
						<Skeleton
							key={i}
							className='h-8 w-8 lg:h-10 lg:w-10 rounded-full'
						/>
					))}
				</div>
			</div>
			<div className='mt-3 lg:mt-4'>
				<Skeleton className='mb-2 h-3.5 lg:h-4 w-20 lg:w-24 rounded' />
				<div className='flex gap-2'>
					{Array.from({ length: 4 }).map((_, i) => (
						<Skeleton
							key={i}
							className='h-8 lg:h-10 w-12 lg:w-16 rounded'
						/>
					))}
				</div>
			</div>
			<div className='mt-6 lg:mt-8'>
				<Skeleton className='mb-2 h-3.5 lg:h-4 w-16 lg:w-20 rounded' />
				<Skeleton className='h-10 lg:h-12 w-28 lg:w-32 rounded' />
			</div>
			<div className='mt-8 lg:mt-10'>
				<div className='flex items-center gap-3 lg:gap-4'>
					<Skeleton className='h-10 lg:h-12 w-full sm:w-32 lg:w-40 rounded' />
					<Skeleton className='h-10 lg:h-12 w-10 lg:w-12 rounded' />
				</div>
				<Skeleton className='mt-2 lg:mt-3 h-3.5 lg:h-4 w-40 lg:w-56 rounded' />
			</div>
		</div>
	)
}
