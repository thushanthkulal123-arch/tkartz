import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Gallery from './components/Gallery'
import About from './components/About'
import Pricing from './components/Pricing'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <div className="my-16">
      <Gallery />
      </div>
      <div className="my-16">
      <Stats />
      </div>
      <About />
      <div className="my-16"></div>
      <Pricing />
      <Reviews />
      <Contact />
      <div className="my-8"></div>
      <Footer />
    </div>
  )
}

export default App
