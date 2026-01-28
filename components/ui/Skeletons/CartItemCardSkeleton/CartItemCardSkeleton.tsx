import { Skeleton } from '../Skeleton/Skeleton'

export default function CartItemCardSkeleton() {
	return (
		<div className='flex gap-4 border-b border-neutral-light-100 pb-6'>
			<Skeleton className='h-24 w-24 shrink-0 rounded-md' />
			<div className='flex flex-1 flex-col justify-between'>
				<div className='flex justify-between'>
					<div className='flex-1'>
						<Skeleton className='h-5 w-48' />
						<div className='mt-2 flex items-center gap-2'>
							<Skeleton className='h-4 w-32' />
							<Skeleton className='h-4 w-20' />
						</div>
					</div>
					<Skeleton className='h-6 w-20' />
				</div>
				<div className='flex items-center justify-between'>
					<Skeleton className='h-10 w-32 rounded-md' />
					<Skeleton className='h-10 w-10' />
				</div>
			</div>
		</div>
	)
}
