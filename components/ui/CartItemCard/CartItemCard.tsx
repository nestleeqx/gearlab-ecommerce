import { useCart } from '@/context/CartContext'
import { colorMap } from '@/lib/color-map'
import { cn, formatPrice } from '@/lib/utils'
import { CartItem } from '@/types/cart'
import { X } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../Button/Button'
import QuantityInput from '../QuantityInput/QuantityInput'
import Text from '../Text/Text'

interface iCartItemCard {
	item: CartItem
}

export default function CartItemCard({ item }: iCartItemCard) {
	const { updateQuantity, removeFromCart } = useCart()
	const handleQuantityChange = (newQuantity: number) => {
		updateQuantity(item.id, item.size, item.color, newQuantity)
	}

	return (
		<div className='flex gap-3 lg:gap-4 border-b border-neutral-light-100 pb-4 lg:pb-6'>
			<div className='relative h-20 w-20 lg:h-24 lg:w-24 shrink-0 overflow-hidden rounded-md bg-neutral-light-100 flex justify-center'>
				<Image
					src={item.image}
					alt={item.title}
					fill={true}
					sizes='(max-width: 768px) 80px, 96px'
					className='object-cover'
					quality={80}
				/>
			</div>
			<div className='flex flex-1 flex-col justify-between min-w-0'>
				<div className='flex justify-between gap-2'>
					<div className='min-w-0 flex-1'>
						<h3 className='text-sm lg:text-body font-medium text-neutral-900 truncate'>
							{item.title}
						</h3>
						<div className='mt-1 flex flex-wrap items-center gap-1.5 lg:gap-2 text-sm lg:text-body text-neutral-500'>
							<span className='flex items-center gap-1'>
								<span
									className={cn(
										'h-3 w-3 lg:h-4 lg:w-4 rounded-full border border-neutral-200',
										colorMap[item.color] || 'bg-neutral-200'
									)}
								/>
								<span className='hidden sm:inline'>
									{item.color}
								</span>
							</span>
							<span className='hidden sm:inline'>—</span>
							<Text>Size: {item.size}</Text>
						</div>
					</div>
					<Text className='text-base lg:text-heading-h4 font-semibold text-neutral-900 shrink-0'>
						{formatPrice(item.price)}
					</Text>
				</div>

				<div className='flex items-center justify-between mt-2 lg:mt-0'>
					<QuantityInput
						value={item.quantity}
						min={1}
						max={100}
						onChange={handleQuantityChange}
						className='scale-90 lg:scale-100 origin-left'
					/>
					<Button
						variant='ghost'
						size='icon-sm'
						className='h-8 w-8 lg:h-10 lg:w-10'
						onClick={() =>
							removeFromCart(item.id, item.size, item.color)
						}
					>
						<X className='h-5 w-5 lg:h-7 lg:w-7' />
					</Button>
				</div>
			</div>
		</div>
	)
}
