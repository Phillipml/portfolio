import React from 'react'
import { ReduxProvider } from './ReduxProvider'
import { ThemeProvider } from './ThemeProvider'
import ChatbotProvider from './ChatbotProvider'

function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider>
      <ThemeProvider>
        <ChatbotProvider>{children}</ChatbotProvider>
      </ThemeProvider>
    </ReduxProvider>
  )
}

export default AppProvider
