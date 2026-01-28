export default function ProductDetailSkeleton() {
	return (
		<div className='flex-1 animate-pulse'>
			{/* Title */}
			<div className='h-8 w-3/4 rounded bg-neutral-100' />

			{/* Badge and Status */}
			<div className='mt-3 flex gap-3'>
				<div className='h-6 w-32 rounded-full bg-neutral-100' />
				<div className='h-6 w-20 rounded-full bg-neutral-100' />
			</div>

			{/* Price */}
			<div className='mt-6 h-7 w-24 rounded bg-neutral-100' />

			{/* Available Colors */}
			<div className='mt-8'>
				<div className='mb-2.5 h-4 w-32 rounded bg-neutral-100' />
				<div className='flex gap-2'>
					{Array.from({ length: 4 }).map((_, i) => (
						<div
							key={i}
							className='h-10 w-10 rounded-full bg-neutral-100'
						/>
					))}
				</div>
			</div>

			{/* Select Size */}
			<div className='mt-4'>
				<div className='mb-2.5 h-4 w-24 rounded bg-neutral-100' />
				<div className='flex gap-2'>
					{Array.from({ length: 4 }).map((_, i) => (
						<div
							key={i}
							className='h-10 w-16 rounded bg-neutral-100'
						/>
					))}
				</div>
			</div>

			{/* Quantity */}
			<div className='mt-8'>
				<div className='mb-2.5 h-4 w-20 rounded bg-neutral-100' />
				<div className='h-12 w-32 rounded bg-neutral-100' />
			</div>

			{/* Buttons */}
			<div className='mt-10'>
				<div className='flex items-center gap-4'>
					<div className='h-12 w-40 rounded bg-neutral-100' />
					<div className='h-12 w-12 rounded bg-neutral-100' />
				</div>
				<div className='mt-3 h-4 w-56 rounded bg-neutral-100' />
			</div>
		</div>
	)
}
