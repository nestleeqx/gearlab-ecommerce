import Text from '@/components/ui/Text/Text'

interface iCatalogEmptyState {
	onClearFilters: () => void
}

export default function CatalogEmptyState({
	onClearFilters
}: iCatalogEmptyState) {
	return (
		<div className='mt-6 md:mt-8 text-center py-8 md:py-12 px-4'>
			<Text className='text-sm md:text-body text-neutral-600'>
				No products found matching your filters.
			</Text>
			<button
				onClick={onClearFilters}
				className='mt-3 md:mt-4 text-sm md:text-body text-semantic-blue-900 hover:text-blue-800 hover:underline cursor-pointer'
			>
				Clear all filters
			</button>
		</div>
	)
}
