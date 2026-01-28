export default function CartItemCardSkeleton() {
	return (
		<div className='flex gap-4 border-b border-neutral-light-100 pb-6 animate-pulse'>
			{/* Image skeleton */}
			<div className='h-24 w-24 shrink-0 rounded-md bg-neutral-100' />

			{/* Content */}
			<div className='flex flex-1 flex-col justify-between'>
				<div className='flex justify-between'>
					<div className='flex-1'>
						{/* Title */}
						<div className='h-5 w-48 rounded bg-neutral-100' />

						{/* Color and Size */}
						<div className='mt-2 flex items-center gap-2'>
							<div className='h-4 w-32 rounded bg-neutral-100' />
							<div className='h-4 w-20 rounded bg-neutral-100' />
						</div>
					</div>

					{/* Price */}
					<div className='h-6 w-20 rounded bg-neutral-100' />
				</div>

				{/* Bottom section - Quantity and Remove button */}
				<div className='flex items-center justify-between'>
					{/* Quantity input skeleton */}
					<div className='h-10 w-32 rounded-md bg-neutral-100' />

					{/* Remove button skeleton */}
					<div className='h-10 w-10 rounded bg-neutral-100' />
				</div>
			</div>
		</div>
	)
}
