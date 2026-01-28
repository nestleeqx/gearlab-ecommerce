import PageContainer from '@/components/layout/PageContainer/PageContainer'
import PageTitleWide from '@/components/ui/PageTitleWide/PageTitleWide'
import CartItemCardSkeleton from '@/components/ui/Skeletons/CartItemCardSkeleton/CartItemCardSkeleton'

export default function CartPageSkeleton() {
	return (
		<>
			<PageTitleWide title='Cart' />
			<PageContainer className='py-12 mt-13'>
				<div className='grid grid-cols-1 gap-12 lg:grid-cols-3'>
					{/* Left side - Cart items */}
					<div className='lg:col-span-2'>
						<div className='mb-8 animate-pulse border-b border-neutral-light-100 pb-4.5'>
							<div className='h-8 w-32 rounded bg-neutral-100' />
						</div>

						<div className='mt-14 space-y-6'>
							{Array.from({ length: 3 }).map((_, index) => (
								<CartItemCardSkeleton key={index} />
							))}
						</div>
					</div>

					{/* Right side - Order Summary */}
					<div className='lg:col-span-1'>
						<div className='rounded-lg border border-neutral-light-100 p-6 animate-pulse'>
							{/* Title */}
							<div className='mb-11 h-7 w-40 rounded bg-neutral-100' />

							{/* Summary items */}
							<div className='space-y-4'>
								{Array.from({ length: 4 }).map((_, i) => (
									<div
										key={i}
										className='flex justify-between'
									>
										<div className='h-5 w-24 rounded bg-neutral-100' />
										<div className='h-5 w-20 rounded bg-neutral-100' />
									</div>
								))}

								{/* Total section */}
								<div className='border-t border-neutral-light-100 pt-5'>
									<div className='flex justify-between'>
										<div className='h-6 w-16 rounded bg-neutral-100' />
										<div className='h-6 w-24 rounded bg-neutral-100' />
									</div>
								</div>
							</div>

							{/* Checkout button */}
							<div className='mt-6 h-12 w-full rounded-sm bg-neutral-100' />

							{/* Continue shopping link */}
							<div className='m-auto mt-8 h-5 w-40 rounded bg-neutral-100' />
						</div>
					</div>
				</div>
			</PageContainer>
		</>
	)
}
