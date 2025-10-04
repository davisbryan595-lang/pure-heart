"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/90 to-primary/80" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            About <span className="text-accent">Pure Heart Athletics</span>
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
            At Pure Heart Athletics, we believe in developing not just skilled athletes, but champions with character.
            Our comprehensive training programs combine cutting-edge techniques with time-tested fundamentals to help
            athletes reach their full potential.
          </p>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            Serving the Carolinas and Virginia area, we specialize in volleyball and basketball training for athletes of
            all levels. Our experienced coaches are dedicated to fostering excellence, discipline, and a genuine love
            for the game.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-5xl mx-auto"
        >
          {[
            { number: "500+", label: "Athletes Trained" },
            { number: "15+", label: "Years Experience" },
            { number: "50+", label: "Championships Won" },
            { number: "100%", label: "Dedication" },
          ].map((stat, index) => (
            <div
              key={index}
              className="glossy-card p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-white/80 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
