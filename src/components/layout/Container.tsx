import { ReactNode } from 'react'
type ContainerProps = {
  children: ReactNode
  className?: string
}

function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={`max-w-screen-2x1 h-auto p-4 relative z-10 ${className ? className : ''}`}
    >
      {children}
    </div>
  )
}

export default Container
