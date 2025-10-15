import React from 'react'
function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative">
        <div className="relative w-32 h-32">
          <div className="absolute w-full h-full rounded-full border-[3px] border-gray-100/10 border-r-tertiary border-b-tertiary animate-spin duration-500"></div>

          <div
            className="absolute w-full h-full rounded-full border-[3px] border-gray-100/10 border-t-tertiaryanimate-spin duration-1000"
            style={{ animationDirection: 'reverse' }}
          ></div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-tr from-tertiary/10 via-transparent to-tertiary/5 animate-pulse rounded-full blur-sm"></div>
      </div>
    </div>
  )
}

export default LoadingSpinner
