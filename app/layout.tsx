import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

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
      <body className="flex flex-col min-h-screen">
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
        <main className="flex-grow">
          {children}
        </main>
        <footer className="h-[32px] bg-[#242434] flex items-center justify-center">
          <p>
            Like this project? Star it on{' '}
            <a 
              href="https://github.com/Northstrix/namer-ui" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="underline cursor-pointer hover:opacity-80"
            >
              GitHub
            </a>!
          </p>
        </footer>
      </body>
    </html>
  )
}