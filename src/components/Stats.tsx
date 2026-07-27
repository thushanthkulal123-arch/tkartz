import { motion } from 'framer-motion'
import { Users, Palette, Pencil } from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: '300+',
    label: 'Happy Customers',
  },
  {
    icon: Palette,
    value: '500+',
    label: 'Portraits Created',
  },
  {
    icon: Pencil,
    value: '100%',
    label: 'Premium Quality',
  },
]

export default function Stats() {
  return (
    <section className="relative w-full bg-tk-bg-gray">
      <div className="max-w-container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center px-6 sm:px-20 py-10 lg:py-0 lg:w-[450px]"
          >
            <h2 className="font-poppins font-semibold text-[24px] sm:text-[40px] leading-[60px] text-center tk-gradient-text">
              TK ARTZ,<br />truly timeless.
            </h2>
          </motion.div>

          {/* Stats */}
          <div className="flex-1 flex flex-col sm:flex-row">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex-1 flex flex-col items-center justify-center py-10 px-6 border-t sm:border-t-0 sm:border-l-2 border-white"
              >
                <div className="w-10 h-10 bg-white rounded-lg shadow-icon flex items-center justify-center mb-2">
                  <stat.icon size={16} className="tk-gradient-text" />
                </div>
                <span className="font-poppins font-semibold text-[32px] leading-[39px] tk-gradient-text">
                  {stat.value}
                </span>
                <span className="font-poppins font-normal text-sm leading-6 text-tk-gray mt-1">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
