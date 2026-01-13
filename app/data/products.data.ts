interface iProducts {
	id: number
	imagePath: string
	title: string
	status: boolean
	price: number
}

export const productsData: iProducts[] = [
	{
		id: 0,
		imagePath: '/images/products/cover_1.png',
		title: 'Classic Monochrome Tees',
		status: true,
		price: 3500
	},
	{
		id: 1,
		imagePath: '/images/products/cover_2.png',
		title: 'Monochromatic Wardrobe',
		status: true,
		price: 2700
	},
	{
		id: 2,
		imagePath: '/images/products/cover_3.png',
		title: 'Essential Neutrals',
		status: true,
		price: 2200
	},
	{
		id: 3,
		imagePath: '/images/products/cover_4.png',
		title: 'UTRAANET Black',
		status: true,
		price: 4300
	}
]
