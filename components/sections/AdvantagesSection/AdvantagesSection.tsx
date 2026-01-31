import PageContainer from '@/components/layout/PageContainer/PageContainer'
import AdvantagesCard from '@/components/ui/AdvantagesCard/AdvantagesCard'
import { Award, ShieldCheck, Truck } from 'lucide-react'

export default function AdvantagesSection() {
	return (
		<PageContainer className='mt-12 lg:mt-22'>
			<div className='flex flex-col md:flex-wrap md:flex-row justify-around items-center gap-8 md:gap-4'>
				<AdvantagesCard
					icon={<Truck className='w-10 text-neutral-900' />}
					title='Free Shipping'
					content="Upgrade your style today and get FREE shipping on all orders! Don't miss out."
				/>
				<AdvantagesCard
					icon={<Award className='w-10 text-neutral-900' />}
					title='Satisfaction Guarantee'
					content='Shop confidently with our Satisfaction Guarantee: Love it or get a refund.'
				/>
				<AdvantagesCard
					icon={<ShieldCheck className='w-10 text-neutral-900' />}
					title='Secure Payment'
					content='Your security is our priority. Your payments are secure with us.'
					className='mt-0 mb-5 md:mt-10 md:mb-5 lg:mt-0 lg:mb-0'
				/>
			</div>
		</PageContainer>
	)
}
