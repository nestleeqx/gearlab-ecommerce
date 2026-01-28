interface iIcon {
	path: string
	width: number
	height: number
}

export interface iLink {
	id: string
	label: string
	icon?: iIcon
	url: string
}

export const supportLinks: iLink[] = [
	{
		id: 'faq',
		label: 'FAQ',
		url: '#'
	},
	{
		id: 'term-of-use',
		label: 'Terms of use',
		url: '#'
	},
	{
		id: 'privacy-policy',
		label: 'Privacy Policy',
		url: '#'
	}
]

export const companyLinks: iLink[] = [
	{
		id: 'about-us',
		label: 'About us',
		url: '#'
	},
	{
		id: 'contact',
		label: 'Contact',
		url: '#'
	},
	{
		id: 'careers',
		label: 'Careers',
		url: '#'
	}
]

export const shopLinks: iLink[] = [
	{
		id: 'about-us',
		label: 'My Account',
		url: '/profile'
	},
	{
		id: 'checkout',
		label: 'Checkout',
		url: '/checkout'
	},
	{
		id: 'cart',
		label: 'Cart',
		url: '/cart'
	}
]

export const acceptedPaymentsLinks: iLink[] = [
	{
		id: 'master-card',
		label: '',
		url: '/',
		icon: {
			path: '/icons/payments/master-card-ic.svg',
			width: 30,
			height: 18
		}
	},
	{
		id: 'amex',
		label: '',
		url: '/',
		icon: {
			path: '/icons/payments/amex-ic.svg',
			width: 46,
			height: 18
		}
	},
	{
		id: 'visa',
		label: '',
		url: '/',
		icon: {
			path: '/icons/payments/visa-ic.svg',
			width: 42,
			height: 18
		}
	}
]
