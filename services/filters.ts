import productsData from '@/data/products.json'
export async function getCategories() {
	// Подсчитываем количество товаров в каждой категории
	const categoryCounts: Record<string, number> = {}

	productsData.products.forEach(product => {
		categoryCounts[product.category] =
			(categoryCounts[product.category] || 0) + 1
	})

	return Object.entries(categoryCounts).map(([name, count]) => ({
		name,
		count
	}))
}

export async function getColors() {
	const allColors = productsData.products.flatMap(p => p.color)
	const colorCounts: Record<string, number> = {}

	allColors.forEach(color => {
		colorCounts[color] = (colorCounts[color] || 0) + 1
	})

	// Возвращаем цвета с количеством
	return Object.entries(colorCounts).map(([color, count]) => ({
		color,
		count
	}))
}

export async function getSizes() {
	const allSizes = productsData.products.flatMap(p => p.size)
	const sizeCounts: Record<string, number> = {}

	allSizes.forEach(size => {
		sizeCounts[size] = (sizeCounts[size] || 0) + 1
	})

	return Object.entries(sizeCounts).map(([size, count]) => ({
		size,
		count
	}))
}
