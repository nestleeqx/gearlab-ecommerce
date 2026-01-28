import OrderCardSkeleton from '@/components/ui/Skeletons/OrderCardSkeleton/OrderCardSkeleton'

export default function OrdersPageSkeleton() {
	return (
		<div>
			<div className='mb-8 h-8 w-32 rounded bg-neutral-100 animate-pulse' />
			<div className='space-y-6'>
				{Array.from({ length: 3 }).map((_, index) => (
					<OrderCardSkeleton key={index} />
				))}
			</div>
		</div>
	)
}
