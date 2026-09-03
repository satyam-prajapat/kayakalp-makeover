import { motion } from "framer-motion";

function Footer() {
  const quickLinks = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Services", "#services"],
    ["Bridal", "#bridal"],
    ["Packages", "#packages"],
    ["Gallery", "#gallery"],
    ["Contact", "#contact"],
  ];

  const services = [
    "Bridal Makeup",
    "Party Makeup",
    "Hair Styling",
    "Facial",
    "Skin Care",
    "Manicure",
    "Pedicure",
    "Hair Spa",
    "Mehndi",
    "Saree & Dupatta Draping",
  ];

  return (
    <>
      {/* ================= FLOATING WHATSAPP ================= */}

      <motion.a
        href="https://wa.me/919695294325"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with KAYAKALP MAKEOVER on WhatsApp"
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.6,
          delay: 1,
          type: "spring",
          stiffness: 220,
          damping: 14,
        }}
        whileHover={{
          scale: 1.12,
          y: -5,
        }}
        whileTap={{
          scale: 0.92,
        }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#8b4b52] text-white flex items-center justify-center text-2xl shadow-2xl"
      >
        <motion.span
          animate={{
            rotate: [0, -8, 8, -5, 5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 4,
          }}
        >
          💬
        </motion.span>

        {/* Pulse */}

        <motion.span
          className="absolute inset-0 rounded-full border border-[#8b4b52]"
          animate={{
            scale: [1, 1.5],
            opacity: [0.5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      </motion.a>


      {/* ================= FOOTER ================= */}

      <footer className="relative bg-[#2b2020] text-white overflow-hidden">

        {/* Background Decorations */}

        <motion.div
          className="absolute -top-32 -right-32 w-80 h-80 rounded-full border border-white/10 pointer-events-none"
          animate={{
            rotate: 360,
            scale: [1, 1.08, 1],
          }}
          transition={{
            rotate: {
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />

        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#8b4b52]/10 blur-3xl pointer-events-none"
          animate={{
            x: [0, 35, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />


        <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">

          {/* ================= MAIN FOOTER ================= */}

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* ================= BRAND ================= */}

            <motion.div
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
              }}
            >

              <motion.a
                href="#home"
                whileHover={{
                  x: 4,
                }}
                className="inline-block"
              >
                <h2
                  className="text-4xl"
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                  }}
                >
                  KAYAKALP
                </h2>

                <p className="text-xs tracking-[0.35em] text-white/50 mt-1">
                  MAKEOVER
                </p>
              </motion.a>


              <p className="text-white/60 leading-7 mt-6 max-w-sm">
                Enhancing your natural beauty and creating
                unforgettable looks for your most special moments.
              </p>


              {/* Decorative Line */}

              <motion.div
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: 70,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                }}
                className="h-[1px] bg-[#c9978f] mt-6"
              />

            </motion.div>


            {/* ================= QUICK LINKS ================= */}

            <motion.div
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
                delay: 0.1,
              }}
            >

              <h3
                className="text-2xl mb-5"
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                }}
              >
                Quick Links
              </h3>


              <div className="flex flex-col gap-3">

                {quickLinks.map(([label, href], index) => (
                  <motion.a
                    key={label}
                    href={href}
                    whileHover={{
                      x: 7,
                    }}
                    className="text-white/60 hover:text-white transition-colors duration-300"
                  >
                    <span className="inline-flex items-center gap-2">

                      <motion.span
                        className="text-[#c9978f]"
                        initial={{
                          opacity: 0,
                          x: -5,
                        }}
                        whileHover={{
                          opacity: 1,
                          x: 0,
                        }}
                      >
                        →
                      </motion.span>

                      {label}

                    </span>
                  </motion.a>
                ))}

              </div>

            </motion.div>


            {/* ================= SERVICES ================= */}

            <motion.div
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
                delay: 0.2,
              }}
            >

              <h3
                className="text-2xl mb-5"
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                }}
              >
                Services
              </h3>


              <div className="grid grid-cols-1 gap-2.5 text-sm">

                {services.map((service) => (
                  <motion.span
                    key={service}
                    whileHover={{
                      x: 5,
                      color: "#ffffff",
                    }}
                    className="text-white/50 transition-colors duration-300 cursor-default"
                  >
                    {service}
                  </motion.span>
                ))}

              </div>

            </motion.div>


            {/* ================= CONTACT ================= */}

            <motion.div
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
                delay: 0.3,
              }}
            >

              <h3
                className="text-2xl mb-5"
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                }}
              >
                Contact
              </h3>


              <div className="space-y-4">

                {/* Phone */}

                <motion.a
                  href="tel:+919695294325"
                  whileHover={{
                    x: 5,
                  }}
                  className="block text-white/60 hover:text-white transition-colors duration-300"
                >
                  +91 9695294325
                </motion.a>


                {/* Location */}

                <motion.a
                  href="https://maps.app.goo.gl/eKPDKzCykYsFEZ3q7"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    x: 5,
                  }}
                  className="block text-white/60 hover:text-white transition-colors duration-300 leading-6"
                >
                  📍 Aalampur Bypass, Kalpi,
                  <br />
                  Near Narayan Netralay Hospital
                </motion.a>


                {/* Instagram */}

                <motion.a
                  href="https://www.instagram.com/kayakalp_makeover_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    x: 5,
                  }}
                  className="block text-white/60 hover:text-white transition-colors duration-300"
                >
                  📸 @kayakalp_makeover_
                </motion.a>


                {/* Book Button */}

                <motion.a
                  href="#booking"
                  whileHover={{
                    scale: 1.04,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="inline-flex items-center gap-2 mt-2 px-5 py-3 rounded-full bg-[#8b4b52] text-white text-sm"
                >
                  Book Appointment
                  <span>→</span>
                </motion.a>

              </div>

            </motion.div>

          </div>


          {/* ================= BOTTOM ================= */}

          <motion.div
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
              duration: 0.8,
              delay: 0.4,
            }}
            className="border-t border-white/10 mt-14 pt-7 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40"
          >

            <p className="text-center md:text-left">
              © {new Date().getFullYear()} KAYAKALP MAKEOVER.
              All rights reserved.
            </p>


            <motion.p
              animate={{
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-center"
            >
              Beauty • Elegance • Confidence
            </motion.p>

          </motion.div>

        </div>

      </footer>
    </>
  );
}

export default Footer;