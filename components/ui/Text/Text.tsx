import { cn } from '@/lib/utils'

interface iText {
	className?: string
	color: 500 | 600
	children: React.ReactNode
}

export default function Text({ className, color = 500, children }: iText) {
	return (
		<p
			className={cn(
				'text-body',
				color == 500 && 'text-neutral-500',
				color == 600 && 'text-neutral-600',
				className
			)}
		>
			{children}
		</p>
	)
}
