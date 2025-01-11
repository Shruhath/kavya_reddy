'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useMediaQuery } from 'react-responsive'

const dressItems = [
  { id: 1, image: '/dress-1-thumb.webp', video: '/dress-1.mp4' },
  { id: 2, image: '/dress-2-thumb.webp', video: '/dress-2.mp4' },
  { id: 3, image: '/dress-3-thumb.webp', video: '/dress-3.mp4' },
  { id: 4, image: '/dress-4-thumb.webp', video: '/dress-4.mp4' },
  { id: 5, image: '/dress-5-thumb.webp', video: '/dress-5.mp4' },
  { id: 6, image: '/dress-6-thumb.webp', video: '/dress-6.mp4' },
  { id: 7, image: '/dress-7-thumb.webp', video: '/dress-7.mp4' },
  { id: 8, image: '/dress-8-thumb.webp', video: '/dress-8.mp4' },
  // Add more items as needed
]

export default function DressCatalog() {
  const [activeItem, setActiveItem] = useState<number | null>(null)
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({})
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const isMobile = useMediaQuery({ maxWidth: 767 })

  useEffect(() => {
    dressItems.forEach(item => {
      if (videoRefs.current[item.id]) {
        if (activeItem === item.id) {
          const playPromise = videoRefs.current[item.id]?.play();
          if (playPromise !== undefined) {
            playPromise.then(_ => {
              // Playback started successfully
            }).catch(error => {
              console.log('Video play failed:', error)
            });
          }
        } else {
          videoRefs.current[item.id]?.pause()
          if (videoRefs.current[item.id]) {
            videoRefs.current[item.id]!.currentTime = 0
          }
        }
      }
    })
  }, [activeItem])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300 // Adjust this value to change scroll distance
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  const handleItemInteraction = (id: number | null) => {
    setActiveItem(id)
  }

  return (
    <section id="dress-catalog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Collection</h2>
        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 z-10"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {dressItems.map((item) => (
              <div
                key={item.id}
                className="flex-none w-64 h-96 relative rounded-lg overflow-hidden cursor-pointer"
                onMouseEnter={() => !isMobile && handleItemInteraction(item.id)}
                onMouseLeave={() => !isMobile && handleItemInteraction(null)}
                onClick={() => isMobile && handleItemInteraction(item.id)}
              >
                <Image
                  src={item.image}
                  alt={`Dress ${item.id}`}
                  layout="fill"
                  objectFit="cover"
                />
                <video
                  ref={el => videoRefs.current[item.id] = el}
                  src={item.video}
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                    activeItem === item.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
            ))}
          </div>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 z-10"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

