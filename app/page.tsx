import Header from './components/Header'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import DressCatalog from './components/DressCatalog'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Gallery />
      <DressCatalog />
      <Contact />
      <Footer />
    </main>
  )
}

