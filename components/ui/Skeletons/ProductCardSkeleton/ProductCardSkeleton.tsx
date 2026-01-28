import { Skeleton } from '../Skeleton/Skeleton'

export default function ProductCardSkeleton() {
	return (
		<div className='w-full max-w-57 max-h-109'>
			<Skeleton className='h-72 w-full rounded-sm' />
			<div className='mt-9'>
				<Skeleton className='h-4 w-3/4' />
				<div className='flex items-center gap-4 mt-3'>
					<Skeleton className='h-3 w-16' />
					<Skeleton className='h-4 w-20' />
				</div>
			</div>
		</div>
	)
}
