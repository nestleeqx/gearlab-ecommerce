import { categoriesList } from '@/app/data/categories.data'
import { productColors, productSizes } from '@/app/data/products.data'
import { Checkbox } from '@/components/ui/Checkbox/Checkbox'
import RangeSlider from '@/components/ui/RangeSlider/RangeSlider'
import Text from '@/components/ui/Text/Text'
import {
	ToggleGroup,
	ToggleGroupItem
} from '@/components/ui/ToggleGroup/ToggleGroup'
import { cn } from '@/lib/utils'

export default function ProductsFilter() {
	return (
		<div className='border border-neutral-100 rounded-sm max-w-62 py-5 px-4.5'>
			<Text className={'text-neutral-900 font-medium'}>Categories</Text>
			<div className='mt-4'>
				{categoriesList.map(elem => {
					return (
						<div
							key={elem.value}
							className='relative flex items-center after:absolute after:bottom-0 after:w-full after:h-px after:bg-neutral-light-200 py-3'
						>
							<Checkbox id={elem.value} />
							<label
								htmlFor={elem.value}
								className='ml-2.5 text-body text-neutral-600'
							>
								{elem.label}
							</label>
						</div>
					)
				})}
			</div>
			<div className='mt-10'>
				<Text className={'text-neutral-900 font-medium'}>Color</Text>
				<div className='mt-4'>
					<ToggleGroup
						type='multiple'
						className='space-x-2.5'
					>
						{productColors.map(elem => {
							return (
								<ToggleGroupItem
									key={elem.id}
									value={elem.color}
									variant='outline'
									className={cn(
										'rounded-full hover:border hover:border-1.7 hover:border-neutral-900',
										{
											'bg-semantic-blue-400':
												elem.color === 'blue-400',
											'bg-semantic-yellow-400':
												elem.color === 'yellow-400',
											'bg-semantic-green-400':
												elem.color === 'green-400',
											'bg-semantic-blue-900':
												elem.color === 'blue-900'
										}
									)}
								></ToggleGroupItem>
							)
						})}
					</ToggleGroup>
				</div>
			</div>
			<div className='mt-10'>
				<Text className={'text-neutral-900 font-medium'}>Size</Text>
				<div className='mt-4'>
					<ToggleGroup
						type='multiple'
						className='flex flex-wrap space-x-2.5 space-y-2.5'
					>
						{productSizes.map(elem => {
							return (
								<ToggleGroupItem
									key={elem.id}
									value={elem.size}
									variant='outline'
									className={cn(
										'rounded-sm border hover:border hover:border-1.7 hover:border-neutral-900'
									)}
								>
									{elem.size.toUpperCase()}
								</ToggleGroupItem>
							)
						})}
					</ToggleGroup>
				</div>
			</div>
			<div className='mt-10'>
				<Text className={'text-neutral-900 font-medium'}>Price</Text>
				<div className='mt-4'>
					<RangeSlider />
				</div>
			</div>
		</div>
	)
}
