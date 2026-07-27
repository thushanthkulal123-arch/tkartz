import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    text: "We gifted our parents a portrait for their 30th anniversary. They cried. So did we. TK ARTZ captured something a photograph never could.",
    name: "Aarti & Rohan",
    location: "Mumbai · Anniversary Gift",
    initial: "A",
  },
  {
    text: "The attention to detail is incredible. Every strand of hair, every wrinkle, every emotion—perfectly captured in pencil. Absolutely stunning work.",
    name: "Priya Sharma",
    location: "Delhi · Family Portrait",
    initial: "P",
  },
  {
    text: "I commissioned a memorial portrait of my grandmother. The artist understood exactly what I wanted. It now hangs in our living room as a beautiful tribute.",
    name: "Rahul Menon",
    location: "Bangalore · Memorial Portrait",
    initial: "R",
  },
  {
    text: "Fast delivery, excellent packaging, and the portrait exceeded all expectations. The frame quality is top-notch too. Highly recommend TK ARTZ!",
    name: "Sneha Patel",
    location: "Ahmedabad · Wedding Gift",
    initial: "S",
  },
  {
    text: "I've ordered three portraits so far—one for my parents, one for my in-laws, and one for our home. Each one is a masterpiece. Truly talented artist.",
    name: "Vikram Iyer",
    location: "Chennai · Multiple Orders",
    initial: "V",
  },
  {
    text: "The custom size option was perfect for our large family portrait. The artist was patient, professional, and delivered beyond what we imagined.",
    name: "Neha Gupta",
    location: "Hyderabad · Custom Size",
    initial: "N",
  },
  {
    text: "My pet portrait turned out so realistic that people think it's a black and white photo! The charcoal texture adds such a beautiful artistic touch.",
    name: "Arjun Reddy",
    location: "Pune · Pet Portrait",
    initial: "A",
  },
  {
    text: "From the first message to the final delivery, the experience was seamless. The artist kept me updated throughout. Worth every rupee.",
    name: "Meera Joshi",
    location: "Kolkata · Couple Portrait",
    initial: "M",
  },
  {
    text: "Ordered a portrait for my daughter's birthday. Her reaction was priceless. TK ARTZ doesn't just draw portraits—they create lasting memories.",
    name: "Karthik Nair",
    location: "Kochi · Kids Portrait",
    initial: "K",
  },
]

export default function Reviews() {
  return (
    <section id="reviews" className="relative w-full bg-white rounded-section py-10">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="max-w-content mx-auto flex flex-col gap-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="font-poppins font-medium text-sm leading-4 tracking-[4px] uppercase text-tk-gray text-center">
              Customer Reviews
            </span>
            <h2 className="font-poppins font-semibold text-2xl sm:text-[40px] leading-[60px] text-tk-dark text-center">
              Loved by Families Across India.
            </h2>
          </motion.div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px]">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="bg-white shadow-card rounded-lg p-6 flex flex-col gap-2"
              >
                {/* Stars & Quote */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} size={16} className="fill-tk-gold text-tk-gold" />
                    ))}
                  </div>
                  <Quote size={30} className="text-tk-light-gray" />
                </div>

                {/* Text */}
                <p className="font-poppins font-normal text-sm leading-7 text-tk-gray line-clamp-4">
                  "{review.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-2 mt-2 border-t border-tk-dark/5">
                  <div className="w-10 h-10 rounded-full tk-gradient-bg flex items-center justify-center shrink-0">
                    <span className="font-sora font-semibold text-xs text-white">
                      {review.initial}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-poppins font-semibold text-sm leading-5 text-tk-dark">
                      {review.name}
                    </span>
                    <span className="font-poppins font-normal text-xs leading-4 text-tk-dark/50">
                      {review.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
