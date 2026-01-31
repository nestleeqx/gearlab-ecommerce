import { Skeleton } from '../Skeleton/Skeleton'

export default function OrderCardSkeleton() {
	return (
		<div className='flex flex-col sm:flex-row sm:items-center gap-4 lg:gap-6 rounded-lg border border-neutral-light-100 p-4 lg:p-6'>
			<Skeleton className='h-20 w-20 shrink-0 rounded-md' />
			<div className='flex-1 min-w-0 space-y-2 lg:space-y-3'>
				<Skeleton className='h-4 lg:h-5 w-full sm:w-48 rounded' />
				<Skeleton className='h-3.5 lg:h-4 w-32 lg:w-40 rounded' />
				<div className='space-y-1 lg:space-y-1.5'>
					<div className='flex flex-wrap items-center gap-1 lg:gap-2'>
						<Skeleton className='h-3.5 lg:h-4 w-24 lg:w-32 rounded' />
						<Skeleton className='h-3.5 lg:h-4 w-20 lg:w-24 rounded' />
					</div>
					<Skeleton className='h-3.5 lg:h-4 w-24 lg:w-28 rounded' />
					<Skeleton className='h-3.5 lg:h-4 w-28 lg:w-32 rounded' />
				</div>
			</div>
			<div className='flex flex-col sm:flex-row items-start sm:items-center gap-2 lg:gap-4 mt-2 sm:mt-0'>
				<Skeleton className='h-8 lg:h-9 w-20 lg:w-24 rounded-full' />
				<Skeleton className='h-9 lg:h-10 w-full sm:w-24 rounded' />
			</div>
		</div>
	)
}
