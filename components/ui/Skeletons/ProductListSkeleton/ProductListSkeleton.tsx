import PageContainer from '@/components/layout/PageContainer/PageContainer'
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger
} from '@/components/ui/Tabs/Tabs'
import ProductCardSkeleton from '../ProductCardSkeleton/ProductCardSkeleton'

export default function ProductListSkeleton() {
	return (
		<PageContainer className='mt-38'>
			<Tabs
				defaultValue='featured'
				className='items-center'
			>
				<TabsList>
					<TabsTrigger value='featured'>Featured</TabsTrigger>
					<TabsTrigger value='latest'>Latest</TabsTrigger>
				</TabsList>
				<TabsContent
					value='featured'
					className='flex mt-12 space-x-10'
				>
					{Array.from({ length: 4 }).map((_, index) => (
						<ProductCardSkeleton key={index} />
					))}
				</TabsContent>
				<TabsContent
					value='latest'
					className='flex mt-12 space-x-10'
				>
					{Array.from({ length: 4 }).map((_, index) => (
						<ProductCardSkeleton key={`latest-${index}`} />
					))}
				</TabsContent>
			</Tabs>
		</PageContainer>
	)
}
