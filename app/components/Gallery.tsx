'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useMediaQuery } from 'react-responsive'
import { useInView } from 'react-intersection-observer'

const galleryItems = [
  { 
    id: 1, 
    image: '/gallery-1.webp', 
    mobileImage: '/gallery-1-mobile.webp',
    video: '/gallery-1.mp4', 
    text: "Cherish The Moments With Our Bridal Collection",
    buttonText: "Explore Dresses",
    link: "/#dress-catalog"
  },
  { 
    id: 2, 
    image: '/gallery-2.webp', 
    mobileImage: '/gallery-2-mobile.webp',
    video: '/gallery-2.mp4' 
  },
  { 
    id: 3, 
    image: '/gallery-3.webp', 
    mobileImage: '/gallery-3-mobile.webp',
    video: '/gallery-3.mp4', 
    text: "Celebrate love with our exquisite bridal range.",
    buttonText: "Get in touch",
    link: "https://wa.me/919912916389"
  },
]

export default function Gallery() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null)
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({})
  const isMobile = useMediaQuery({ maxWidth: 767 })

  useEffect(() => {
    galleryItems.forEach(item => {
      if (videoRefs.current[item.id]) {
        if (hoveredItem === item.id && !isMobile) {
          videoRefs.current[item.id]?.play().catch(error => console.log('Video play failed:', error))
        } else {
          videoRefs.current[item.id]?.pause()
          if (videoRefs.current[item.id]) {
            videoRefs.current[item.id]!.currentTime = 0
          }
        }
      }
    })
  }, [hoveredItem, isMobile])

  const openFullscreen = (imageSrc: string) => {
    setFullscreenImage(imageSrc)
  }

  const closeFullscreen = () => {
    setFullscreenImage(null)
  }

  return (
    <section id="gallery" className="py-10 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-10 text-center">Gallery</h2>
        <div className="space-y-8 md:space-y-16">
          {galleryItems.map((item, index) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.1,
            });

            return (
              <div key={item.id} ref={ref} className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:justify-center' : 'md:justify-between'} items-center ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
                {(index === 0 || isMobile || index === galleryItems.length - 1) && (
                  <div className={`w-full md:w-1/3 ${index === 0 ? 'md:pr-8' : 'md:pl-8'} mb-4 md:mb-0 ${index === galleryItems.length - 1 && !isMobile ? 'md:order-2' : ''}`}>
                    <h3 className="text-xl md:text-2xl font-semibold mb-4">{item.text}</h3>
                    {item.link && (
                      <Link href={item.link} className="inline-block px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                        {item.buttonText}
                      </Link>
                    )}
                  </div>
                )}
                <div 
                  className={`relative w-full ${index === 1 ? 'h-[120vh]' : 'h-[416px]'} md:w-2/3 rounded-lg overflow-hidden cursor-pointer ${index === galleryItems.length - 1 ? 'md:order-1' : ''}`}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() => index === 1 && openFullscreen(isMobile ? item.mobileImage : item.image)}
                >
                  <Image
                    src={isMobile ? item.mobileImage : item.image}
                    alt={`Gallery item ${item.id}`}
                    layout="fill"
                    objectFit="cover"
                    loading="lazy"
                  />
                  {!isMobile && (
                    <video
                      ref={el => videoRefs.current[item.id] = el}
                      src={item.video}
                      loop
                      muted
                      playsInline
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                        hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
                      }`}
                      preload="none"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {fullscreenImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center" onClick={closeFullscreen}>
          <Image
            src={fullscreenImage}
            alt="Fullscreen gallery image"
            layout="fill"
            objectFit="contain"
            loading="lazy"
          />
        </div>
      )}
    </section>
  )
}
