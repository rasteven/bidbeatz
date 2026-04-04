import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'BidBeatz — Exclusive Beat Auctions',
  description:
    'Join the waitlist for BidBeatz, a curated music auction platform for exclusive sound ownership.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-[#05070b] text-white`}>
        {children}
      </body>
    </html>
  )
}