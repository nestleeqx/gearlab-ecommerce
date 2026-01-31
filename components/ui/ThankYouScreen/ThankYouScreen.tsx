import PageContainer from '@/components/layout/PageContainer/PageContainer'
import { Package } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../Button/Button'
import PageTitleWide from '../PageTitleWide/PageTitleWide'

export default function ThankYouScreen() {
	return (
		<>
			<PageTitleWide
				title='Cart'
				isPrimary={true}
			/>
			<PageContainer className='py-8 lg:py-0'>
				<div className='flex min-h-[50vh] lg:min-h-[60vh] flex-col items-center justify-center px-4'>
					<div className='mb-4 lg:mb-6 flex h-20 w-20 lg:h-26 lg:w-26 items-center justify-center rounded-full bg-neutral-100'>
						<Package
							className='h-11 w-11 lg:h-15 lg:w-15 text-neutral-900'
							strokeWidth={1}
						/>
					</div>
					<h1 className='mb-2 lg:mb-3 text-xl lg:text-heading-h3 font-bold text-neutral-900 text-center'>
						Thank you for shopping
					</h1>
					<p className='mb-6 lg:mb-8 max-w-xs lg:max-w-80 text-center text-sm lg:text-body text-neutral-500'>
						Your order has been successfully placed and is now being
						processed.
					</p>
					<div className='flex flex-col sm:flex-row gap-3 lg:gap-4 w-full sm:w-auto'>
						<Link
							href='/products'
							className='w-full sm:w-auto'
						>
							<Button
								className='w-full sm:min-w-48 rounded-sm'
								size='lg'
							>
								Go to catalog
								<span>→</span>
							</Button>
						</Link>
						<Link
							href='/profile/orders'
							className='w-full sm:w-auto'
						>
							<Button
								className='w-full sm:min-w-48 rounded-sm'
								size='lg'
							>
								View Orders
							</Button>
						</Link>
					</div>
				</div>
			</PageContainer>
		</>
	)
}
