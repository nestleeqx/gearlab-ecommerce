import AdvantagesSection from '@/components/sections/AdvantagesSection/AdvantagesSection'
import BannerSection from '@/components/sections/BannerSection/BannerSection'
import BestSellingSection from '@/components/sections/BestSellingSection/BestSellingSection'
import CategoriesCTA from '@/components/sections/CategoriesCTA/CategoriesCTA'
import ProductList from '@/components/sections/ProductList/ProductList'
import BestSellersSkeleton from '@/components/ui/Skeletons/BestSellersSkeleton/BestSellersSkeleton'
import ProductListSkeleton from '@/components/ui/Skeletons/ProductListSkeleton/ProductListSkeleton'
import {
	getBestSellers,
	getNewProducts,
	getPopularProducts
} from '@/services/products'
import { Suspense } from 'react'

export const revalidate = 60

export default async function Home() {
	const [popularProducts, newProducts, bestSellers] = await Promise.all([
		getPopularProducts(4),
		getNewProducts(4),
		getBestSellers(4)
	])

	return (
		<div>
			<BannerSection />
			<AdvantagesSection />
			<Suspense fallback={<BestSellersSkeleton />}>
				<BestSellingSection bestSellers={bestSellers} />
			</Suspense>
			<CategoriesCTA />
			<Suspense fallback={<ProductListSkeleton />}>
				<ProductList
					popularProducts={popularProducts}
					newProducts={newProducts}
				/>
			</Suspense>
		</div>
	)
}
