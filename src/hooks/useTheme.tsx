import { ThemeContext } from '@/context/ThemeContext'
import { useContext } from 'react'

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme precisa de um Provider')
  }
  const theme = context?.currentTheme === 'dark'

  return {
    currentTheme: context?.currentTheme,
    lightTheme: context?.lightTheme,
    darkTheme: context?.darkTheme,
    isDarkTheme: context?.isDarkTheme
  }
}
