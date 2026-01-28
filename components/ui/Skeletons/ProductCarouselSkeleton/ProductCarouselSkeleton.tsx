export default function ProductCarouselSkeleton() {
	return (
		<div className='w-150 animate-pulse'>
			<div className='aspect-square w-full rounded-md bg-neutral-100' />
			<div className='relative -mt-12 flex justify-between px-4'>
				<div className='h-10 w-10 rounded-full bg-neutral-100' />
				<div className='h-10 w-10 rounded-full bg-neutral-100' />
			</div>
		</div>
	)
}
