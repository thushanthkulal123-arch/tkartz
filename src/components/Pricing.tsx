import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Pencil, Paintbrush } from "lucide-react";

const pencilPlans = [
  {
    size: 'A4',
    dims: '29.7 × 21 cm',
    price: '₹1,499',
    features: ['1 subject', 'Charcoal paper', 'Custom frame selection', 'Frame included'],
  },
  {
    size: 'A3',
    dims: '42 × 29.7 cm',
    price: '₹2,999',
    features: ['2 subject', 'Charcoal paper', 'Custom frame selection', 'Frame included'],
  },
  {
    size: 'A2',
    dims: '59.4 × 42 cm',
    price: '₹4,999',
    features: ['Up to 4 subjects', 'Charcoal paper', 'Custom frame selection', 'Frame included'],
  },
  {
    size: 'CUSTOM',
    dims: 'Any Size',
    price: "Let's Talk",
    features: ['Unlimited subjects', 'Charcoal paper', 'Custom frame selection', 'Frame included'],
  },
]

const colorPlans = [
  {
    size: 'A4',
    dims: '29.7 × 21 cm',
    price: '₹2,299',
    features: ['1 subject', 'Color paper', 'Custom frame selection', 'Frame included'],
  },
  {
    size: 'A3',
    dims: '42 × 29.7 cm',
    price: '₹4,299',
    features: ['2 subject', 'Color paper', 'Custom frame selection', 'Frame included'],
  },
  {
    size: 'A2',
    dims: '59.4 × 42 cm',
    price: '₹6,499',
    features: ['Up to 4 subjects', 'Color paper', 'Custom frame selection', 'Frame included'],
  },
  {
    size: 'CUSTOM',
    dims: 'Any Size',
    price: "Let's Talk",
    features: ['Unlimited subjects', 'Color paper', 'Custom frame selection', 'Frame included'],
  },
]

export default function Pricing() {
  const [type, setType] = useState<'Pencil' | 'Color'>('Pencil')
  const plans = type === 'Pencil' ? pencilPlans : colorPlans

  return (
    <section id="pricing" className="relative w-full tk-blue-gradient py-12">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="max-w-content mx-auto flex flex-col gap-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="font-poppins font-medium text-sm leading-4 tracking-[4px] uppercase text-white text-center">
              Pricing
            </span>
            <h2 className="font-poppins font-semibold text-2xl sm:text-[40px] leading-[60px] text-white text-center">
              One Price. Everything Included.
            </h2>
            <p className="font-poppins font-normal text-base leading-6 text-white text-center max-w-xl">
              Every portrait comes professionally framed and ready to hang.
            </p>
          </motion.div>

          {/* Toggle */}
          {/* Toggle */}
<motion.div
  initial={{ opacity: 0, y: 15 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.5, delay: 0.1 }}
  className="flex justify-center"
>
  <div className="relative w-[250px] h-[44px] rounded-full bg-[#0392F1] border border-[#0669AA] p-[3px]">

    {/* White Sliding Background */}
    <motion.div
      animate={{
        x: type === "Pencil" ? 0 : 122,
      }}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 28,
      }}
      className="absolute top-[3px] left-[3px] w-[122px] h-[38px] rounded-full bg-white shadow-md"
    />

    <div className="relative z-10 flex">

      {/* Pencil */}
      <button
        onClick={() => setType("Pencil")}
        className={`w-[122px] h-[38px] flex items-center justify-center text-[15px] font-semibold transition-all duration-300 ${
          type === "Pencil"
            ? "tk-gradient-text"
            : "text-white"
        }`}
      >
      <div className="flex items-center justify-center gap-2">
  <Pencil
    size={18}
    strokeWidth={2.2}
    className={type === "Pencil" ? "text-[#5A2CA0]" : "text-white"}
  />
  <span>Pencil</span>
</div>
      </button>

      {/* Color */}
      <button
        onClick={() => setType("Color")}
        className={`w-[122px] h-[38px] flex items-center justify-center text-[15px] font-semibold transition-all duration-300 ${
          type === "Color"
            ? "tk-gradient-text"
            : "text-white"
        }`}
      >
       <div className="flex items-center justify-center gap-2">
  <Paintbrush
    size={18}
    strokeWidth={2.2}
    className={type === "Color" ? "text-[#5A2CA0]" : "text-white"}
  />
  <span>Color</span>
</div>
      </button>

    </div>
  </div>
</motion.div>
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.size}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white rounded-card shadow-card p-6 flex flex-col gap-12"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-poppins font-semibold text-2xl leading-9 text-tk-dark">
                        {plan.size}
                      </h3>
                    </div>
                    <span className="font-poppins font-normal text-xs leading-4 text-tk-gray pt-1">
                      {plan.dims}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-poppins font-bold text-[40px] leading-12 text-tk-dark">
                      {plan.price}
                    </span>
                  </div>
                  <ul className="flex flex-col gap-0">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-3 py-2">
                        <span className="w-5 h-5 rounded-full check-circle flex items-center justify-center shrink-0">
                          <Check size={12} className="text-white" strokeWidth={3} />
                        </span>
                        <span className="font-poppins font-normal text-sm leading-5 text-tk-gray">
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="https://wa.me/917760196290"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tk-gradient-bg text-white font-poppins font-semibold text-sm rounded-pill px-6 py-3 text-center hover:opacity-90 transition-all mt-auto"
                >
                  Order Now
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
