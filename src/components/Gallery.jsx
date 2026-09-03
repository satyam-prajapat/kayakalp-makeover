import { motion } from "framer-motion";
import "./Gallery.css";

const galleryImages = [
  {
    src: "/src/assets/images/bridal-1.jpg",
    title: "Bridal Elegance",
    category: "Bridal Makeup",
    className: "gallery-large",
  },
  {
    src: "/src/assets/images/bridal-2.jpg",
    title: "Traditional Beauty",
    category: "Bridal Look",
    className: "gallery-tall",
  },
  {
    src: "/src/assets/images/bridal-3.jpg",
    title: "Royal Bridal Look",
    category: "Bridal Makeup",
    className: "gallery-medium",
  },
  {
    src: "/src/assets/images/bridal-4.jpg",
    title: "Elegant Bride",
    category: "Bridal Styling",
    className: "gallery-small",
  },
  {
    src: "/src/assets/images/bridal-5.jpg",
    title: "Bridal Glam",
    category: "Makeup Artistry",
    className: "gallery-medium",
  },
  {
    src: "/src/assets/images/bridal-6.jpg",
    title: "Timeless Beauty",
    category: "Bridal Makeup",
    className: "gallery-tall",
  },
  {
    src: "/src/assets/images/bridal-7.jpg",
    title: "Bridal Portrait",
    category: "Makeover",
    className: "gallery-large",
  },
  {
    src: "/src/assets/images/bridal-8.jpg",
    title: "Classic Bridal Look",
    category: "Bridal Makeup",
    className: "gallery-medium",
  },
  {
    src: "/src/assets/images/bridal-9.jpg",
    title: "Royal Elegance",
    category: "Bridal Styling",
    className: "gallery-small",
  },
];

const directions = [
  { x: -60, y: 30 },
  { x: 0, y: 70 },
  { x: 60, y: 30 },
  { x: -60, y: 0 },
  { x: 0, y: 50 },
  { x: 60, y: 0 },
  { x: -60, y: -30 },
  { x: 0, y: -50 },
  { x: 60, y: -30 },
];

function Gallery() {
  return (
    <section
      className="gallery-section"
      id="gallery"
    >
      {/* Decorative Background */}
      <motion.div
        className="gallery-decoration"
        animate={{
          rotate: [0, 8, 0, -8, 0],
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="gallery-container">

        {/* ================= HEADING ================= */}

        <motion.div
          className="gallery-heading"
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
          <div>

            <motion.p
              className="gallery-label"
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
            >
              OUR WORK
            </motion.p>

            <h2>
              Beauty That
              <span> Speaks For Itself</span>
            </h2>

          </div>

          <motion.p
            className="gallery-intro"
            initial={{
              opacity: 0,
              x: 40,
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
              delay: 0.25,
            }}
          >
            Explore our bridal transformations, elegant makeup
            looks and beautiful moments created at KAYAKALP MAKEOVER.
          </motion.p>

        </motion.div>


        {/* ================= COLLAGE ================= */}

        <div className="gallery-collage">

          {galleryImages.map((image, index) => {

            const direction = directions[index];

            return (
              <motion.div
                key={image.src}
                className={`gallery-card ${image.className}`}
                initial={{
                  opacity: 0,
                  x: direction.x,
                  y: direction.y,
                  scale: 0.88,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.12,
                }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  scale: 1.025,
                  zIndex: 10,
                }}
              >

                {/* Image */}

                <motion.img
                  src={image.src}
                  alt={image.title}
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
                    duration: 1.4,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />


                {/* Cinematic Light */}

                <motion.div
                  className="absolute inset-y-0 left-0 w-[30%] bg-white/15 blur-xl skew-x-[-20deg] pointer-events-none"
                  initial={{
                    x: "-250%",
                  }}
                  whileInView={{
                    x: "500%",
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 1.5,
                    delay: 0.5 + index * 0.08,
                    ease: "easeInOut",
                  }}
                />


                {/* Overlay */}

                <motion.div
                  className="gallery-overlay"
                  initial={{
                    opacity: 0.65,
                  }}
                  whileHover={{
                    opacity: 1,
                  }}
                >
                  <div>

                    <motion.span
                      initial={{
                        y: 15,
                        opacity: 0,
                      }}
                      whileInView={{
                        y: 0,
                        opacity: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: 0.45 + index * 0.08,
                      }}
                    >
                      {image.category}
                    </motion.span>

                    <motion.h3
                      initial={{
                        y: 20,
                        opacity: 0,
                      }}
                      whileInView={{
                        y: 0,
                        opacity: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: 0.55 + index * 0.08,
                      }}
                    >
                      {image.title}
                    </motion.h3>

                  </div>


                  {/* Arrow */}

                  <motion.div
                    className="gallery-arrow"
                    whileHover={{
                      rotate: 45,
                      scale: 1.2,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }}
                  >
                    ↗
                  </motion.div>

                </motion.div>

              </motion.div>
            );
          })}


          {/* ================= CENTER BADGE ================= */}

          <motion.div
            className="gallery-center-badge"
            initial={{
              opacity: 0,
              scale: 0.5,
              rotate: -20,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 1,
              delay: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              scale: 1.08,
            }}
          >

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <span>THE ART OF</span>

              <strong>
                BEAUTY
              </strong>

              <small>
                KAYAKALP MAKEOVER
              </small>
            </motion.div>

          </motion.div>

        </div>


        {/* ================= BOTTOM ================= */}

        <motion.div
          className="gallery-bottom"
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

          <p>
            Every bride deserves a look that feels uniquely hers.
          </p>

          <motion.a
            href="https://www.instagram.com/kayakalp_makeover_/"
            target="_blank"
            rel="noopener noreferrer"
            className="gallery-instagram-btn"
            whileHover={{
              scale: 1.05,
              x: 5,
            }}
            whileTap={{
              scale: 0.96,
            }}
          >
            Follow Us on Instagram

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
              ↗
            </motion.span>

          </motion.a>

        </motion.div>

      </div>
    </section>
  );
}

export default Gallery;