import PageContainer from '@/components/layout/PageContainer/PageContainer'
import PageTitleWide from '@/components/ui/PageTitleWide/PageTitleWide'
import CartItemCardSkeleton from '@/components/ui/Skeletons/CartItemCardSkeleton/CartItemCardSkeleton'
import { Skeleton } from '../Skeleton/Skeleton'

export default function CartPageSkeleton() {
	return (
		<>
			<PageTitleWide title='Cart' />
			<PageContainer className='py-6 lg:py-12 mt-13'>
				<div className='grid grid-cols-1 gap-8 lg:gap-12 lg:grid-cols-3'>
					<div className='lg:col-span-2'>
						<div className='mb-4 lg:mb-8 border-b border-neutral-light-100 pb-4'>
							<Skeleton className='h-7 lg:h-8 w-28 lg:w-32 rounded' />
						</div>
						<div className='mt-6 lg:mt-14 space-y-4 lg:space-y-6'>
							{Array.from({ length: 3 }).map((_, index) => (
								<CartItemCardSkeleton key={index} />
							))}
						</div>
					</div>
					<div className='lg:col-span-1'>
						<div className='rounded-lg border border-neutral-light-100 p-4 lg:p-6'>
							<Skeleton className='mb-6 lg:mb-11 h-6 lg:h-7 w-32 lg:w-40 rounded' />
							<div className='space-y-3 lg:space-y-4'>
								{Array.from({ length: 4 }).map((_, i) => (
									<div
										key={i}
										className='flex justify-between'
									>
										<Skeleton className='h-4 lg:h-5 w-20 lg:w-24 rounded' />
										<Skeleton className='h-4 lg:h-5 w-16 lg:w-20 rounded' />
									</div>
								))}
								<div className='border-t border-neutral-light-100 pt-4 lg:pt-5'>
									<div className='flex justify-between'>
										<Skeleton className='h-5 lg:h-6 w-14 lg:w-16 rounded' />
										<Skeleton className='h-5 lg:h-6 w-20 lg:w-24 rounded' />
									</div>
								</div>
							</div>
							<Skeleton className='mt-4 lg:mt-6 h-12 w-full rounded-sm' />
							<Skeleton className='m-auto mt-6 lg:mt-8 h-4 lg:h-5 w-36 lg:w-40 rounded' />
						</div>
					</div>
				</div>
			</PageContainer>
		</>
	)
}
