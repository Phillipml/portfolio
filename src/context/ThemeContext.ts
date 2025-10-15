import { Theme } from '@/utils/theme'
import { createContext } from 'react'

interface ThemeProps {
  currentTheme: 'light' | 'dark'
  lightTheme: () => void
  darkTheme: () => void
}

export const ThemeContext = createContext<ThemeProps | undefined>(undefined)
