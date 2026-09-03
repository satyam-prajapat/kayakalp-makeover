import { motion } from "framer-motion";

function Contact() {
  const contactItems = [
    {
      icon: "📞",
      title: "Call Us",
      text: "+91 9695294325",
      href: "tel:+919695294325",
      external: false,
    },
    {
      icon: "💬",
      title: "WhatsApp",
      text: "Chat With Us",
      href: "https://wa.me/919695294325",
      external: true,
    },
    {
      icon: "📸",
      title: "Instagram",
      text: "@kayakalp_makeover_",
      href: "https://www.instagram.com/kayakalp_makeover_/",
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-24 bg-white overflow-hidden"
    >
      {/* ================= BACKGROUND DECORATION ================= */}

      <motion.div
        className="absolute -top-24 -right-24 w-72 h-72 rounded-full border border-[#c9978f]/30 pointer-events-none"
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
        className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-[#ead2ce]/30 blur-3xl pointer-events-none"
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

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ================= HEADING ================= */}

        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
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
            className="uppercase text-sm text-[#a85c65] mb-4"
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
          >
            Get In Touch
          </motion.p>

          <h2
            className="text-4xl sm:text-5xl md:text-6xl"
            style={{
              fontFamily: "Cormorant Garamond, serif",
            }}
          >
            Let's Talk
            <br />

            <motion.span
              className="text-[#8b4b52] inline-block"
              initial={{
                opacity: 0,
                x: -35,
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
                delay: 0.15,
              }}
            >
              Beauty
            </motion.span>
          </h2>
        </motion.div>


        {/* ================= CONTACT CARDS ================= */}

        <div className="grid md:grid-cols-3 gap-6">

          {contactItems.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              initial={{
                opacity: 0,
                y: 70,
                scale: 0.94,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.13,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -10,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="group relative text-center p-6 sm:p-8 rounded-3xl bg-[#fff8f6] border border-[#ead8d5] overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500"
            >

              {/* Card Glow */}

              <motion.div
                className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-[#ead2ce]/40 blur-2xl"
                animate={{
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
              />


              {/* Icon */}

              <motion.div
                whileHover={{
                  scale: 1.15,
                  rotate: 8,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 12,
                }}
                className="relative z-10 w-14 h-14 mx-auto rounded-full bg-[#f6e7e5] flex items-center justify-center text-xl"
              >
                {item.icon}
              </motion.div>


              <h3
                className="relative z-10 text-2xl mt-5"
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                }}
              >
                {item.title}
              </h3>


              <span className="relative z-10 block mt-2 text-gray-500 group-hover:text-[#8b4b52] transition-colors duration-300">
                {item.text}
              </span>


              {/* Bottom Line */}

              <motion.div
                className="absolute bottom-0 left-1/2 h-[2px] bg-[#8b4b52]"
                initial={{
                  width: 0,
                  x: "-50%",
                }}
                whileHover={{
                  width: "55%",
                }}
                transition={{
                  duration: 0.4,
                }}
              />

            </motion.a>
          ))}

        </div>


        {/* ================= LOCATION ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 70,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mt-8 rounded-3xl overflow-hidden bg-[#fff8f6] border border-[#ead8d5] shadow-sm"
        >

          {/* Decorative Circle */}

          <motion.div
            className="absolute -left-16 -bottom-16 w-40 h-40 rounded-full border border-[#c9978f]/30 pointer-events-none"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <div className="relative z-10 p-8 sm:p-10 text-center">

            <motion.div
              initial={{
                scale: 0,
                rotate: -20,
              }}
              whileInView={{
                scale: 1,
                rotate: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 12,
              }}
              className="text-2xl"
            >
              📍
            </motion.div>


            <h3
              className="text-3xl mt-3"
              style={{
                fontFamily: "Cormorant Garamond, serif",
              }}
            >
              Visit Our Studio
            </h3>


            <motion.a
              href="https://maps.app.goo.gl/eKPDKzCykYsFEZ3q7"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.02,
              }}
              className="inline-block text-gray-500 mt-2 hover:text-[#8b4b52] transition-colors duration-300"
            >
              Aalampur Bypass, Kalpi,
              <br />
              Near Narayan Netralay Hospital
            </motion.a>


            {/* MAP CTA */}

            <motion.a
              href="https://maps.app.goo.gl/eKPDKzCykYsFEZ3q7"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full border border-[#8b4b52] text-[#8b4b52] bg-white/60"
            >
              Open in Google Maps
              <motion.span
                animate={{
                  x: [0, 4, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              >
                ↗
              </motion.span>
            </motion.a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Contact;