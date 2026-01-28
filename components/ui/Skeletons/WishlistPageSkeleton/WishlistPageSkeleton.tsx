import WishlistCardSkeleton from '../WishlistCardSkeleton/WishlistCardSkeleton'

export default function WishlistPageSkeleton() {
	return (
		<div>
			<div className='mb-8 h-8 w-32 rounded bg-neutral-100 animate-pulse' />

			<div className='space-y-6'>
				{Array.from({ length: 3 }).map((_, index) => (
					<WishlistCardSkeleton key={index} />
				))}
			</div>
		</div>
	)
}
