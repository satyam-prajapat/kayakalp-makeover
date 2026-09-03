import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        background:
          "linear-gradient(90deg, #fffaf8 0%, #fff7f5 45%, #f7e9e7 100%)",
      }}
    >
      {/* Decorative Background */}
      <motion.div
        className="absolute -top-24 -right-24 w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-[#c9978f]/40"
        animate={{
          rotate: 360,
          scale: [1, 1.08, 1],
        }}
        transition={{
          rotate: {
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      <motion.div
        className="absolute -bottom-32 -left-32 w-72 h-72 rounded-full bg-[#ead2ce]/30 blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-28 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>

            {/* Small Label */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sm tracking-[0.25em] uppercase text-[#8b4b52] mb-5">
                Beauty • Elegance • Confidence
              </p>
            </motion.div>

            {/* Heading */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 120, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-4xl sm:text-5xl md:text-7xl leading-[0.95] font-medium"
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                }}
              >
                Your Beauty,
                <br />

                <motion.span
                  className="text-[#8b4b52] inline-block"
                  initial={{ x: -40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  Our Passion.
                </motion.span>
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-6 text-gray-600 max-w-lg leading-relaxed"
            >
              Discover personalized beauty, elegant bridal makeovers
              and premium salon services designed to make you feel
              confident, beautiful and unforgettable.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <motion.a
                href="#booking"
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{ scale: 0.96 }}
                className="relative overflow-hidden px-7 py-3.5 rounded-full text-white bg-[#8b4b52] shadow-lg shadow-[#8b4b52]/20"
              >
                <span className="relative z-10">
                  Book Appointment
                </span>

                {/* Button Shine */}
                <motion.span
                  className="absolute top-0 left-[-100%] w-[60%] h-full bg-white/20 skew-x-[-20deg]"
                  animate={{
                    left: ["-100%", "180%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut",
                  }}
                />
              </motion.a>

              <motion.a
                href="#services"
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{ scale: 0.96 }}
                className="px-7 py-3.5 rounded-full border border-[#8b4b52] text-[#8b4b52] bg-white/50"
              >
                Explore Services →
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.15 }}
              className="flex gap-10 mt-10"
            >
              <div>
                <motion.p
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.35, duration: 0.5 }}
                  className="text-3xl font-semibold text-[#8b4b52]"
                >
                  10+
                </motion.p>

                <p className="text-sm text-gray-500">
                  Years Experience
                </p>
              </div>

              <div>
                <motion.p
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                  className="text-3xl font-semibold text-[#8b4b52]"
                >
                  100+
                </motion.p>

                <p className="text-sm text-gray-500">
                  Happy Clients
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              x: 100,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 1.2,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >

            {/* Rotating Circle */}
            <motion.div
              className="absolute -top-8 -right-8 w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-[#c9978f] z-0"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Image */}
            <motion.div
              className="relative z-10 rounded-[180px_180px_30px_30px] overflow-hidden shadow-2xl"
              whileHover={{
                scale: 1.025,
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              <motion.img
                src="/src/assets/images/bridal-1.jpg"
                alt="KAYAKALP MAKEOVER Bridal Look"
                className="w-full h-[480px] sm:h-[550px] md:h-[600px] object-cover"
                initial={{ scale: 1.12 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 2,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </motion.div>

            {/* Floating Experience Card */}
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.8,
                rotate: -5,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                rotate: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 1.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                scale: 1.05,
                rotate: 1,
              }}
              className="absolute -bottom-6 -left-2 sm:-left-6 bg-white shadow-xl px-5 sm:px-6 py-5 rounded-2xl z-20"
            >
              <p className="text-3xl font-semibold text-[#8b4b52]">
                10+
              </p>

              <p className="text-sm mt-1 text-gray-600">
                Years of Experience
              </p>
            </motion.div>

            {/* Floating Small Circle */}
            <motion.div
              className="absolute bottom-10 -right-5 w-14 h-14 rounded-full bg-[#8b4b52]/10 z-0"
              animate={{
                y: [0, -12, 0],
                x: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;