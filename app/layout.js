import './globals.css'

export const metadata = {
  title: 'Offline TikTok Player',
  description: 'Download the Offline TikTok Player App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
