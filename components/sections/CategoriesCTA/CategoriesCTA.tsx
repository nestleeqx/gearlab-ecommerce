'use client'
import PageContainer from '@/components/layout/PageContainer/PageContainer'
import { Button } from '@/components/ui/Button/Button'
import Text from '@/components/ui/Text/Text'
import Title from '@/components/ui/Title/Title'
import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function CategoriesCTA() {
	const router = useRouter()
	return (
		<div className='min-h-100 lg:min-h-76 mt-16 lg:mt-42 bg-linear-to-r from-neutral-light-100 to-neutral-light-900'>
			<PageContainer className='py-12 lg:py-0 lg:mt-13 flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0'>
				<div className='text-center lg:text-left max-w-full lg:max-w-none'>
					<Title className='font-bold px-4 lg:px-0 text-2xl md:text-3xl lg:text-3xl'>
						Browse Our Fashion Paradise!
					</Title>
					<Text
						className='mt-4 lg:mt-6 max-w-full lg:max-w-115 px-4 lg:px-0'
						color={500}
					>
						Step into a world of style and explore our diverse
						collection of clothing categories.
					</Text>
					<Button
						variant='default'
						size='lg'
						className='mt-6 lg:mt-8 font-medium rounded-sm'
						onClick={() => router.push('/products')}
					>
						Start Browsing {''} <MoveRight />
					</Button>
				</div>
				<div className='shrink-0'>
					<Image
						src='/images/categories-cta/categories-cta-back.png'
						alt='categories-cta'
						width={180}
						height={248}
						preload={true}
						className='lg:w-56.25 lg:h-77.75'
						style={{ width: 'auto', height: 'auto' }}
					/>
				</div>
			</PageContainer>
		</div>
	)
}
