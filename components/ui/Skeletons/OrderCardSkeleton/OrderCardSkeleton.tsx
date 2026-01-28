import { Skeleton } from '../Skeleton/Skeleton'

export default function OrderCardSkeleton() {
	return (
		<div className='flex items-center gap-6 rounded-lg border border-neutral-light-100 p-6'>
			<Skeleton className='h-20 w-20 shrink-0 rounded-md' />
			<div className='flex-1 space-y-3'>
				<Skeleton className='h-5 w-48 rounded' />
				<Skeleton className='h-4 w-40 rounded' />
				<div className='space-y-1.5'>
					<div className='flex items-center gap-2'>
						<Skeleton className='h-4 w-32 rounded' />
						<Skeleton className='h-4 w-24 rounded' />
					</div>
					<Skeleton className='h-4 w-28 rounded' />
					<Skeleton className='h-4 w-32 rounded' />
				</div>
			</div>
			<div className='flex items-center gap-4'>
				<Skeleton className='h-9 w-24 rounded-full' />
				<Skeleton className='h-10 w-24 rounded' />
			</div>
		</div>
	)
}
