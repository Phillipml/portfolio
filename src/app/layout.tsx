'use client'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'
import HomeBackground from '@/components/ui/HomeBackground'
import Header from '@/components/layout/Header'
import ChatBot from '@/components/layout/Chatbot'
import AppProvider from '@/providers/AppProvider'

const iceland = Open_Sans({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-open-sans'
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${iceland.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <AppProvider>
          <HomeBackground />
          <Header />
          {children}
          <ChatBot />
          <Analytics />
        </AppProvider>
      </body>
    </html>
  )
}
