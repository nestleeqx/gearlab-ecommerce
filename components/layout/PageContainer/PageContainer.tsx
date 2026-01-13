import { cn } from '@/lib/utils'

interface iPageContainer {
	className?: string
	children: React.ReactNode
}

export default function PageContainer({ className, children }: iPageContainer) {
	return (
		<section className={cn('container mx-auto', className)}>
			{children}
		</section>
	)
}
