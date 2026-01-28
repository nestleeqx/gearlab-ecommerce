import { Skeleton } from '../Skeleton/Skeleton'

export default function WishlistCardSkeleton() {
	return (
		<div className='flex items-center gap-6 rounded-lg border border-neutral-light-100 p-6'>
			<Skeleton className='h-20 w-20 shrink-0 rounded-md' />
			<div className='flex-1 space-y-3'>
				<Skeleton className='h-5 w-48 rounded' />
				<Skeleton className='h-4 w-40 rounded' />
				<Skeleton className='h-4 w-24 rounded' />
			</div>
			<div className='flex items-center gap-4'>
				<Skeleton className='h-5 w-20 rounded' />
				<Skeleton className='h-10 w-28 rounded' />
			</div>
		</div>
	)
}
