import { useState } from "react";
import { motion } from "framer-motion";

function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "919695294325";

    const message = `
Hello KAYAKALP MAKEOVER,

I would like to book an appointment.

Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service}
Date: ${formData.date}
Time: ${formData.time}

Message:
${formData.message}
    `;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  const infoItems = [
    {
      icon: "📅",
      title: "Flexible Appointments",
      text: "Choose a date and time that works for you",
    },
    {
      icon: "💄",
      title: "Professional Beauty Services",
      text: "Makeup, bridal, hair and beauty services",
    },
    {
      icon: "💬",
      title: "Quick Confirmation",
      text: "We'll confirm your appointment on WhatsApp",
    },
  ];

  const inputClass =
    "w-full px-4 py-3.5 rounded-xl border border-[#ead8d5] bg-white outline-none transition-all duration-300 focus:border-[#8b4b52] focus:ring-4 focus:ring-[#8b4b52]/10";

  return (
    <section
      id="booking"
      className="py-16 sm:py-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* ================= LEFT CONTENT ================= */}

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
              className="uppercase text-sm text-[#a85c65] mb-5"
            >
              Book Your Visit
            </motion.p>


            <motion.h2
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
              Let's Create
              <br />

              <span className="text-[#8b4b52]">
                Your Perfect Look
              </span>
            </motion.h2>


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
              className="text-gray-600 leading-8 mt-6 max-w-lg"
            >
              Ready for your transformation? Book your appointment
              with KAYAKALP MAKEOVER and let us create a beautiful
              look specially for you.
            </motion.p>


            {/* ================= INFO ITEMS ================= */}

            <div className="space-y-5 mt-9">

              {infoItems.map((item, index) => (
                <motion.div
                  key={item.title}
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
                    duration: 0.6,
                    delay: 0.45 + index * 0.12,
                  }}
                  whileHover={{
                    x: 7,
                  }}
                  className="flex items-center gap-4"
                >

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
                    className="w-11 h-11 rounded-full bg-[#f6e7e5] flex items-center justify-center flex-shrink-0"
                  >
                    {item.icon}
                  </motion.div>

                  <div>
                    <p className="font-medium">
                      {item.title}
                    </p>

                    <p className="text-sm text-gray-500">
                      {item.text}
                    </p>
                  </div>

                </motion.div>
              ))}

            </div>

          </motion.div>


          {/* ================= FORM ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 70,
              rotateY: 5,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              rotateY: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
            style={{
              perspective: 1200,
            }}
          >

            {/* Decorative Glow */}

            <motion.div
              className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-[#ead2ce]/40 blur-3xl pointer-events-none"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />


            <motion.div
              whileHover={{
                y: -5,
              }}
              transition={{
                duration: 0.4,
              }}
              className="relative bg-[#fff8f6] rounded-[30px] p-5 sm:p-7 md:p-10 border border-[#ead8d5] shadow-sm hover:shadow-2xl"
            >

              {/* Form Heading */}

              <motion.h3
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
                  delay: 0.3,
                }}
                className="text-3xl text-[#8b4b52]"
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                }}
              >
                Book an Appointment
              </motion.h3>

              <p className="text-gray-500 text-sm mt-2 mb-7">
                Fill in your details and we'll contact you shortly.
              </p>


              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* NAME */}

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                >
                  <label className="block text-sm mb-2">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className={inputClass}
                  />
                </motion.div>


                {/* PHONE */}

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.42 }}
                >
                  <label className="block text-sm mb-2">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                    className={inputClass}
                  />
                </motion.div>


                {/* SERVICE */}

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.49 }}
                >
                  <label className="block text-sm mb-2">
                    Select Service
                  </label>

                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  >
                    <option value="">
                      Choose a service
                    </option>

                    <option value="Bridal Makeup">
                      Bridal Makeup
                    </option>

                    <option value="Party Makeup">
                      Party Makeup
                    </option>

                    <option value="Hair Styling">
                      Hair Styling
                    </option>

                    <option value="Facial">
                      Facial
                    </option>

                    <option value="Skin Care">
                      Skin Care
                    </option>

                    <option value="Manicure">
                      Manicure
                    </option>

                    <option value="Pedicure">
                      Pedicure
                    </option>

                    <option value="Hair Spa">
                      Hair Spa
                    </option>

                    <option value="Mehndi">
                      Mehndi
                    </option>

                    <option value="Saree & Dupatta Draping">
                      Saree & Dupatta Draping
                    </option>
                  </select>
                </motion.div>


                {/* DATE + TIME */}

                <div className="grid sm:grid-cols-2 gap-4">

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.56,
                    }}
                  >
                    <label className="block text-sm mb-2">
                      Preferred Date
                    </label>

                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    />
                  </motion.div>


                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.63,
                    }}
                  >
                    <label className="block text-sm mb-2">
                      Preferred Time
                    </label>

                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    />
                  </motion.div>

                </div>


                {/* MESSAGE */}

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.7,
                  }}
                >
                  <label className="block text-sm mb-2">
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us anything you'd like us to know..."
                    rows="4"
                    className={`${inputClass} resize-none`}
                  />
                </motion.div>


                {/* SUBMIT */}

                <motion.button
                  type="submit"
                  whileHover={{
                    scale: 1.02,
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="relative w-full py-4 rounded-full bg-[#8b4b52] text-white overflow-hidden shadow-lg shadow-[#8b4b52]/20"
                >

                  <span className="relative z-10">
                    Book Appointment on WhatsApp →
                  </span>

                  {/* Button Shine */}

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

                </motion.button>

              </form>

            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Booking;