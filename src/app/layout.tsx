import { Iceland } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/ThemeProvider'

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
      <body className={`${iceland.variable} antialiased`} suppressHydrationWarning={true}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
