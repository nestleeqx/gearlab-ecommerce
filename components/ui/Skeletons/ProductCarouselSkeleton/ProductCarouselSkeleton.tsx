import { Skeleton } from '../Skeleton/Skeleton'

export default function ProductCarouselSkeleton() {
	return (
		<div className='w-150'>
			<Skeleton className='aspect-square w-full rounded-md' />
			<div className='relative -mt-12 flex justify-between px-4'>
				<Skeleton className='h-10 w-10 rounded-full' />
				<Skeleton className='h-10 w-10 rounded-full' />
			</div>
		</div>
	)
}
