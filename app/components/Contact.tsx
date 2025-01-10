import { Instagram, Facebook, Youtube, Phone, Mail, Twitter } from 'lucide-react'
import Image from 'next/image'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Contact Us</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-xl font-semibold mb-6">FOLLOW US</h3>
            <div className="flex justify-center items-center gap-6">
              <a href="https://www.instagram.com/kavyareddy" className="hover:opacity-80 transition-opacity">
                <Instagram className="w-7 h-7" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://www.facebook.com/kavyareddy" className="hover:opacity-80 transition-opacity">
                <Facebook className="w-7 h-7" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://wa.me/919912916389" className="hover:opacity-80 transition-opacity">
                <Image 
                  src="/whatsapp-icon.png" 
                  alt="WhatsApp" 
                  width={28} 
                  height={28}
                />
              </a>
              <a href="https://www.youtube.com/kavyareddy" className="hover:opacity-80 transition-opacity">
                <Youtube className="w-7 h-7" />
                <span className="sr-only">YouTube</span>
              </a>
              <a href="https://www.pinterest.com/kavyareddy" className="hover:opacity-80 transition-opacity">
                <Image 
                  src="/pinterest-icon.png" 
                  alt="Pinterest" 
                  width={28} 
                  height={28}
                />
              </a>
              <a href="https://twitter.com/kavyareddy" className="hover:opacity-80 transition-opacity">
                <Twitter className="w-7 h-7" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">CONTACT US AT</h3>
              <div className="space-y-2">
                <a href="tel:+919912916389" className="flex items-center gap-2 hover:text-gray-600">
                  <Phone className="w-5 h-5" />
                  <span>+91 9912916389 (DESIGNER)</span>
                </a>
                <a href="tel:+917995944735" className="flex items-center gap-2 hover:text-gray-600">
                  <Phone className="w-5 h-5" />
                  <span>+91 7995944735 (DEVELOPER)</span>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">EMAIL US ON</h3>
              <div className="space-y-2">
                <a href="mailto:kolankavya3@gmail.com" className="flex items-center gap-2 hover:text-gray-600">
                  <Mail className="w-5 h-5" />
                  <span>kolankavya3@gmail.com</span>
                </a>
                <a href="mailto:shruhathkreddy@gmail.com" className="flex items-center gap-2 hover:text-gray-600">
                  <Mail className="w-5 h-5" />
                  <span>shruhathkreddy@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

