import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'OS QUIZ',
  description: 'QUIZ about OS',
  generator: 'NAYAN135.COM.NP',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
