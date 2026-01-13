interface iAdvantagesCard {
	icon: React.ReactElement
	title: string
	content: string
}

export default function AdvantagesCard({
	icon,
	title,
	content
}: iAdvantagesCard) {
	return (
		<div>
			<div className='w-12 h-12 rounded-full bg-neutral-light-100 flex justify-center items-center'>
				{icon}
			</div>
			<div className='mt-4'>
				<h5 className='text-heading-h5 text-neutral-800 font-semibold'>
					{title}
				</h5>
				<p className='text-body text-neutral-500 mt-3 max-w-68'>
					{content}
				</p>
			</div>
		</div>
	)
}
