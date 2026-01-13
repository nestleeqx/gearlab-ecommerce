import { cn } from '@/lib/utils'

interface iTitle {
	className?: string
	children: React.ReactNode
}

export default function Title({ className, children }: iTitle) {
	return (
		<h3
			className={cn(
				'text-heading-h3 text-neutral-900 font-bold',
				className
			)}
		>
			{children}
		</h3>
	)
}
