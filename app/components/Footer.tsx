import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {currentYear} Kavya Reddy. All rights reserved.</p>
          </div>
          <div className="text-center md:text-right">
            <p>Developed by <Link href="https://www.ushodayanetworks.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">Ushodaya Networks</Link></p>
          </div>
        </div>
      </div>
    </footer>
  )
}

