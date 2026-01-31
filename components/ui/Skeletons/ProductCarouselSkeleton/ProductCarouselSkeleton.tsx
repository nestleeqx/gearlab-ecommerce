import { Skeleton } from '../Skeleton/Skeleton'

export default function ProductCarouselSkeleton() {
	return (
		<div className='w-full lg:w-150'>
			<Skeleton className='aspect-square w-full rounded-md' />
			<div className='relative -mt-8 lg:-mt-12 flex justify-between px-2 lg:px-4'>
				<Skeleton className='h-8 w-8 lg:h-10 lg:w-10 rounded-full' />
				<Skeleton className='h-8 w-8 lg:h-10 lg:w-10 rounded-full' />
			</div>
		</div>
	)
}
