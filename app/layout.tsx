import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FormShield — Auto-fill forms without sharing personal data',
  description: 'Browser extension that fills forms using local encrypted profiles. No cloud storage. Your data never leaves your device.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="cad34b5e-da20-4232-8652-65b87438c77b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
