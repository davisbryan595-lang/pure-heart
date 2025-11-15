"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Animated counter logic
  const Counter = ({ target, duration = 1500 }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!isInView) return
      let start = 0
      const end = parseInt(target.replace(/\D/g, ""), 10)
      const increment = end / (duration / 16)

      const counter = setInterval(() => {
        start += increment
        if (start >= end) {
          clearInterval(counter)
          setCount(end)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(counter)
    }, [isInView, target, duration])

    // Add back plus or percent symbols if needed
    const suffix = target.includes("+") ? "+" : target.includes("%") ? "%" : ""
    return <>{count}{suffix}</>
  }

  return (
    <section id="about" ref={ref} className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1519766304817-4f37bda74a26?q=80&w=2070&auto=format&fit=crop)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/90 to-[#0F172A]/80" />
      </div>

      <div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8">
            About <span className="text-[#0F172A]">Pure Heart Athletics</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-4 sm:mb-6 leading-relaxed">
            At Pure Heart Athletics, we believe in developing not just skilled athletes, but champions with character.
            Our comprehensive training programs combine cutting-edge techniques with time-tested fundamentals to help
            athletes reach their full potential.
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed">
            Serving the Carolinas and Virginia area, we specialize in volleyball and basketball training for athletes of
            all levels. Our experienced coaches are dedicated to fostering excellence, discipline, and a genuine love
            for the game.
          </p>


        </motion.div>

        {/* Stats with animated count-up */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-14 md:mt-16 max-w-5xl mx-auto"
        >
          {[
            { number: "500+", label: "Athletes Trained" },
            { number: "30+", label: "Years Experience" },
            { number: "50+", label: "Championships Won" },
            { number: "100%", label: "Dedication" },
          ].map((stat, index) => (
            <div
              key={index}
              className="glossy-card p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-2">
                <Counter target={stat.number} />
              </div>
              <div className="text-white/80 font-medium text-xs sm:text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
