import AdvantagesCard from '@/components/ui/AdvantagesCard/AdvantagesCard'
import { Award, ShieldCheck, Truck } from 'lucide-react'

export default function Advantages() {
	return (
		<div className='container mx-auto mt-22 flex justify-around items-center'>
			<AdvantagesCard
				icon={<Truck className='w-10 text-neutral-900' />}
				title='Free Shipping'
				content="Upgrade your style today and get FREE shipping on all
					orders! Don't miss out."
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
			/>
		</div>
	)
}
