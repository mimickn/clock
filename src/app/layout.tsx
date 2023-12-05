import type { Metadata } from 'next'
import { Inter, Jost } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: "--font-inter",
  subsets: ['latin'],
});
const JostFont = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Clock',
  description: 'Clock',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${JostFont.variable}`}>{children}</body>
    </html>
  )
}
