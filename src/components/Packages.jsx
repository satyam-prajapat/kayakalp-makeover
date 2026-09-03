import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

function PackageCard({ pkg, index }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [5, -5]),
    {
      stiffness: 180,
      damping: 22,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-5, 5]),
    {
      stiffness: 180,
      damping: 22,
    }
  );

  const spotlightX = useSpring(
    useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]),
    {
      stiffness: 200,
      damping: 25,
    }
  );

  const spotlightY = useSpring(
    useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]),
    {
      stiffness: 200,
      damping: 25,
    }
  );

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    mouseX.set(
      (event.clientX - rect.left) / rect.width - 0.5
    );

    mouseY.set(
      (event.clientY - rect.top) / rect.height - 0.5
    );
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
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="h-full"
      style={{
        perspective: 1200,
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
        }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
        className={`relative h-full rounded-3xl p-6 sm:p-8 overflow-hidden ${
          pkg.popular
            ? "bg-[#8b4b52] text-white"
            : "bg-white text-[#2b2020] border border-[#ead8d5]"
        }`}
      >

        {/* ================= SPOTLIGHT ================= */}

        <motion.div
          className="absolute pointer-events-none w-52 h-52 rounded-full blur-3xl"
          style={{
            left: spotlightX,
            top: spotlightY,
            x: "-50%",
            y: "-50%",
            background: pkg.popular
              ? "rgba(255,255,255,0.14)"
              : "rgba(201,151,143,0.18)",
          }}
        />

        {/* ================= PREMIUM BORDER ================= */}

        {pkg.popular && (
          <motion.div
            className="absolute inset-0 rounded-3xl border border-white/30 pointer-events-none"
            animate={{
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}

        {/* ================= BACKGROUND NUMBER ================= */}

        <motion.div
          className={`absolute -bottom-8 -right-2 text-[130px] leading-none font-serif select-none pointer-events-none ${
            pkg.popular
              ? "text-white/[0.05]"
              : "text-[#8b4b52]/[0.04]"
          }`}
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
            duration: 1,
            delay: index * 0.15 + 0.3,
          }}
        >
          0{index + 1}
        </motion.div>


        {/* ================= CONTENT ================= */}

        <div
          className="relative z-10"
          style={{
            transform: "translateZ(35px)",
          }}
        >

          {/* Popular Badge */}

          {pkg.popular && (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.7,
                y: -10,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.5,
              }}
              className="absolute top-0 right-0"
            >
              <span className="px-3 sm:px-4 py-2 rounded-full bg-white text-[#8b4b52] text-xs font-medium shadow-lg">
                MOST POPULAR
              </span>
            </motion.div>
          )}


          {/* Package Name */}

          <motion.p
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.15 + 0.15,
            }}
            className={`text-sm uppercase tracking-[0.2em] ${
              pkg.popular
                ? "text-white/70"
                : "text-[#a85c65]"
            }`}
          >
            {pkg.name}
          </motion.p>


          {/* Price */}

          <motion.h3
            initial={{
              opacity: 0,
              y: 25,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.15 + 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              scale: 1.04,
            }}
            className="text-3xl sm:text-4xl mt-5 origin-left"
            style={{
              fontFamily: "Cormorant Garamond, serif",
            }}
          >
            {pkg.price}
          </motion.h3>


          {/* Description */}

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
              delay: index * 0.15 + 0.45,
            }}
            className={`leading-7 mt-4 ${
              pkg.popular
                ? "text-white/80"
                : "text-gray-500"
            }`}
          >
            {pkg.description}
          </motion.p>


          {/* Divider */}

          <motion.div
            initial={{
              scaleX: 0,
            }}
            whileInView={{
              scaleX: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.15 + 0.55,
            }}
            className={`origin-left h-px my-7 ${
              pkg.popular
                ? "bg-white/20"
                : "bg-[#ead8d5]"
            }`}
          />


          {/* Features */}

          <div className="space-y-4">

            {pkg.features.map((feature, featureIndex) => (
              <motion.div
                key={feature}
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.45,
                  delay:
                    index * 0.15 +
                    0.6 +
                    featureIndex * 0.07,
                }}
                whileHover={{
                  x: 6,
                }}
                className="flex items-center gap-3"
              >

                <motion.span
                  whileHover={{
                    scale: 1.2,
                    rotate: 8,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 12,
                  }}
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-sm flex-shrink-0 ${
                    pkg.popular
                      ? "bg-white/15 text-white"
                      : "bg-[#f6e7e5] text-[#8b4b52]"
                  }`}
                >
                  ✓
                </motion.span>

                <span
                  className={
                    pkg.popular
                      ? "text-white/90"
                      : "text-gray-600"
                  }
                >
                  {feature}
                </span>

              </motion.div>
            ))}

          </div>


          {/* Booking Button */}

          <motion.a
            href="#booking"
            whileHover={{
              scale: 1.04,
              y: -4,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className={`relative flex items-center justify-center gap-3 mt-9 px-6 py-4 rounded-full overflow-hidden ${
              pkg.popular
                ? "bg-white text-[#8b4b52]"
                : "bg-[#8b4b52] text-white"
            }`}
          >

            <span className="relative z-10">
              Book This Package
            </span>

            <motion.span
              className="relative z-10"
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

        </div>

      </motion.div>
    </motion.div>
  );
}


function Packages() {

  const packages = [
    {
      name: "Bridal Classic",
      price: "Starting From ₹8,999",
      description:
        "A beautiful and elegant bridal look for your special day.",
      features: [
        "Bridal Makeup",
        "Basic Hairstyling",
        "Eye Makeup",
        "Lashes",
        "Basic Draping",
      ],
    },

    {
      name: "Bridal Premium",
      price: "Starting From ₹14,999",
      description:
        "A complete bridal transformation with a polished and glamorous finish.",
      features: [
        "HD Bridal Makeup",
        "Premium Hairstyling",
        "Advanced Eye Makeup",
        "Lashes",
        "Draping",
        "Hair Accessories",
      ],
      popular: true,
    },

    {
      name: "Bridal Luxury",
      price: "Starting From ₹19,999",
      description:
        "The ultimate bridal experience created for an unforgettable wedding look.",
      features: [
        "HD / Luxury Makeup",
        "Premium Hairstyling",
        "Professional Eye Makeup",
        "Lashes",
        "Premium Draping",
        "Hair Accessories",
        "Bridal Touch-up",
      ],
    },
  ];

  return (
    <section
      id="packages"
      className="py-16 sm:py-24 overflow-hidden"
      style={{
        background: "#fff8f6",
      }}
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
              duration: 0.9,
            }}
            className="uppercase text-sm text-[#a85c65] mb-4"
          >
            Bridal Packages
          </motion.p>

          <h2
            className="text-4xl sm:text-5xl md:text-6xl leading-tight"
            style={{
              fontFamily: "Cormorant Garamond, serif",
            }}
          >
            Choose Your
            <br />

            <span className="text-[#8b4b52]">
              Perfect Bridal Look
            </span>
          </h2>

          <p className="mt-5 text-gray-600 leading-7">
            Beautiful bridal packages thoughtfully designed to
            match your style, occasion and beauty needs.
          </p>

        </motion.div>


        {/* ================= PACKAGE CARDS ================= */}

        <div className="grid lg:grid-cols-3 gap-7 items-stretch">

          {packages.map((pkg, index) => (
            <PackageCard
              key={pkg.name}
              pkg={pkg}
              index={index}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Packages;