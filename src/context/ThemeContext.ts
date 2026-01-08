import { createContext } from 'react'

interface ThemeProps {
  currentTheme: 'light' | 'dark'
  lightTheme: () => void
  darkTheme: () => void
  isDarkTheme: boolean
}

export const ThemeContext = createContext<ThemeProps | undefined>(undefined)
