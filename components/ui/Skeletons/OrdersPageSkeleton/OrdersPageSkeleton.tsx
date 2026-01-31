import OrderCardSkeleton from '@/components/ui/Skeletons/OrderCardSkeleton/OrderCardSkeleton'
import { Skeleton } from '../Skeleton/Skeleton'

export default function OrdersPageSkeleton() {
	return (
		<div>
			<Skeleton className='mb-4 lg:mb-8 h-7 lg:h-8 w-28 lg:w-32 rounded' />
			<div className='space-y-4 lg:space-y-6'>
				{Array.from({ length: 3 }).map((_, index) => (
					<OrderCardSkeleton key={index} />
				))}
			</div>
		</div>
	)
}
