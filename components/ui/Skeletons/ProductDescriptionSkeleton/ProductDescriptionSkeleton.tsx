export default function ProductDescriptionSkeleton() {
	return (
		<div className='mt-44 flex flex-row gap-12 animate-pulse'>
			{/* Tabs List */}
			<div className='flex h-fit w-48 flex-col gap-1'>
				<div className='h-12 rounded bg-neutral-100' />
				<div className='h-12 rounded bg-neutral-100' />
			</div>

			{/* Content */}
			<div className='flex-1 space-y-4'>
				<div className='h-6 w-32 rounded bg-neutral-100' />
				<div className='h-4 w-full rounded bg-neutral-100' />
				<div className='h-4 w-full rounded bg-neutral-100' />
				<div className='h-4 w-3/4 rounded bg-neutral-100' />

				<div className='mt-8 space-y-2'>
					{Array.from({ length: 4 }).map((_, i) => (
						<div
							key={i}
							className='flex items-center gap-2'
						>
							<div className='h-1.5 w-1.5 rounded-full bg-neutral-100' />
							<div className='h-4 flex-1 rounded bg-neutral-100' />
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
