import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

function ServiceCard({ service, index }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [7, -7]),
    {
      stiffness: 180,
      damping: 20,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-7, 7]),
    {
      stiffness: 180,
      damping: 20,
    }
  );

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) / rect.width - 0.5;

    const y =
      (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 70,
        scale: 0.92,
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
        duration: 0.75,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        perspective: 1000,
      }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{
          y: -10,
          scale: 1.015,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        className="group relative h-full bg-white p-7 sm:p-8 rounded-3xl border border-[#f1dfdc] overflow-hidden cursor-default shadow-sm hover:shadow-2xl"
      >

        {/* Moving Light */}
        <motion.div
          className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[#ead2ce]/50 blur-3xl pointer-events-none"
          whileHover={{
            scale: 1.5,
            opacity: 0.9,
          }}
          transition={{
            duration: 0.6,
          }}
        />

        {/* Bottom Glow */}
        <motion.div
          className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-[#f7e9e7] blur-3xl opacity-0"
          whileHover={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
        />

        {/* Content */}
        <div
          className="relative z-10"
          style={{
            transform: "translateZ(35px)",
          }}
        >

          {/* Top */}
          <div className="flex items-center justify-between">

            <motion.span
              className="text-sm text-gray-400 tracking-wider"
              whileHover={{
                color: "#8b4b52",
              }}
            >
              {service.number}
            </motion.span>

            {/* Animated Icon */}
            <motion.div
              className="w-14 h-14 rounded-full bg-[#fff5f2] flex items-center justify-center"
              whileHover={{
                scale: 1.15,
                rotate: 8,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 12,
              }}
            >
              <span className="text-3xl">
                {service.icon}
              </span>
            </motion.div>

          </div>


          {/* Title */}
          <motion.h3
            className="text-3xl mt-8 text-[#2b2020]"
            style={{
              fontFamily: "Cormorant Garamond, serif",
            }}
            whileHover={{
              x: 4,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            {service.title}
          </motion.h3>


          {/* Description */}
          <p className="text-gray-500 leading-7 mt-4">
            {service.description}
          </p>


          {/* Book Service */}
          <a
            href="#booking"
            className="inline-flex items-center gap-2 mt-7 text-sm font-medium text-[#8b4b52]"
          >
            <span>Book Service</span>

            <motion.span
              className="inline-block"
              whileHover={{
                x: 7,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
            >
              →
            </motion.span>
          </a>

        </div>


        {/* Corner Number */}
        <motion.div
          className="absolute bottom-4 right-5 text-6xl font-serif text-[#8b4b52]/[0.035] pointer-events-none"
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: index * 0.08 + 0.3,
          }}
        >
          {service.number}
        </motion.div>

      </motion.div>
    </motion.div>
  );
}


function Services() {

  const services = [
    {
      number: "01",
      title: "Bridal Makeup",
      description:
        "Elegant and long-lasting bridal makeup designed specially for your wedding day.",
      icon: "👰",
    },
    {
      number: "02",
      title: "Party Makeup",
      description:
        "Glamorous makeup looks for parties, celebrations and special occasions.",
      icon: "✨",
    },
    {
      number: "03",
      title: "Hair Styling",
      description:
        "Elegant curls, traditional hairstyles and modern looks created to complete your style.",
      icon: "💇‍♀️",
    },
    {
      number: "04",
      title: "Facial",
      description:
        "Professional facial treatments designed to refresh, nourish and brighten your skin.",
      icon: "🌸",
    },
    {
      number: "05",
      title: "Skin Care",
      description:
        "Personalized beauty and skincare treatments for healthy and glowing skin.",
      icon: "🧖‍♀️",
    },
    {
      number: "06",
      title: "Manicure",
      description:
        "Professional nail and hand care to keep your hands looking beautiful and well-groomed.",
      icon: "💅",
    },
    {
      number: "07",
      title: "Pedicure",
      description:
        "Relaxing foot and nail care for clean, polished and beautiful feet.",
      icon: "🦶",
    },
    {
      number: "08",
      title: "Hair Spa",
      description:
        "Deep nourishing treatments designed to make your hair healthier, smoother and shinier.",
      icon: "🧴",
    },
    {
      number: "09",
      title: "Mehndi",
      description:
        "Beautiful traditional mehndi designs for brides, festivals and special occasions.",
      icon: "🌿",
    },
    {
      number: "10",
      title: "Saree & Dupatta Draping",
      description:
        "Professional saree and dupatta draping to complete your bridal or special occasion look.",
      icon: "🥻",
    },
  ];

  return (
    <section
      id="services"
      className="py-16 sm:py-24 overflow-hidden"
      style={{ background: "#fff8f6" }}
    >

      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADING ================= */}

        <motion.div
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center max-w-2xl mx-auto mb-16"
        >

          <motion.p
            initial={{
              opacity: 0,
              letterSpacing: "0.05em",
            }}
            whileInView={{
              opacity: 1,
              letterSpacing: "0.3em",
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
            }}
            className="uppercase text-sm text-[#a85c65] mb-4"
          >
            What We Offer
          </motion.p>

          <h2
            className="text-4xl sm:text-5xl md:text-6xl"
            style={{
              fontFamily: "Cormorant Garamond, serif",
            }}
          >
            Beauty Services
            <br />

            <span className="text-[#8b4b52]">
              Made For You
            </span>
          </h2>

          <p className="mt-5 text-gray-600 leading-7">
            From everyday beauty care to complete bridal
            transformations, discover our range of professional
            beauty services.
          </p>

        </motion.div>


        {/* ================= SERVICE CARDS ================= */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service, index) => (
            <ServiceCard
              key={service.number}
              service={service}
              index={index}
            />
          ))}

        </div>


        {/* ================= BOTTOM CTA ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
          className="text-center mt-14"
        >

          <motion.a
            href="#booking"
            whileHover={{
              scale: 1.06,
              y: -4,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#8b4b52] text-white rounded-full shadow-lg shadow-[#8b4b52]/20"
          >
            View All Services

            <motion.span
              animate={{
                x: [0, 5, 0],
              }}
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

    </section>
  );
}

export default Services;