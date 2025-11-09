import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kanban Board',
  description: 'A beautiful project management Kanban board app',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%239333ea" width="100" height="100"/><rect fill="%23a78bfa" x="10" y="10" width="30" height="30" rx="4"/><rect fill="%23a78bfa" x="10" y="50" width="30" height="30" rx="4"/><rect fill="%2306b6d4" x="50" y="10" width="40" height="30" rx="4"/></svg>',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
