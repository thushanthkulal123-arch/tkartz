import about from "../assets/About.jpeg";
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative w-full bg-white rounded-b-section">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-20 py-10 lg:py-0">
        <div className="max-w-content mx-auto flex flex-col lg:flex-row gap-10 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-[571px] lg:h-[482px] rounded-lg bg-tk-light-gray overflow-hidden shrink-0"
          >
            <img
              src={about}
              alt="TK ARTZ Artist at work"
              className="w-[100%] h-[100%] object-contain mx-auto my-auto"
              loading="lazy"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex-1 flex flex-col gap-4 py-0 lg:py-6"
          >
            <span className="font-poppins font-medium text-sm leading-4 tracking-[4px] uppercase text-tk-gray">
              About the Artist
            </span>
            <h2 className="font-poppins font-semibold text-2xl sm:text-[40px] leading-[50px] text-tk-dark">
              Every Line is Memory Preserved
            </h2>
            <div className="font-poppins font-normal text-sm leading-[21px] text-tk-gray space-y-4">
              <p>
                My journey with art began at the age of eight with a simple moment that changed everything. I watched my brother casually sketching one day, picked up a pencil to try it myself, and showed him what I had drawn. His encouragement sparked a passion that never faded.
              </p>
              <p>
                Over the years, that curiosity grew into countless hours of practice. During the pandemic, I discovered my love for drawing realistic pencil portraits and began creating commissioned artworks for people who wanted to preserve their most cherished memories.
              </p>
              <p>
                Today, alongside my career as a full-time graphic designer, I continue to create hand-drawn portraits—one pencil stroke at a time—turning photographs into timeless keepsakes that families can treasure for years to come.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
