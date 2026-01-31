import PageContainer from '@/components/layout/PageContainer/PageContainer'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../Tabs/Tabs'
import ProductCardSkeleton from '../ProductCardSkeleton/ProductCardSkeleton'

export default function ProductListSkeleton() {
	return (
		<PageContainer className='mt-16 lg:mt-38'>
			<div className='flex flex-col items-center'>
				<Tabs
					defaultValue='featured'
					className='w-full'
				>
					<TabsList className='mx-auto'>
						<TabsTrigger value='featured'>Featured</TabsTrigger>
						<TabsTrigger value='latest'>Latest</TabsTrigger>
					</TabsList>

					<TabsContent
						value='featured'
						className='mt-0'
					>
						<div className='hidden lg:flex mt-12 space-x-10 justify-center'>
							{Array.from({ length: 4 }).map((_, index) => (
								<ProductCardSkeleton key={index} />
							))}
						</div>
						<div className='lg:hidden mt-8'>
							<div className='overflow-x-auto scrollbar-hide -mx-4'>
								<div className='flex gap-4 px-4 pb-2'>
									{Array.from({ length: 4 }).map(
										(_, index) => (
											<div
												key={index}
												className='shrink-0 w-70'
											>
												<ProductCardSkeleton />
											</div>
										)
									)}
								</div>
							</div>
						</div>
					</TabsContent>
					<TabsContent
						value='latest'
						className='mt-0'
					>
						<div className='hidden lg:flex mt-12 space-x-10 justify-center'>
							{Array.from({ length: 4 }).map((_, index) => (
								<ProductCardSkeleton key={`latest-${index}`} />
							))}
						</div>
						<div className='lg:hidden mt-8'>
							<div className='overflow-x-auto scrollbar-hide -mx-4'>
								<div className='flex gap-4 px-4 pb-2'>
									{Array.from({ length: 4 }).map(
										(_, index) => (
											<div
												key={`latest-mob-${index}`}
												className='shrink-0 w-70'
											>
												<ProductCardSkeleton />
											</div>
										)
									)}
								</div>
							</div>
						</div>
					</TabsContent>
				</Tabs>
			</div>
		</PageContainer>
	)
}
