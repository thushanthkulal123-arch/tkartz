import artist from "../assets/artist.png";
import cloud from "../assets/cloud.png";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative w-full tk-blue-gradient overflow-hidden">
      {/* Hero Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255,255,255,0.10) 0%, transparent 40%)`,
          }}
        />
      </div>

      {/* Animated Clouds */}
      <img src={cloud} alt="" className="cloud cloud1" />
      <img src={cloud} alt="" className="cloud cloud2" />
      <img src={cloud} alt="" className="cloud cloud3" />
      <img src={cloud} alt="" className="cloud cloud4" />
      <img src={cloud} alt="" className="cloud cloud5" />
      <img src={cloud} alt="" className="cloud cloud6" />

      {/* Hero Image */}
      <img
        src={artist}
        alt="Artist"
        className="
          absolute
          bottom-[-20px]
          right-0
          z-10
          w-[250px]
          sm:w-[350px]
          md:w-[450px]
          lg:w-[600px]
          xl:w-[650px]
          object-contain
          pointer-events-none
          select-none
        "
      />

      <div className="relative max-w-container mx-auto">
        {/* Nav Spacer */}
        <div className="h-[104px]" />

        {/* Hero Content */}
        <div className="px-4 sm:px-6 lg:px-20 pb-[152px] pt-20">
          <div className="relative z-20 max-w-content mx-auto flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="flex flex-col gap-2"
            >
              <span className="font-brittany text-white text-2xl sm:text-[32px] leading-[43px]">
                Hai Im
              </span>

              <h1 className="font-poppins font-semibold text-4xl sm:text-6xl lg:text-[88px] lg:leading-[72px]">
                <span className="text-white">Pencil Artist</span>
              </h1>

              <p className="font-poppins font-normal text-white text-base sm:text-xl leading-[30px] mt-2">
                Turning Memories Into Timeless Pencil Art
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="flex flex-wrap items-center gap-6 mt-2"
            >
              <a
                href="https://wa.me/917760196290"
                target="_blank"
                rel="noopener noreferrer"
                className="tk-gradient-bg text-white font-poppins font-semibold text-sm rounded-pill px-6 py-3 inline-flex items-center gap-2 hover:opacity-90 transition-all hover:scale-[1.02]"
              >
                Order Now
                <ArrowRight size={16} />
              </a>

              <a
                href="#gallery"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#gallery")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="border border-white text-white font-poppins font-semibold text-sm rounded-pill px-6 py-3 inline-flex items-center gap-2 hover:bg-white/10 transition-all"
              >
                Explore Gallery
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}