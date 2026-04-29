'use client'
import { Iceland } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/providers/ThemeProvider'
import { ReduxProvider } from '@/providers/ReduxProvider'
import HomeBackground from '@/components/ui/HomeBackground'
import Header from '@/components/layout/Header'
import ChatBot from '@/components/layout/Chatbot'
import AppProvider from '@/providers/AppProvider'

const iceland = Iceland({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-iceland'
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
