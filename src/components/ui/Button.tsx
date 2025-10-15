import React, { FC } from 'react'
interface ButtonProps {
  children: string
  className?: string
  type?: 'button' | 'submit'
  onClick?: () => void
}
const Button: FC<ButtonProps> = ({
  children,
  className,
  onClick,
  type = 'button'
}) => {
  return (
    <button
      type={type}
      className={`bg-primary hover:bg-secondary border-2 border-secondary hover:border-primary p-1 text-center hover:text-primary transition ${className} cursor-pointer`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
