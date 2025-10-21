import { ThemeContext } from '@/context/ThemeContext'
import { useContext } from 'react'

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme precisa de um Provider')
  }

  return {
    currentTheme: context?.currentTheme,
    lightTheme: context?.lightTheme,
    darkTheme: context?.darkTheme
  }
}
