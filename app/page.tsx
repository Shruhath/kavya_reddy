import Header from './components/Header'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import DressCatalog from './components/DressCatalog'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Gallery />
      <DressCatalog />
      <Contact />
    </main>
  )
}

