import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Namer',
  description: 'A component collection',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="darkGreenTheme">
      <body>
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <Link href="/" className="btn font-bold btn-ghost normal-case text-xl">Namer UI</Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li><Link href="/components">Components</Link></li>
              <li><Link href="/about">About</Link></li>
            </ul>
          </div>
        </div>
        {children}
      </body>
    </html>
  )
}