'use client'
import PageContainer from '@/components/layout/PageContainer/PageContainer'
import ProductCard from '@/components/ui/ProductCard/ProductCard'
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger
} from '@/components/ui/Tabs/Tabs'
import { iProduct } from '@/services/products'
import { useEffect, useRef, useState } from 'react'

interface ProductListProps {
	popularProducts: iProduct[] | null
	newProducts: iProduct[]
}

export default function ProductList({
	popularProducts,
	newProducts
}: ProductListProps) {
	const [isVisible, setIsVisible] = useState(false)
	const sectionRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true)
				}
			},
			{ threshold: 0.1, rootMargin: '50px' }
		)

		if (sectionRef.current) {
			observer.observe(sectionRef.current)
		}

		return () => observer.disconnect()
	}, [])

	return (
		<div ref={sectionRef}>
			<PageContainer className='mt-16 lg:mt-38'>
				<div className='flex flex-col items-center'>
					<Tabs
						defaultValue='featured'
						className='w-full'
					>
						<TabsList
							className={`mx-auto transition-all duration-700 ease-out ${
								isVisible
									? 'opacity-100 translate-y-0'
									: 'opacity-0 translate-y-4'
							}`}
						>
							<TabsTrigger value='featured'>Featured</TabsTrigger>
							<TabsTrigger value='latest'>Latest</TabsTrigger>
						</TabsList>

						<TabsContent
							value='featured'
							className='mt-0'
						>
							<div className='hidden lg:flex mt-12 space-x-10 justify-center'>
								{popularProducts &&
									popularProducts.map((elem, index) => (
										<div
											key={elem.id}
											className={`transition-all duration-700 ease-out ${
												isVisible
													? 'opacity-100 translate-y-0'
													: 'opacity-0 translate-y-8'
											}`}
											style={{
												transitionDelay: isVisible
													? `${index * 100}ms`
													: '0ms'
											}}
										>
											<ProductCard
												id={elem.id}
												slug={elem.slug}
												images={elem.images}
												title={elem.title}
												status={elem.status}
												price={elem.price}
												color={elem.color[0]}
												size={elem.size}
											/>
										</div>
									))}
							</div>
							<div className='lg:hidden mt-8'>
								<div className='overflow-x-auto scrollbar-hide -mx-4'>
									<div className='flex gap-4 px-4 pb-2'>
										{popularProducts &&
											popularProducts.map(
												(elem, index) => (
													<div
														key={`mob-${elem.id}`}
														className={`shrink-0 w-70 transition-all duration-700 ease-out ${
															isVisible
																? 'opacity-100 translate-y-0'
																: 'opacity-0 translate-y-8'
														}`}
														style={{
															transitionDelay:
																isVisible
																	? `${index * 100}ms`
																	: '0ms'
														}}
													>
														<ProductCard
															id={elem.id}
															slug={elem.slug}
															images={elem.images}
															title={elem.title}
															status={elem.status}
															price={elem.price}
															color={
																elem.color[0]
															}
															size={elem.size}
														/>
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
								{newProducts.map((elem, index) => (
									<div
										key={elem.id}
										className={`transition-all duration-700 ease-out ${
											isVisible
												? 'opacity-100 translate-y-0'
												: 'opacity-0 translate-y-8'
										}`}
										style={{
											transitionDelay: isVisible
												? `${index * 100}ms`
												: '0ms'
										}}
									>
										<ProductCard
											id={elem.id}
											slug={elem.slug}
											images={elem.images}
											title={elem.title}
											status={elem.status}
											price={elem.price}
											color={elem.color[0]}
											size={elem.size}
										/>
									</div>
								))}
							</div>

							<div className='lg:hidden mt-8'>
								<div className='overflow-x-auto scrollbar-hide -mx-4'>
									<div className='flex gap-4 px-4 pb-2'>
										{newProducts.map((elem, index) => (
											<div
												key={`mob-${elem.id}`}
												className={`shrink-0 w-70 transition-all duration-700 ease-out ${
													isVisible
														? 'opacity-100 translate-y-0'
														: 'opacity-0 translate-y-8'
												}`}
												style={{
													transitionDelay: isVisible
														? `${index * 100}ms`
														: '0ms'
												}}
											>
												<ProductCard
													id={elem.id}
													slug={elem.slug}
													images={elem.images}
													title={elem.title}
													status={elem.status}
													price={elem.price}
													color={elem.color[0]}
													size={elem.size}
												/>
											</div>
										))}
									</div>
								</div>
							</div>
						</TabsContent>
					</Tabs>
				</div>
			</PageContainer>
		</div>
	)
}
