import type { NextConfig } from 'next'
import { hostname } from 'os'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 'github.com'
      },
      { protocol: 'https', hostname: 'phillipml-personal-api.vercel.app' }
    ]
  }
}

export default nextConfig
