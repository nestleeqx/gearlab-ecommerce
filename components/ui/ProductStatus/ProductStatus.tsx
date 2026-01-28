import { Badge } from '@/components/ui/Badge/Badge'

interface iProductStatus {
	status: boolean
}

export default function ProductStatus({ status }: iProductStatus) {
	return (
		<Badge
			variant='outline'
			className='border border-neutral-100 text-neutral-500 bg-transparent py-1 px-4 pointer-events-none'
		>
			{status ? 'IN STOCK' : 'OUT OF STOCK'}
		</Badge>
	)
}
