import Logo from '@/components/ui/Logo/Logo'
import Menu from '@/components/ui/Menu/Menu'

export default function Header() {
	return (
		<header className='mt-7 flex items-center'>
			<Logo />
			<Menu />
		</header>
	)
}
