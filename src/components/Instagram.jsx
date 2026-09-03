import { motion } from "framer-motion";

function Instagram() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=700&q=85",
      alt: "Makeup",
      label: "Makeup",
    },
    {
      src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=85",
      alt: "Beauty",
      label: "Beauty",
    },
    {
      src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=85",
      alt: "Bridal",
      label: "Bridal",
    },
    {
      src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=700&q=85",
      alt: "Makeup Artist",
      label: "Makeup Artist",
    },
  ];

  return (
    <section
      id="instagram"
      className="relative py-16 sm:py-24 bg-[#fff8f6] overflow-hidden"
    >

      {/* ================= BACKGROUND ORB ================= */}

      <motion.div
        className="absolute -top-32 -left-32 w-72 h-72 rounded-full bg-[#ead2ce]/30 blur-3xl pointer-events-none"
        animate={{
          x: [0, 35, 0],
          y: [0, 25, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-[#e4c5c1]/30 blur-3xl pointer-events-none"
        animate={{
          x: [0, -30, 0],
          y: [0, -20, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />


      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ================= HEADING ================= */}

        <motion.div
          className="text-center"
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <motion.p
            initial={{
              opacity: 0,
              letterSpacing: "0.08em",
            }}
            whileInView={{
              opacity: 1,
              letterSpacing: "0.3em",
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="uppercase text-sm text-[#a85c65] mb-4"
          >
            Follow Our Journey
          </motion.p>


          <h2
            className="text-4xl sm:text-5xl md:text-6xl"
            style={{
              fontFamily: "Cormorant Garamond, serif",
            }}
          >
            Beauty Beyond
            <br />

            <motion.span
              className="text-[#8b4b52] inline-block"
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
            >
              The Studio
            </motion.span>
          </h2>


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
              duration: 0.7,
              delay: 0.35,
            }}
            className="max-w-xl mx-auto mt-5 text-gray-600 leading-7"
          >
            Follow KAYAKALP MAKEOVER on Instagram for our latest
            bridal transformations, makeup looks, hairstyles and
            beauty inspiration.
          </motion.p>

        </motion.div>


        {/* ================= INSTAGRAM GRID ================= */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">

          {images.map((image, index) => (
            <motion.a
              key={image.src}
              href="https://www.instagram.com/kayakalp_makeover_/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{
                opacity: 0,
                y: 70,
                scale: 0.92,
                rotate: index % 2 === 0 ? -2 : 2,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                rotate: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -10,
                scale: 1.025,
              }}
              className="group relative aspect-square rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500"
            >

              {/* IMAGE */}

              <motion.img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                initial={{
                  scale: 1.15,
                }}
                whileInView={{
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  scale: 1.12,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
              />


              {/* DARK OVERLAY */}

              <motion.div
                className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-all duration-500"
              />


              {/* MOVING LIGHT */}

              <motion.div
                className="absolute top-0 left-[-100%] w-[55%] h-full bg-white/20 skew-x-[-20deg] pointer-events-none"
                animate={{
                  left: ["-100%", "180%"],
                }}
                transition={{
                  duration: 2.2,
                  delay: index * 0.7,
                  repeat: Infinity,
                  repeatDelay: 5,
                  ease: "easeInOut",
                }}
              />


              {/* HOVER CONTENT */}

              <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500">

                <motion.div
                  initial={{
                    scale: 0,
                    rotate: -30,
                  }}
                  whileHover={{
                    scale: 1,
                    rotate: 0,
                  }}
                  className="w-12 h-12 rounded-full border border-white/80 flex items-center justify-center text-xl backdrop-blur-sm"
                >
                  ↗
                </motion.div>

                <p className="mt-3 text-sm tracking-[0.2em] uppercase">
                  {image.label}
                </p>

              </div>

            </motion.a>
          ))}

        </div>


        {/* ================= INSTAGRAM CTA ================= */}

        <motion.div
          className="flex justify-center"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
        >

          <motion.a
            href="https://www.instagram.com/kayakalp_makeover_/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.06,
              y: -4,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="relative overflow-hidden inline-flex items-center gap-3 mt-12 px-8 py-4 bg-[#8b4b52] text-white rounded-full shadow-lg shadow-[#8b4b52]/20"
          >

            <span className="relative z-10">
              Follow @kayakalp_makeover_
            </span>

            <motion.span
              className="relative z-10 text-lg"
              animate={{
                x: [0, 4, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ↗
            </motion.span>


            {/* BUTTON LIGHT */}

            <motion.span
              className="absolute top-0 left-[-100%] w-[45%] h-full bg-white/20 skew-x-[-20deg]"
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

        </motion.div>

      </div>
    </section>
  );
}

export default Instagram;