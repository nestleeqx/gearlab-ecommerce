'use client'

import { Button } from '@/components/ui/Button/Button'
import { useCart } from '@/context/CartContext'
import { useWishlist } from '@/context/WishListContext'
import { formatPrice } from '@/lib/utils'
import { PackageSearch } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function WishlistPage() {
	const { items, removeFromWishlist } = useWishlist()
	const { addToCart } = useCart()

	const formatDate = (dateString: string) => {
		const date = new Date(dateString)
		return date.toLocaleDateString('en-US', {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		})
	}

	const handleAddToCart = (item: (typeof items)[0]) => {
		addToCart({
			id: item.id,
			slug: item.slug,
			title: item.title,
			price: item.price,
			image: item.image,
			color: 'blue',
			size: 'M',
			quantity: 1
		})
	}

	if (items.length === 0) {
		return (
			<div className='flex min-h-[40vh] lg:min-h-[60vh] flex-col items-center justify-center px-4'>
				<div className='mb-4 lg:mb-6 flex h-20 w-20 lg:h-24 lg:w-24 items-center justify-center rounded-full bg-neutral-100'>
					<PackageSearch
						className='h-10 w-10 lg:h-12 lg:w-12 text-neutral-500'
						strokeWidth={1.5}
					/>
				</div>
				<p className='mb-4 lg:mb-6 text-sm lg:text-base text-neutral-500 text-center'>
					You haven&apos;t added anything to the wishlist.
				</p>
				<Link
					href='/products'
					className='w-full sm:w-auto'
				>
					<Button
						size='lg'
						className='rounded-sm w-full sm:w-auto'
					>
						Start Shopping
						<span>→</span>
					</Button>
				</Link>
			</div>
		)
	}

	return (
		<div>
			<h1 className='mb-4 lg:mb-8 text-lg lg:text-heading-h4 font-semibold text-neutral-900'>
				Wishlist
			</h1>
			<div className='space-y-4 lg:space-y-6'>
				{items.map(item => (
					<div
						key={item.id}
						className='flex flex-col sm:flex-row sm:items-center gap-4 lg:gap-6 rounded-lg border border-neutral-light-100 p-4 lg:p-6'
					>
						<div className='relative h-16 w-16 lg:h-20 lg:w-20 shrink-0 overflow-hidden rounded-md bg-neutral-100'>
							<Image
								src={item.image}
								alt={item.title}
								fill
								quality={80}
								className='object-cover'
							/>
						</div>
						<div className='flex-1 min-w-0'>
							<h3 className='font-medium text-sm lg:text-base text-neutral-900 truncate'>
								{item.title}
							</h3>
							<p className='mt-1 text-xs lg:text-body text-neutral-500'>
								Added On: {formatDate(item.addedAt)}
							</p>
							<button
								onClick={() => removeFromWishlist(item.id)}
								className='mt-2 text-xs lg:text-body text-neutral-600 underline hover:text-neutral-900 cursor-pointer'
							>
								Remove Item
							</button>
						</div>
						<div className='flex flex-col sm:flex-row items-start sm:items-center gap-2 lg:gap-4 mt-2 sm:mt-0'>
							<p className='text-sm lg:text-body font-semibold text-neutral-900'>
								{formatPrice(item.price)}
							</p>
							<Button
								variant='outline'
								onClick={() => handleAddToCart(item)}
								className='w-full sm:w-auto text-sm'
							>
								Add to cart
							</Button>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
