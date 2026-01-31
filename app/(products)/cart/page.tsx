'use client'
import PageContainer from '@/components/layout/PageContainer/PageContainer'
import { Button } from '@/components/ui/Button/Button'
import CartItemCard from '@/components/ui/CartItemCard/CartItemCard'
import PageTitleWide from '@/components/ui/PageTitleWide/PageTitleWide'
import CartPageSkeleton from '@/components/ui/Skeletons/CartPageSkeleton/CartPageSkeleton'
import Text from '@/components/ui/Text/Text'
import { useAuth } from '@/context/AuthContext'
import { useCart } from '@/context/CartContext'
import { useMounted } from '@/hooks/useMounted'
import { useOrderTotals } from '@/hooks/useOrderTotals'
import { formatPrice } from '@/lib/utils'
import Link from 'next/link'

export default function CartPage() {
	const { items, itemCount } = useCart()
	const { isAuthenticated } = useAuth()
	const { subtotal, shipping, tax, finalTotal } = useOrderTotals()
	const mounted = useMounted()

	if (!mounted) {
		return <CartPageSkeleton />
	}

	if (items.length == 0) {
		return (
			<>
				<PageTitleWide title='Cart' />
				<PageContainer className='py-6 lg:py-12'>
					<div className='flex min-h-[50vh] lg:min-h-[60vh] flex-col items-center justify-center px-4'>
						<Text className='text-xl lg:text-heading-h4 font-semibold text-neutral-900 text-center'>
							Your cart is empty
						</Text>
						<Link href='/products'>
							<Button
								size='lg'
								className='mt-6 rounded-sm w-full sm:w-auto'
							>
								Continue Shopping
							</Button>
						</Link>
					</div>
				</PageContainer>
			</>
		)
	}

	return (
		<>
			<PageTitleWide title='Cart' />
			{mounted && (
				<PageContainer className='py-6 lg:py-12 mt-13'>
					<div className='grid grid-cols-1 gap-8 lg:gap-12 lg:grid-cols-3'>
						<div className='lg:col-span-2'>
							<Text className='mb-4 lg:mb-8 text-heading-h3 font-semibold text-neutral-900 border-b border-neutral-light-100 pb-4.5'>
								Your cart
							</Text>
							<div className='mt-6 lg:mt-14 space-y-4 lg:space-y-6'>
								{items.map((item, index) => (
									<CartItemCard
										key={`${item.id}-${item.size}-${item.color}-${index}`}
										item={item}
									/>
								))}
							</div>
						</div>
						<div className='lg:col-span-1'>
							<div className='rounded-lg border border-neutral-light-100 p-4 lg:p-6 sticky top-4'>
								<h2 className='mb-6 lg:mb-11 text-heading-h4 font-semibold text-neutral-900'>
									Order Summary
								</h2>
								<div className='space-y-3 lg:space-y-4'>
									<div className='flex justify-between text-body'>
										<Text color={600}>Quantity</Text>
										<Text className='font-medium text-neutral-900'>
											x{itemCount}
										</Text>
									</div>
									<div className='flex justify-between text-body'>
										<Text color={600}>Subtotal</Text>
										<Text className='font-medium text-neutral-900'>
											{formatPrice(subtotal)}
										</Text>
									</div>
									<div className='flex justify-between text-body'>
										<Text color={600}>Shipping:</Text>
										<Text className='font-medium text-neutral-900'>
											{shipping === 0
												? 'Free'
												: formatPrice(shipping)}
										</Text>
									</div>
									<div className='flex justify-between text-body'>
										<Text color={600}>Tax:</Text>
										<Text className='font-medium text-neutral-900'>
											{formatPrice(tax)}
										</Text>
									</div>
									<div className='border-t border-neutral-light-100 pt-5'>
										<div className='flex justify-between'>
											<Text className='text-heading-h5 font-semibold text-neutral-900'>
												Total
											</Text>
											<span className='text-heading-h5 font-semibold text-neutral-900'>
												{formatPrice(finalTotal)}
											</span>
										</div>
									</div>
								</div>
								{isAuthenticated ? (
									<Link href='/checkout'>
										<Button
											className='mt-4 lg:mt-6 w-full rounded-sm'
											size='lg'
										>
											Checkout
										</Button>
									</Link>
								) : (
									<Link href='/login'>
										<Button
											className='mt-4 lg:mt-6 w-full rounded-sm'
											size='lg'
										>
											Login
										</Button>
									</Link>
								)}
								<Link
									href='/products'
									className='block w-max mt-6 lg:mt-8 m-auto text-body font-medium text-neutral-900 underline cursor-pointer hover:text-neutral-500'
								>
									Continue Shopping
								</Link>
							</div>
						</div>
					</div>
				</PageContainer>
			)}
		</>
	)
}
