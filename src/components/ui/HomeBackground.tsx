'use client'
import React, { useState, useEffect } from 'react'

const HomeBackground = (_props: unknown) => {
  const [stars, setStars] = useState<Array<{
    id: number
    x: number
    y: number
    size: number
    delay: number
  }>>([])

  useEffect(() => {
    setStars(Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 3
    })))
  }, [])

  return (
    <>
      <style jsx global>{`
        @keyframes twinkle {
          0% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
        }
      `}</style>
      <div className="fixed top-0 left-0 w-full h-full bg-quaternary -z-10">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-tertiary rounded-full animate-pulse shadow-[0_0_6px_#ffffff]"
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
