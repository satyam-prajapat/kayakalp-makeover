import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

function TestimonialCard({ testimonial, index }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [4, -4]),
    {
      stiffness: 180,
      damping: 22,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-4, 4]),
    {
      stiffness: 180,
      damping: 22,
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
        }}
        transition={{
          duration: 0.35,
        }}
        className="relative h-full bg-white rounded-3xl p-6 sm:p-8 border border-[#ead8d5] overflow-hidden shadow-sm hover:shadow-2xl"
      >

        {/* Soft Background Glow */}

        <motion.div
          className="absolute -top-20 -right-20 w-44 h-44 rounded-full bg-[#f3dedb] blur-3xl opacity-30 pointer-events-none"
          whileHover={{
            scale: 1.5,
            opacity: 0.65,
          }}
          transition={{
            duration: 0.6,
          }}
        />


        {/* Large Quote */}

        <motion.div
          className="absolute top-5 right-7 text-8xl leading-none text-[#8b4b52]/[0.06] font-serif pointer-events-none"
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
            duration: 0.8,
            delay: index * 0.15 + 0.3,
          }}
        >
          “
        </motion.div>


        <div
          className="relative z-10"
          style={{
            transform: "translateZ(30px)",
          }}
        >

          {/* Stars */}

          <div className="flex gap-1">

            {[0, 1, 2, 3, 4].map((star) => (
              <motion.span
                key={star}
                initial={{
                  opacity: 0,
                  y: 10,
                  scale: 0.5,
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
                  duration: 0.35,
                  delay:
                    index * 0.15 +
                    0.25 +
                    star * 0.08,
                  type: "spring",
                  stiffness: 250,
                }}
                whileHover={{
                  scale: 1.25,
                  y: -2,
                }}
                className="text-[#b47b52] text-lg"
              >
                ★
              </motion.span>
            ))}

          </div>


          {/* Review */}

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
              delay: index * 0.15 + 0.7,
            }}
            className="text-gray-600 leading-8 mt-6"
          >
            "{testimonial.review}"
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
              delay: index * 0.15 + 0.85,
            }}
            className="origin-left h-px bg-[#ead8d5] my-7"
          />


          {/* Client */}

          <motion.div
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
              duration: 0.7,
              delay: index * 0.15 + 0.95,
            }}
            className="flex items-center gap-4"
          >

            {/* Avatar */}

            <motion.div
              whileHover={{
                scale: 1.12,
                rotate: 8,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 12,
              }}
              className="w-12 h-12 rounded-full bg-[#f6e7e5] flex items-center justify-center text-[#8b4b52] text-lg"
            >
              {testimonial.name.charAt(0)}
            </motion.div>


            <div>

              <h3 className="font-medium text-gray-800">
                {testimonial.name}
              </h3>

              <p className="text-sm text-gray-400 mt-1">
                {testimonial.role}
              </p>

            </div>

          </motion.div>

        </div>

      </motion.div>
    </motion.div>
  );
}


function Testimonials() {

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Bridal Client",
      review:
        "KAYAKALP MAKEOVER made my wedding day even more special. The makeup was elegant, natural and stayed beautiful throughout the day.",
    },
    {
      name: "Ananya Singh",
      role: "Party Makeup Client",
      review:
        "Absolutely loved my makeup and hairstyle. The entire experience was comfortable and professional. I received so many compliments!",
    },
    {
      name: "Neha Verma",
      role: "Bridal Client",
      review:
        "From the first consultation to the final look, everything was perfect. The attention to detail was amazing and I felt beautiful on my special day.",
    },
  ];

  return (
    <section
      id="testimonials"
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
            Client Love
          </motion.p>


          <h2
            className="text-4xl sm:text-5xl md:text-6xl leading-tight"
            style={{
              fontFamily: "Cormorant Garamond, serif",
            }}
          >
            What Our Clients
            <br />

            <span className="text-[#8b4b52]">
              Say About Us
            </span>
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
              delay: 0.25,
            }}
            className="mt-5 text-gray-600 leading-7"
          >
            Every transformation is special to us. Here's what
            some of our lovely clients have to say.
          </motion.p>

        </motion.div>


        {/* ================= REVIEWS ================= */}

        <div className="grid md:grid-cols-3 gap-7">

          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
            />
          ))}

        </div>


        {/* ================= RATING ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
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
          className="flex flex-col items-center mt-14"
        >

          <div className="flex gap-1">

            {[0, 1, 2, 3, 4].map((star) => (
              <motion.span
                key={star}
                initial={{
                  opacity: 0,
                  scale: 0.5,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.3,
                  delay: 0.5 + star * 0.08,
                  type: "spring",
                  stiffness: 250,
                }}
                className="text-[#b47b52] text-xl"
              >
                ★
              </motion.span>
            ))}

          </div>

          <p className="text-gray-500 mt-2">
            Trusted by our beautiful clients
          </p>

        </motion.div>

      </div>
    </section>
  );
}

export default Testimonials;