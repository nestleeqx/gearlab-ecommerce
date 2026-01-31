import { SortOption, sortOptions } from '@/data/sort.data'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue
} from '../Select/Select'

interface iSortSelect {
	sortBy: SortOption
	handleSortChange: (value: SortOption) => void
}

export default function SortSelect({ sortBy, handleSortChange }: iSortSelect) {
	return (
		<Select
			value={sortBy}
			onValueChange={handleSortChange}
		>
			<SelectTrigger
				size='sm'
				className='w-full sm:w-auto'
			>
				<SelectValue placeholder='SORT BY' />
			</SelectTrigger>
			<SelectContent position='popper'>
				<SelectGroup>
					<SelectLabel>SORT BY</SelectLabel>
					{sortOptions.map(elem => {
						return (
							<SelectItem
								key={elem.value}
								value={elem.value}
							>
								{elem.label}
							</SelectItem>
						)
					})}
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}
