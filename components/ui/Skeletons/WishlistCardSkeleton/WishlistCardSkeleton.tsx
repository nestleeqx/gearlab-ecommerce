import { Skeleton } from '../Skeleton/Skeleton'

export default function WishlistCardSkeleton() {
	return (
		<div className='flex flex-col sm:flex-row sm:items-center gap-4 lg:gap-6 rounded-lg border border-neutral-light-100 p-4 lg:p-6'>
			<Skeleton className='h-16 w-16 lg:h-20 lg:w-20 shrink-0 rounded-md' />
			<div className='flex-1 min-w-0 space-y-2 lg:space-y-3'>
				<Skeleton className='h-4 lg:h-5 w-full sm:w-48 rounded' />
				<Skeleton className='h-3.5 lg:h-4 w-32 lg:w-40 rounded' />
				<Skeleton className='h-3.5 lg:h-4 w-20 lg:w-24 rounded' />
			</div>
			<div className='flex flex-col sm:flex-row items-start sm:items-center gap-2 lg:gap-4 mt-2 sm:mt-0'>
				<Skeleton className='h-4 lg:h-5 w-16 lg:w-20 rounded' />
				<Skeleton className='h-9 lg:h-10 w-full sm:w-28 rounded' />
			</div>
		</div>
	)
}
