'use client'

import { useState, useEffect, useRef } from 'react'

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const checkIfMobile = () => {
      const mediaQuery = window.matchMedia('(max-width: 768px)')
      setIsMobile(mediaQuery.matches)
    }

    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)

    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.addEventListener('canplay', () => {
        video.play().catch(error => {
          console.log('Autoplay was prevented:', error)
        })
      })
    }
  }, [])

  return (
    <section className="relative h-screen">
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/hero-poster.jpg"
      >
        <source src={isMobile ? "/hero-video-mobile.mp4" : "/hero-video-desktop.mp4"} type="video/mp4" />
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

