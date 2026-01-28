import { Skeleton } from '../Skeleton/Skeleton'

export default function ProductDetailSkeleton() {
	return (
		<div className='flex-1'>
			<Skeleton className='h-8 w-3/4 rounded' />
			<div className='mt-3 flex gap-3'>
				<Skeleton className='h-6 w-32 rounded-full' />
				<Skeleton className='h-6 w-20 rounded-full' />
			</div>
			<Skeleton className='mt-6 h-7 w-24 rounded' />
			<div className='mt-8'>
				<Skeleton className='mb-2.5 h-4 w-32 rounded' />
				<div className='flex gap-2'>
					{Array.from({ length: 4 }).map((_, i) => (
						<Skeleton
							key={i}
							className='h-10 w-10 rounded-full'
						/>
					))}
				</div>
			</div>
			<div className='mt-4'>
				<Skeleton className='mb-2.5 h-4 w-24 rounded' />
				<div className='flex gap-2'>
					{Array.from({ length: 4 }).map((_, i) => (
						<Skeleton
							key={i}
							className='h-10 w-16 rounded'
						/>
					))}
				</div>
			</div>
			<div className='mt-8'>
				<Skeleton className='mb-2.5 h-4 w-20 rounded' />
				<Skeleton className='h-12 w-32 rounded' />
			</div>
			<div className='mt-10'>
				<div className='flex items-center gap-4'>
					<Skeleton className='h-12 w-40 rounded' />
					<Skeleton className='h-12 w-12 rounded' />
				</div>
				<Skeleton className='mt-3 h-4 w-56 rounded' />
			</div>
		</div>
	)
}
