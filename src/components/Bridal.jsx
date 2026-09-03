import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef } from "react";

function Bridal() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useSpring(
    useTransform(scrollYProgress, [0, 1], [40, -40]),
    {
      stiffness: 80,
      damping: 20,
    }
  );

  const imageScale = useSpring(
    useTransform(
      scrollYProgress,
      [0, 0.5, 1],
      [1.05, 1, 1.05]
    ),
    {
      stiffness: 70,
      damping: 20,
    }
  );

  const bridalFeatures = [
    "Bridal Makeup",
    "HD Makeup",
    "Bridal Hairstyle",
    "Eye Makeup",
    "Draping",
    "Lashes & Finishing",
  ];

  return (
    <section
      ref={sectionRef}
      id="bridal"
      className="py-16 sm:py-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT IMAGE ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -70,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >

            {/* Decorative Circle */}

            <motion.div
              className="absolute -top-6 left-2 sm:-left-8 w-24 sm:w-32 h-24 sm:h-32 rounded-full border border-[#c9978f] z-0"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Decorative Dot */}

            <motion.div
              className="absolute top-16 -left-2 sm:-left-10 w-3 h-3 rounded-full bg-[#8b4b52] z-20"
              animate={{
                y: [0, -12, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* ================= IMAGE ================= */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 1.2,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl"
            >

              <motion.div
                style={{
                  y: imageY,
                  scale: imageScale,
                }}
                className="relative"
              >

                <motion.img
                  src="/images/bridal-2.jpg"
                  alt="KAYAKALP MAKEOVER Bridal Makeup"
                  className="w-full h-[480px] sm:h-[550px] lg:h-[650px] object-cover"
                  initial={{
                    scale: 1.12,
                  }}
                  whileInView={{
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />

                {/* Cinematic Light Sweep */}

                <motion.div
                  className="absolute top-0 bottom-0 left-0 w-[25%] bg-white/20 blur-2xl skew-x-[-20deg] pointer-events-none"
                  initial={{
                    x: "-300%",
                  }}
                  whileInView={{
                    x: "700%",
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 1.8,
                    delay: 0.5,
                    ease: "easeInOut",
                  }}
                />

                {/* Bottom Gradient */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

              </motion.div>

            </motion.div>

            {/* ================= FLOATING CARD ================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 40,
                x: 20,
                rotate: -5,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                x: 0,
                rotate: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                delay: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              animate={{
                y: [0, -8, 0],
              }}
              whileHover={{
                scale: 1.05,
                rotate: 2,
              }}
              className="absolute bottom-5 right-2 sm:bottom-8 sm:-right-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl px-5 sm:px-7 py-5 sm:py-6 z-30"
            >

              <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                Your Special Day
              </p>

              <p
                className="text-3xl text-[#8b4b52] mt-2"
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                }}
              >
                Be Unforgettable
              </p>

            </motion.div>

            {/* Background Number */}

            <motion.div
              className="absolute -bottom-10 left-5 text-[90px] leading-none font-serif text-[#8b4b52]/[0.04] select-none pointer-events-none"
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
                delay: 0.8,
              }}
            >
              01
            </motion.div>

          </motion.div>


          {/* ================= RIGHT CONTENT ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 70,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            {/* Label */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
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
              }}
              className="uppercase tracking-[0.3em] text-sm text-[#a85c65] mb-5"
            >
              Bridal Beauty
            </motion.p>


            {/* Heading */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.9,
                delay: 0.1,
              }}
              className="text-4xl sm:text-5xl md:text-6xl leading-tight"
              style={{
                fontFamily: "Cormorant Garamond, serif",
              }}
            >
              Your Dream Day,
              <br />

              <span className="text-[#8b4b52]">
                Your Dream Look
              </span>
            </motion.h2>


            {/* Paragraph 1 */}

            <motion.p
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
                duration: 0.7,
                delay: 0.3,
              }}
              className="text-gray-600 leading-8 mt-6"
            >
              Your wedding day deserves nothing but the best.
              At KAYAKALP MAKEOVER, we create elegant and
              timeless bridal looks that enhance your natural
              beauty and make you feel truly special.
            </motion.p>


            {/* Paragraph 2 */}

            <motion.p
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
                duration: 0.7,
                delay: 0.45,
              }}
              className="text-gray-600 leading-8 mt-4"
            >
              From traditional bridal makeup to modern HD
              glam, every look is carefully designed according
              to your personality, outfit and wedding style.
            </motion.p>


            {/* ================= FEATURES ================= */}

            <div className="grid sm:grid-cols-2 gap-4 mt-8">

              {bridalFeatures.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{
                    opacity: 0,
                    x: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: 0.55 + index * 0.1,
                  }}
                  whileHover={{
                    x: 6,
                  }}
                  className="flex items-center gap-3"
                >

                  <motion.span
                    whileHover={{
                      scale: 1.15,
                      rotate: 8,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                      damping: 12,
                    }}
                    className="w-9 h-9 rounded-full bg-[#f6e7e5] flex items-center justify-center text-[#8b4b52] flex-shrink-0"
                  >
                    ✓
                  </motion.span>

                  <span>
                    {feature}
                  </span>

                </motion.div>
              ))}

            </div>


            {/* ================= BUTTONS ================= */}

            <motion.div
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
                duration: 0.7,
                delay: 1,
              }}
              className="flex flex-wrap gap-4 mt-9"
            >

              {/* Primary Button */}

              <motion.a
                href="#booking"
                whileHover={{
                  scale: 1.05,
                  y: -4,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="relative overflow-hidden px-7 py-4 bg-[#8b4b52] text-white rounded-full shadow-lg shadow-[#8b4b52]/20"
              >

                <span className="relative z-10">
                  Book Bridal Appointment
                </span>

                <motion.span
                  className="absolute top-0 left-[-100%] w-[55%] h-full bg-white/20 skew-x-[-20deg]"
                  animate={{
                    left: ["-100%", "180%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut",
                  }}
                />

              </motion.a>


              {/* Gallery Button */}

              <motion.a
                href="#gallery"
                whileHover={{
                  scale: 1.05,
                  y: -4,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="px-7 py-4 border border-[#8b4b52] text-[#8b4b52] rounded-full hover:bg-[#8b4b52] hover:text-white transition-colors duration-300"
              >
                View Bridal Gallery
              </motion.a>

            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Bridal;