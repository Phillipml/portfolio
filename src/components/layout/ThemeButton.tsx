'use client'

import { useTheme } from '@/hooks/useTheme'
import React, { useState, useEffect } from 'react'
import { BsSun, BsMoon } from 'react-icons/bs'

function ThemeButton() {
  const { currentTheme, darkTheme, lightTheme } = useTheme()
  const [isDark, setIsDark] = useState(currentTheme === 'dark')

  useEffect(() => {
    setIsDark(currentTheme === 'dark')
  }, [currentTheme])

  const toggleTheme = () => {
    if (isDark) {
      lightTheme()
    } else {
      darkTheme()
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className={`
        flex items-center justify-center gap-2 p-3
        rounded-full border-2 hover:scale-105 cursor-pointer
        ${isDark 
          ? 'bg-tertiary border-secondary text-secondary hover:bg-secondary hover:text-tertiary' 
          : 'bg-white border-primary text-primary hover:bg-primary hover:text-white'
        }
        transition-all duration-300 shadow-lg hover:shadow-xl
      `}
      title={isDark ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
    >
      {isDark ? <BsSun size={20} /> : <BsMoon size={20} />}
    </button>
  )
}

export default ThemeButton
