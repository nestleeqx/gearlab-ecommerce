import { Skeleton } from '../Skeleton/Skeleton'
import WishlistCardSkeleton from '../WishlistCardSkeleton/WishlistCardSkeleton'

export default function WishlistPageSkeleton() {
	return (
		<div>
			<Skeleton className='mb-8 h-8 w-32 rounded' />

			<div className='space-y-6'>
				{Array.from({ length: 3 }).map((_, index) => (
					<WishlistCardSkeleton key={index} />
				))}
			</div>
		</div>
	)
}
