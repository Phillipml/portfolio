'use client'
import { useTheme } from '@/hooks/useTheme'
import React, { useState, useEffect } from 'react'

interface Star {
  id: number
  x: number
  y: number
  size: number
  delay: number
}

const generateStars = (count: number): Star[] =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 3
  }))

const HomeBackground = () => {
  const [stars, setStars] = useState<Star[]>([])
  const { currentTheme } = useTheme()
  const isDarkTheme = currentTheme === 'dark'

  useEffect(() => {
    const timer = setTimeout(() => {
      setStars(generateStars(100))
    }, 0)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <style jsx global>{`
        @keyframes twinkle {
          0% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.2);
          }
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
        }
      `}</style>

      <div className="fixed inset-0 bg-primary -z-10 animate-fade-in">
        {stars.map((star) => (
          <div
            key={star.id}
            className={`absolute rounded-full ${
              isDarkTheme
                ? 'bg-secondary shadow-[0_0_6px_#ffffff]'
                : 'bg-tertiary shadow-[0_0_6px_#001a19]'
            }`}
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: `${star.x}%`,
              top: `${star.y}%`,
              animation: `twinkle ${2 + star.delay}s infinite ease-in-out`
            }}
          />
        ))}
      </div>
    </>
  )
}

export default HomeBackground
