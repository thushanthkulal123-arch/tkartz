import { motion } from "framer-motion";
import { Phone, Mail, Instagram } from "lucide-react";

const contacts = [
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+91 7760196290",
    href: "https://wa.me/917760196290",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@thushanth_kulal",
    href: "https://instagram.com/thushanth_kulal",
  },
  {
    icon: Mail,
    label: "Email",
    value: "thushanthkulal123@gmail.com",
    href: "mailto:thushanthkulal123@gmail.com",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full bg-white rounded-b-section"
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-20 py-10">
        <div className="max-w-content mx-auto flex flex-col lg:flex-row gap-10">

          {/* Left Text */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex-1 flex flex-col gap-2 py-6"
          >
            <h2 className="font-poppins font-semibold text-2xl sm:text-[40px] leading-[50px] text-tk-dark">
              Let's Create Your Portrait
            </h2>

            <p className="font-poppins font-normal text-sm leading-[21px] text-tk-gray mt-2">
              Send me a message with your photo or idea, and I'll personally
              guide you through the process—from choosing the perfect
              reference to delivering your finished hand-drawn portrait.
            </p>

          </motion.div>

          {/* Contact Cards */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex-1 flex flex-col gap-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {contacts.slice(0,2).map((c,i)=>(

                <motion.a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity:0,y:20 }}
                  whileInView={{ opacity:1,y:0 }}
                  viewport={{ once:true }}
                  transition={{ duration:0.4, delay:i*0.1 }}
                  whileHover={{ y:-5 }}
                  className="flex items-center gap-4 bg-white shadow-contact rounded-card p-5 hover:shadow-xl transition-all"
                >

                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2F3F9E] to-[#5A2CA0] flex items-center justify-center shadow-lg">

                    <c.icon
                      size={22}
                      className="text-white"
                      strokeWidth={2.3}
                    />

                  </div>

                  <div className="flex flex-col">

                    <span className="font-poppins font-normal text-xs tracking-[1.2px] uppercase text-tk-dark">
                      {c.label}
                    </span>

                    <span className="font-sora font-semibold text-base leading-6 text-tk-dark">
                      {c.value}
                    </span>

                  </div>

                </motion.a>

              ))}

            </div>
                        <motion.a
              href={contacts[2].href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="flex items-center gap-4 bg-white shadow-contact rounded-card p-5 hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2F3F9E] to-[#5A2CA0] flex items-center justify-center shadow-lg">
                <Mail
                  size={22}
                  className="text-white"
                  strokeWidth={2.3}
                />
              </div>

              <div className="flex flex-col">
                <span className="font-poppins font-normal text-xs tracking-[1.2px] uppercase text-tk-dark">
                  {contacts[2].label}
                </span>

                <span className="font-sora font-semibold text-base leading-6 text-tk-dark">
                  {contacts[2].value}
                </span>
              </div>
            </motion.a>

          </motion.div>
        </div>
      </div>
    </section>
  );
}