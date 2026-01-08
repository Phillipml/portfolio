'use client'
import { ThemeContext } from '@/context/ThemeContext'
import { ReactNode, useEffect, useState } from 'react'

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('dark')
  const lightTheme = () => setCurrentTheme('light')
  const darkTheme = () => setCurrentTheme('dark')

  useEffect(() => {
    const initializeTheme = () => {
      const theme = localStorage.getItem('data-theme') as
        | 'light'
        | 'dark'
        | null
      if (theme) {
        setCurrentTheme(theme)
      } else {
        setCurrentTheme('dark')
      }
    }

    initializeTheme()
  }, [])
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme)
    localStorage.setItem('data-theme', currentTheme)
  }, [currentTheme])

  return (
    <ThemeContext.Provider value={{ currentTheme, lightTheme, darkTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
