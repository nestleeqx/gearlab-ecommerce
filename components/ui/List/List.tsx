import { iLink } from '@/data/footer-links.data'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import Text from '../Text/Text'

interface ListProps {
	className?: string
	title?: string
	links: iLink[]
	mobile?: boolean
}

export default function List({
	className,
	title,
	links,
	mobile = false
}: ListProps) {
	if (mobile) {
		return (
			<ul className='space-y-3'>
				{links.map(elem => (
					<li key={elem.id}>
						<Link
							href={elem.url}
							className='text-sm md:text-base text-neutral-600 hover:text-neutral-900 transition-colors block py-2'
						>
							{elem.icon && elem.icon?.path ? (
								<Image
									src={elem.icon.path}
									alt={elem.label}
									width={elem.icon.width}
									height={elem.icon.height}
									className='inline-block'
								/>
							) : (
								elem.label
							)}
						</Link>
					</li>
				))}
			</ul>
		)
	}

	return (
		<div className={className}>
			{title && (
				<Text
					color={300}
					className='text-xs md:text-sm font-medium text-neutral-300 uppercase tracking-wide'
				>
					{title}
				</Text>
			)}
			<ul
				className={cn('mt-4 lg:mt-10 space-y-2 lg:space-y-4', {
					'flex space-x-4': links.some(link => link.icon)
				})}
			>
				{links.map(elem => {
					return (
						<li key={elem.id}>
							<Link
								href={elem.url}
								className='text-sm md:text-body text-neutral-500 hover:text-neutral-900 transition-colors'
							>
								{elem.icon && elem.icon?.path ? (
									<Image
										src={elem.icon.path}
										alt={elem.label}
										width={elem.icon.width}
										height={elem.icon.height}
									/>
								) : (
									elem.label
								)}
							</Link>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
