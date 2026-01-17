'use client'
import PageContainer from '@/components/layout/PageContainer/PageContainer'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Fragment } from 'react/jsx-runtime'
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator
} from '../Breadcrumb/Breadcrumb'

export default function BreadcrumbComponent() {
	const paths = usePathname()
	const pathNames = paths.split('/').filter(path => path)
	const pathItems = pathNames.map((path, i) => ({
		name: path[0].toUpperCase() + path.slice(1, path.length),
		path: pathNames.slice(0, i + 1).join('/')
	}))

	return (
		<PageContainer>
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink asChild>
							<Link href='/'>Home</Link>
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					{pathItems.map((elem, idx) => {
						return (
							<Fragment key={elem.name}>
								<BreadcrumbItem>
									<BreadcrumbLink asChild>
										<Link
											href={elem.path}
											className={cn({
												'text-neutral-900':
													idx == pathItems.length - 1
											})}
										>
											{elem.name}
										</Link>
									</BreadcrumbLink>
								</BreadcrumbItem>
								{idx < pathNames.length - 1 && (
									<BreadcrumbSeparator />
								)}
							</Fragment>
						)
					})}
				</BreadcrumbList>
			</Breadcrumb>
		</PageContainer>
	)
}
