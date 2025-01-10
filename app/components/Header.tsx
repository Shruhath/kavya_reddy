'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isHovered ? 'bg-white shadow-md' : 'bg-transparent'
      }`} 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" onClick={scrollToTop} className="w-24 h-12 md:w-48 md:h-24 relative">
          <Image
            src={isScrolled || isHovered ? "/logo-black.png" : "/logo-white.png"}
            alt="Kavya Reddy Logo"
            layout="fill"
            objectFit="contain"
          />
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link href="/" onClick={scrollToTop} className={`text-lg ${isScrolled || isHovered ? 'text-black' : 'text-white'}`}>Home</Link></li>
            <li><Link href="/#gallery" className={`text-lg ${isScrolled || isHovered ? 'text-black' : 'text-white'}`}>Gallery</Link></li>
            <li><Link href="/#dress-catalog" className={`text-lg ${isScrolled || isHovered ? 'text-black' : 'text-white'}`}>Dresses</Link></li>
            <li><Link href="/#contact" className={`text-lg ${isScrolled || isHovered ? 'text-black' : 'text-white'}`}>Contact</Link></li>
          </ul>
        </nav>
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className={isScrolled || isHovered ? 'text-black' : 'text-white'} />
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-2">
              <li><Link href="/" onClick={(e) => { scrollToTop(e); setIsMenuOpen(false); }} className="block text-lg text-black">Home</Link></li>
              <li><Link href="/#gallery" onClick={() => setIsMenuOpen(false)} className="block text-lg text-black">Gallery</Link></li>
              <li><Link href="/#dress-catalog" onClick={() => setIsMenuOpen(false)} className="block text-lg text-black">Dresses</Link></li>
              <li><Link href="/#contact" onClick={() => setIsMenuOpen(false)} className="block text-lg text-black">Contact</Link></li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}

