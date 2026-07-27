import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import wedding1 from '../assets/wedding-1.webp'
import wedding2 from '../assets/wedding-2.webp'
import wedding3 from '../assets/wedding-3.webp'
import wedding4 from '../assets/wedding-4.webp'

const categories = [
  'Wedding',
  'Family',
  'Parents',
  'Kids',
  'Pet',
  'Couple',
  'Memorial',
  'All',
]

const galleryImages = [
  {
    id: 1,
    category: 'Wedding',
    src: wedding1,
    alt: 'Wedding Portrait 1',
  },
  {
    id: 2,
    category: 'Wedding',
    src: wedding2,
    alt: 'Wedding Portrait 2',
  },
  {
    id: 3,
    category: 'Wedding',
    src: wedding3,
    alt: 'Wedding Portrait 3',
  },
  {
    id: 4,
    category: 'Wedding',
    src: wedding4,
    alt: 'Wedding Portrait 4',
  },
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('Wedding')

  const filtered =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory)
        return (
    <section
      id="gallery"
      className="relative w-full bg-white rounded-t-section -mt-6 z-10"
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-20 py-15">
        <div className="max-w-content mx-auto flex flex-col gap-6">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="font-poppins font-medium text-sm leading-4 tracking-[4px] uppercase text-tk-gray text-center">
              Portfolio Gallery
            </span>

            <h2 className="font-poppins font-semibold text-2xl sm:text-[40px] leading-[60px] text-tk-dark text-center">
              A Gallery of Hand-Drawn Artz
            </h2>

            <p className="font-poppins font-normal text-base leading-6 text-tk-gray text-center max-w-xl">
              Browse our handcrafted portrait collection
            </p>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-poppins font-medium text-sm leading-5 rounded-full px-5 py-2 transition-all duration-300 ${
                  activeCategory === cat
                    ? 'tk-gradient-bg text-white'
                    : 'bg-tk-light-gray text-tk-gray hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
  <AnimatePresence mode="popLayout">

    {/* First Two Large Cards */}
    {filtered.slice(0, 2).map((img, i) => (
      <motion.div
        key={img.id}
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.4, delay: i * 0.05 }}
        className="relative overflow-hidden rounded-card group cursor-pointer bg-tk-light-gray h-[459px]"
      >
        <img
          src={img.src}
          alt={img.alt}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
      </motion.div>
    ))}

    {/* Right Side Column */}
    <div className="flex flex-col gap-4">

      {/* Third Card */}
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="relative overflow-hidden rounded-card group cursor-pointer bg-tk-light-gray h-[221px]"
      >
        <img
          src={filtered[2]?.src || '/assets/wedding-3.webp'}
          alt={filtered[2]?.alt || 'Wedding Portrait 3'}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
      </motion.div>

      {/* Fourth Card */}
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="relative overflow-hidden rounded-card group cursor-pointer bg-tk-light-gray h-[222px]"
      >
        <img
          src={filtered[3]?.src || '/assets/wedding-4.webp'}
          alt={filtered[3]?.alt || 'Wedding Portrait 4'}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
      </motion.div>

    </div>

  </AnimatePresence>
</div>
        </div>
      </div>
    </section>
  )
}