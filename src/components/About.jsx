import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="py-16 sm:py-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >

            {/* Decorative Circle */}
            <motion.div
              className="absolute -top-5 left-2 sm:-left-5 w-24 h-24 border border-[#c9978f] rounded-full"
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Image */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                scale: 1.02,
              }}
              className="relative z-10 rounded-[30px] overflow-hidden shadow-xl"
            >
              <motion.img
                src="/images/bridal-7.jpg"
                alt="KAYAKALP MAKEOVER Bridal Look"
                className="w-full h-[500px] sm:h-[560px] object-cover"
                initial={{ scale: 1.15 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.8,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />

              {/* Light Sweep */}
              <motion.div
                className="absolute top-0 bottom-0 left-0 w-1/3 bg-white/20 blur-2xl skew-x-[-20deg] pointer-events-none"
                initial={{ x: "-180%" }}
                whileInView={{ x: "450%" }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.5,
                  delay: 0.5,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Experience Card */}
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
                rotate: -5,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -8,
                rotate: 2,
              }}
              className="absolute -bottom-8 right-2 sm:-right-5 bg-[#8b4b52] text-white rounded-2xl px-5 sm:px-7 py-5 sm:py-6 shadow-xl z-20"
            >
              <p className="text-4xl font-semibold">
                10+
              </p>

              <p className="text-sm mt-1">
                Years of Experience
              </p>
            </motion.div>

          </motion.div>


          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            {/* Label */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-sm tracking-[0.25em] uppercase text-[#8b4b52] mb-5"
            >
              About KAYAKALP MAKEOVER
            </motion.p>


            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: 0.1,
              }}
              className="text-4xl sm:text-5xl md:text-6xl leading-tight"
              style={{
                fontFamily: "Cormorant Garamond, serif",
              }}
            >
              Where Beauty
              <br />

              <span className="text-[#8b4b52]">
                Meets Elegance
              </span>
            </motion.h2>


            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
              className="mt-6 text-gray-600 leading-relaxed"
            >
              At KAYAKALP MAKEOVER, we believe beauty is not
              about changing who you are — it is about bringing
              out the confidence and elegance that already exists
              within you.
            </motion.p>


            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.45,
              }}
              className="mt-4 text-gray-600 leading-relaxed"
            >
              With more than 10 years of experience, we create
              personalized bridal and beauty looks using
              professional techniques and premium products.
            </motion.p>


            {/* FEATURES */}
            <div className="grid grid-cols-2 gap-4 sm:gap-5 mt-8">

              {[
                "Professional Artists",
                "Premium Products",
                "Personalized Looks",
                "Hygienic Studio",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.55 + index * 0.12,
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                  }}
                  className="p-5 rounded-2xl border border-[#eadbd8] bg-[#fffaf8]"
                >
                  <motion.div
                    className="w-2.5 h-2.5 rounded-full bg-[#8b4b52] mb-3"
                    whileHover={{
                      scale: 1.5,
                    }}
                  />

                  <p className="text-sm font-medium text-gray-700">
                    {item}
                  </p>
                </motion.div>
              ))}

            </div>


            {/* CTA */}
            <motion.a
              href="#services"
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 1,
              }}
              whileHover={{
                x: 6,
              }}
              className="inline-flex items-center gap-3 mt-9 text-[#8b4b52] font-medium"
            >
              Discover Our Services

              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                →
              </motion.span>
            </motion.a>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About; 