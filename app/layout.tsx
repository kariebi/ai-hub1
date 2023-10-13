import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'


import { ToasterProvider } from '@/components/toaster-provider'
import { ModalProvider } from '@/components/modal-provider'


import './globals.css'


const font = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI-Hub',
  description: 'The Home of AI',
  icons:{
    icon:"/logo.png",
    apple:"/logo.png"
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en" suppressHydrationWarning>
        <body className={font.className}>
          <ToasterProvider />
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
