import React from 'react'
import { ReduxProvider } from './ReduxProvider'
import { ThemeProvider } from './ThemeProvider'

function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </ReduxProvider>
  )
}

export default AppProvider
