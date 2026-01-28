export default function WishlistCardSkeleton() {
	return (
		<div className='flex items-center gap-6 rounded-lg border border-neutral-light-100 p-6 animate-pulse'>
			{/* Image skeleton */}
			<div className='h-20 w-20 flex-shrink-0 rounded-md bg-neutral-100' />

			{/* Content */}
			<div className='flex-1 space-y-3'>
				{/* Title */}
				<div className='h-5 w-48 rounded bg-neutral-100' />

				{/* Date */}
				<div className='h-4 w-40 rounded bg-neutral-100' />

				{/* Remove link */}
				<div className='h-4 w-24 rounded bg-neutral-100' />
			</div>

			{/* Right side - Price and button */}
			<div className='flex items-center gap-4'>
				{/* Price */}
				<div className='h-5 w-20 rounded bg-neutral-100' />

				{/* Add to cart button */}
				<div className='h-10 w-28 rounded bg-neutral-100' />
			</div>
		</div>
	)
}
