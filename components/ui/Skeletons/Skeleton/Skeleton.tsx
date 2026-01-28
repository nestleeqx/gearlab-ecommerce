'use client'

import { cn } from '@/lib/utils'
import React from 'react'

interface iSkeleton extends React.HTMLAttributes<HTMLDivElement> {
	className?: string
}

function Skeleton({ className, ...props }: iSkeleton) {
	return (
		<div
			className={cn('animate-pulse rounded-md bg-neutral-100', className)}
			{...props}
		/>
	)
}

export { Skeleton }
