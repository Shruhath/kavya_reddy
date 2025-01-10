'use client'

import { useState, useEffect } from 'react'

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      const mediaQuery = window.matchMedia('(max-width: 768px)')
      setIsMobile(mediaQuery.matches)
    }

    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)

    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  return (
    <section className="relative h-screen">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/hero-poster.jpg"
      >
        {isMobile ? (
          <source src="/hero-video-mobile.mp4" type="video/mp4; codecs=hevc,mp4a.40.2" />
        ) : (
          <source src="/hero-video-desktop.mp4" type="video/mp4" />
        )}
        <source src="/hero-video.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <img
            src="/only_kr.png"
            alt="Hero Center Photo"
            className="w-full max-w-md md:max-w-lg object-contain"
          />
        </div>
      </div>
    </section>
  )
}

