import PageContainer from '@/components/layout/PageContainer/PageContainer'
import BreadcrumbComponent from '@/components/ui/BreadcrumbComponent/BreadcrumbComponent'
import ProductsFilter from '@/components/ui/ProductsFilter/ProductsFilter'

export default function Products() {
	return (
		<div>
			<div className='bg-neutral-light-100 py-6'>
				<BreadcrumbComponent />
			</div>
			<PageContainer className='mt-8'>
				<ProductsFilter />
			</PageContainer>
		</div>
	)
}
