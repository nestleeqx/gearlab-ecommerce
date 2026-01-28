import PageContainer from '@/components/layout/PageContainer/PageContainer'
import PageTitleWide from '@/components/ui/PageTitleWide/PageTitleWide'
import CartItemCardSkeleton from '@/components/ui/Skeletons/CartItemCardSkeleton/CartItemCardSkeleton'
import { Skeleton } from '../Skeleton/Skeleton'

export default function CartPageSkeleton() {
	return (
		<>
			<PageTitleWide title='Cart' />
			<PageContainer className='py-12 mt-13'>
				<div className='grid grid-cols-1 gap-12 lg:grid-cols-3'>
					<div className='lg:col-span-2'>
						<div className='mb-8 border-b border-neutral-light-100 pb-4.5'>
							<Skeleton className='h-8 w-32 rounded' />
						</div>
						<div className='mt-14 space-y-6'>
							{Array.from({ length: 3 }).map((_, index) => (
								<CartItemCardSkeleton key={index} />
							))}
						</div>
					</div>
					<div className='lg:col-span-1'>
						<div className='rounded-lg border border-neutral-light-100 p-6'>
							<Skeleton className='mb-11 h-7 w-40 rounded' />
							<div className='space-y-4'>
								{Array.from({ length: 4 }).map((_, i) => (
									<div
										key={i}
										className='flex justify-between'
									>
										<Skeleton className='h-5 w-24 rounded' />
										<Skeleton className='h-5 w-20 rounded' />
									</div>
								))}
								<div className='border-t border-neutral-light-100 pt-5'>
									<div className='flex justify-between'>
										<Skeleton className='h-6 w-16 rounded' />
										<Skeleton className='h-6 w-24 rounded' />
									</div>
								</div>
							</div>
							<Skeleton className='mt-6 h-12 w-full rounded-sm' />
							<Skeleton className='m-auto mt-8 h-5 w-40 rounded' />
						</div>
					</div>
				</div>
			</PageContainer>
		</>
	)
}
