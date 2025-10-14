import React, { ReactNode } from 'react'

function Container({ children }: { children: ReactNode }) {
  return <div className="max-w-screen-2x1 h-auto p-4">{children}</div>
}

export default Container
