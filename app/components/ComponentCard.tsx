'use client'

import Link from 'next/link'

interface ComponentCardProps {
  slug: string
  name: string
  description: string
}

export function ComponentCard({ slug, name, description }: ComponentCardProps) {
  return (
    <div className="border border-option-highlight p-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-2">{name}</h2>
      <p className="text-text-gray mb-4">{description}</p>
      <Link href={`/components?component=${slug}`} className="text-foreground underline">
        View Component
      </Link>
    </div>
  )
}