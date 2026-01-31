'use client'
import PageContainer from '@/components/layout/PageContainer/PageContainer'
import { Button } from '@/components/ui/Button/Button'
import Text from '@/components/ui/Text/Text'
import Title from '@/components/ui/Title/Title'
import { MoveRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function NotFound() {
	const router = useRouter()
	return (
		<PageContainer className='mt-20 md:mt-30 text-center px-4 py-12'>
			<Title className='text-2xl md:text-3xl font-bold text-neutral-900'>
				Not Found
			</Title>
			<Text className='mt-2 md:mt-4 text-sm md:text-base text-neutral-600'>
				Could not find requested resource
			</Text>
			<Button
				variant='default'
				size='lg'
				className='mt-4 md:mt-5 font-medium rounded-sm w-full sm:w-auto'
				onClick={() => router.push('/')}
			>
				Return to Home {''} <MoveRight />
			</Button>
		</PageContainer>
	)
}
