import './globals.css'
import { Inter, Outfit } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata = {
  title: 'Offline TikTok Player',
  description: 'Download the Offline TikTok Player app and watch saved videos anywhere — no internet required.',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
  themeColor: '#050508',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  )
}
