import { Skeleton } from '../Skeleton/Skeleton'

export default function ProductDescriptionSkeleton() {
	return (
		<div className='mt-44 flex flex-row gap-12'>
			<div className='flex h-fit w-48 flex-col gap-1'>
				<Skeleton className='h-12 rounded' />
				<Skeleton className='h-12 rounded' />
			</div>
			<div className='flex-1 space-y-4'>
				<Skeleton className='h-6 w-32 rounded' />
				<Skeleton className='h-4 w-full rounded' />
				<Skeleton className='h-4 w-full rounded' />
				<Skeleton className='h-4 w-3/4 rounded' />
				<div className='mt-8 space-y-2'>
					{Array.from({ length: 4 }).map((_, i) => (
						<div
							key={i}
							className='flex items-center gap-2'
						>
							<Skeleton className='h-1.5 w-1.5 rounded-full' />
							<Skeleton className='h-4 flex-1 rounded' />
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
