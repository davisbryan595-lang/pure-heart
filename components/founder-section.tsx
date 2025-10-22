"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function FounderSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="founder" ref={ref} className="py-24 md:py-32 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Our <span className="text-[#0F172A]">Founder</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            The vision and values behind Pure Heart Athletics
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="overflow-hidden rounded-xl shadow-lg"
          >
            <div
              className="h-[380px] bg-cover bg-center"
              style={{ backgroundImage: `url(/pure2.jpeg)` }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Coach Gray</h3>
            <p className="text-[#0F172A] font-medium mb-6">Founder & Head Coach</p>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Pure Heart Athletics was founded on a simple belief: greatness is built from the inside out. We train the whole
                athlete — mind, body, and character — so performance rises with purpose.
              </p>
              <p>
                With decades of combined coaching and player development, our leadership brings a relentless commitment to
                fundamentals, skill progression, and confidence. Every session is designed to build discipline, resilience, and love for the game.
              </p>
              <p>
                From first-time players to elite competitors, our programs meet athletes where they are and elevate them to the next level.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
