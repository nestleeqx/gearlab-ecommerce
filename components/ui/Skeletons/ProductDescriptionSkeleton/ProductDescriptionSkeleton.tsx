import { Skeleton } from '../Skeleton/Skeleton'

export default function ProductDescriptionSkeleton() {
	return (
		<div className='mt-16 lg:mt-44 flex flex-col lg:flex-row gap-6 lg:gap-12'>
			<div className='flex lg:flex-col h-fit w-full lg:w-48 gap-2 lg:gap-1'>
				<Skeleton className='h-10 lg:h-12 flex-1 lg:flex-none rounded' />
				<Skeleton className='h-10 lg:h-12 flex-1 lg:flex-none rounded' />
			</div>
			<div className='flex-1 space-y-3 lg:space-y-4'>
				<Skeleton className='h-5 lg:h-6 w-24 lg:w-32 rounded' />
				<Skeleton className='h-3.5 lg:h-4 w-full rounded' />
				<Skeleton className='h-3.5 lg:h-4 w-full rounded' />
				<Skeleton className='h-3.5 lg:h-4 w-2/3 lg:w-3/4 rounded' />
				<div className='mt-6 lg:mt-8 space-y-1.5 lg:space-y-2'>
					{Array.from({ length: 4 }).map((_, i) => (
						<div
							key={i}
							className='flex items-center gap-2'
						>
							<Skeleton className='h-1 lg:h-1.5 w-1 lg:w-1.5 rounded-full' />
							<Skeleton className='h-3.5 lg:h-4 flex-1 rounded' />
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
