import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Database Table Explorer — Visual Schema Maps',
  description: 'Interactive visual maps of database schemas showing table relationships, foreign keys, and data flow. Built for backend developers and DBAs.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e724a6ac-1085-4ca0-b166-88da1b5a9a08"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
