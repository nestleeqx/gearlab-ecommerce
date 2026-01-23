'use client'

import { useCart } from '@/context/CartContext'
import { toast } from 'sonner'

interface iProductCartDetail {
	id: number
	slug: string
	title: string
	price: number
	image: string
	color: string
	size: string
	quantity?: number
}

export function useAddToCart() {
	const { addToCart } = useCart()

	const handleAddToCart = (product: iProductCartDetail) => {
		const quantity = product.quantity || 1
		const cartItem = {
			...product,
			quantity: quantity
		}

		addToCart(cartItem)

		toast(`${product.title} was successfully added to the cart`, {
			position: 'bottom-left'
		})

		return true
	}

	return { handleAddToCart }
}
