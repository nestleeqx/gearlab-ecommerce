import { formatPrice } from '@/lib/utils'
import { CartItem } from '@/types/cart'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../Button/Button'

interface iOrderSummary {
	items: CartItem[]
	subtotal: number
	shipping: number
	totalQuantity: number
	tax: number
	total: number
}

export default function OrderSummary({
	items,
	subtotal,
	shipping,
	totalQuantity,
	tax,
	total
}: iOrderSummary) {
	return (
		<div className='mt-8 lg:mt-0'>
			<div className='flex flex-col sm:flex-row sm:items-center justify-between mb-4 lg:mb-8 gap-3'>
				<h2 className='text-xl lg:text-heading-h3 font-semibold text-neutral-900'>
					Your Order
				</h2>
				<Link href='/cart'>
					<Button
						variant='outline'
						size='lg'
						className='w-full sm:w-auto'
					>
						Edit Cart
					</Button>
				</Link>
			</div>
			<div className='mb-6 lg:mb-8 mt-8 lg:mt-16 flex gap-3 lg:gap-4'>
				{items.slice(0, 3).map((item, index) => (
					<div
						key={index}
						className='relative h-14 w-14 lg:h-16 lg:w-16 overflow-hidden rounded-md bg-neutral-100 shrink-0'
					>
						<Image
							src={item.image}
							alt={item.title}
							fill
							quality={80}
							className='object-cover'
						/>
					</div>
				))}
				{items.length > 3 && (
					<div className='flex h-14 w-14 lg:h-16 lg:w-16 items-center justify-center rounded-md bg-neutral-100 text-sm lg:text-body font-medium text-neutral-600 shrink-0'>
						+{items.length - 3}
					</div>
				)}
			</div>
			<div className='space-y-3 lg:space-y-4 border-t border-neutral-light-100 pt-4 lg:pt-6'>
				<div className='flex justify-between text-sm lg:text-body'>
					<span className='text-neutral-600'>Quantity:</span>
					<span className='font-medium text-neutral-900'>
						x{totalQuantity}
					</span>
				</div>
				<div className='flex justify-between text-sm lg:text-body'>
					<span className='text-neutral-600'>Subtotal:</span>
					<span className='font-medium text-neutral-900'>
						{formatPrice(subtotal)}
					</span>
				</div>
				<div className='flex justify-between text-sm lg:text-body'>
					<span className='text-neutral-600'>Shipping:</span>
					<span className='font-medium text-neutral-900'>
						{shipping === 0 ? 'Free' : formatPrice(shipping)}
					</span>
				</div>
				<div className='flex justify-between text-sm lg:text-body'>
					<span className='text-neutral-600'>Tax:</span>
					<span className='font-medium text-neutral-900'>
						{formatPrice(tax)}
					</span>
				</div>
				<div className='border-t border-neutral-light-100 pt-3 lg:pt-4'>
					<div className='flex justify-between'>
						<span className='text-base lg:text-heading-h5 font-semibold text-neutral-900'>
							Total
						</span>
						<span className='text-base lg:text-heading-h5 font-semibold text-neutral-900'>
							{formatPrice(total)}
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}
