import PageContainer from '@/components/layout/PageContainer/PageContainer'
import { cn } from '@/lib/utils'
import BreadcrumbComponent from '../BreadcrumbComponent/BreadcrumbComponent'
import Title from '../Title/Title'

interface iPageTitleWide {
	title: string
	isPrimary?: boolean
}

export default function PageTitleWide({
	title,
	isPrimary = false
}: iPageTitleWide) {
	return (
		<div
			className={cn('bg-neutral-light-100 py-10', {
				'bg-semantic-green-100': isPrimary
			})}
		>
			<PageContainer>
				<Title className='mb-3'>{title}</Title>
				<BreadcrumbComponent />
			</PageContainer>
		</div>
	)
}
