export default function ProductCardSkeleton() {
	return (
		<div className='w-full animate-pulse'>
			<div className='aspect-3/4 w-full rounded-sm bg-neutral-100' />
			<div className='mt-6 space-y-2'>
				<div className='h-4 w-3/4 rounded bg-neutral-100' />
				<div className='flex items-center gap-4'>
					<div className='h-3 w-16 rounded bg-neutral-100' />
					<div className='h-4 w-20 rounded bg-neutral-100' />
				</div>
			</div>
		</div>
	)
}
