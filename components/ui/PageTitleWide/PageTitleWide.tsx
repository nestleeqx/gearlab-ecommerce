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
			className={cn(
				'bg-neutral-light-100 py-6 md:py-6 lg:py-8 xl:py-10',
				{
					'bg-semantic-green-100': isPrimary
				}
			)}
		>
			<PageContainer>
				<Title className='mb-1 text-heading-h5 xl:mb-3 lg:text-heading-h4 xl:text-heading-h3'>
					{title}
				</Title>
				<BreadcrumbComponent />
			</PageContainer>
		</div>
	)
}
