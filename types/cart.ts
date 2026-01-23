export interface CartItem {
	id: number
	slug: string
	title: string
	price: number
	image: string
	color: string
	size: string
	quantity: number
}

export interface CartState {
	items: CartItem[]
	total: number
	itemCount: number
}
