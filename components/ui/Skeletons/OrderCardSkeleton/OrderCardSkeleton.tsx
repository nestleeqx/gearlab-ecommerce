export default function OrderCardSkeleton() {
	return (
		<div className='flex items-center gap-6 rounded-lg border border-neutral-light-100 p-6 animate-pulse'>
			{/* Image skeleton */}
			<div className='h-20 w-20 shrink-0 rounded-md bg-neutral-100' />

			{/* Content */}
			<div className='flex-1 space-y-3'>
				{/* Title */}
				<div className='h-5 w-48 rounded bg-neutral-100' />

				{/* Date */}
				<div className='h-4 w-40 rounded bg-neutral-100' />

				{/* Details */}
				<div className='space-y-1.5'>
					<div className='flex items-center gap-2'>
						<div className='h-4 w-32 rounded bg-neutral-100' />
						<div className='h-4 w-24 rounded bg-neutral-100' />
					</div>
					<div className='h-4 w-28 rounded bg-neutral-100' />
					<div className='h-4 w-32 rounded bg-neutral-100' />
				</div>
			</div>

			{/* Right side - Status and button */}
			<div className='flex items-center gap-4'>
				{/* Status badge */}
				<div className='h-9 w-24 rounded-full bg-neutral-100' />

				{/* View button */}
				<div className='h-10 w-24 rounded bg-neutral-100' />
			</div>
		</div>
	)
}
