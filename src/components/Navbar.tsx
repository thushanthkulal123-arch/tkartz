import logo from "../assets/logo.svg";
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Instagram } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 50)
      if (currentY > lastScrollY && currentY > 200) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      setLastScrollY(currentY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 lg:px-20 pt-6"
      initial={{ y: -100 }}
      animate={{ y: hidden ? -120 : 0 }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <nav
        className={`glass-nav shadow-nav flex items-center justify-between rounded-pill px-3 py-2 gap-4 w-full max-w-content transition-all duration-300 ${
          scrolled ? 'bg-white/70' : 'bg-white/50'
        }`}
      >
        {/* Logo */}
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('#home') }} className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="Logo" className="h-10 w-10 object-contain" />
          <span className="tk-gradient-text font-poppins font-semibold text-xl tracking-widest hidden sm:block">
            T K A R T Z
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
              className="relative font-poppins font-medium text-sm text-tk-gray hover:text-[#5A2CA0] transition-all duration-300 after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#5A2CA0] after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com/thushanth_kulal"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex w-[38px] h-[38px] items-center justify-center rounded-full hover:bg-white/80 transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={18} className="tk-gradient-text" />
          </a>
          <a
            href="https://wa.me/917760196290"
            target="_blank"
            rel="noopener noreferrer"
            className="tk-gradient-bg text-white font-poppins font-semibold text-sm rounded-pill px-6 py-2.5 hover:opacity-90 transition-opacity hidden sm:inline-flex"
          >
            Order Now
          </a>
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/80"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-4 right-4 glass-nav rounded-card shadow-card p-6 lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                  className="font-poppins font-medium text-sm text-tk-gray hover:text-tk-dark py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/917760196290"
                target="_blank"
                rel="noopener noreferrer"
                className="tk-gradient-bg text-white font-poppins font-semibold text-sm rounded-pill px-6 py-3 text-center mt-2"
              >
                Order Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
