import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lescobags - Premium FIBC & Big Bags Since 1919',
  description: 'Custom-made woven packaging solutions from Serbia to Europe. ISO certified quality.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
