import { Iceland } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/providers/ThemeProvider'
import { ReduxProvider } from '@/providers/ReduxProvider'
import HomeBackground from '@/components/ui/HomeBackground'

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
        <ReduxProvider>
          <ThemeProvider>
            <HomeBackground />
            {children}
            <Analytics />
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}
