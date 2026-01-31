import { cn } from '@/lib/utils'

interface iAdvantagesCard {
	icon: React.ReactElement
	title: string
	content: string
	className?: string
}

export default function AdvantagesCard({
	icon,
	title,
	content,
	className
}: iAdvantagesCard) {
	return (
		<div
			className={cn(
				'flex flex-col md:items-center lg:items-start',
				className
			)}
		>
			<div className='w-12 h-12 rounded-full bg-neutral-light-100 flex justify-center items-center'>
				{icon}
			</div>
			<div className='mt-4 md:text-center lg:text-left'>
				<h5 className='text-base md:text-lg lg:text-heading-h5 text-neutral-800 font-semibold'>
					{title}
				</h5>
				<p className='text-sm md:text-body text-neutral-500 mt-2 md:mt-3 max-w-68'>
					{content}
				</p>
			</div>
		</div>
	)
}
