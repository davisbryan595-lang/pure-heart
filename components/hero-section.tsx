"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 brightness-75"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-4 max-w-5xl mx-auto text-center">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 text-balance drop-shadow-[0_0_15px_rgba(0,0,0,0.4)]"
          >
            Next-Gen Greatness,{" "}
            <span className="text-[#0D0A6C] drop-shadow-[0_0_15px_rgba(13,10,108,0.6)]">
              Fueled by Heart
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-12 text-pretty"
          >
            Elite athletic training for volleyball and basketball athletes
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-[#0D0A6C] hover:bg-[#0D0A6C]/90 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-[0_0_25px_rgba(13,10,108,0.6)] hover:scale-105 transition-all duration-300"
              onClick={() =>
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Services
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-[#0D0A6C]/50 text-white hover:bg-[#0D0A6C]/20 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-[0_0_25px_rgba(13,10,108,0.6)] hover:scale-105 transition-all duration-300"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get Started
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-[#0D0A6C] animate-bounce drop-shadow-[0_0_10px_rgba(13,10,108,0.6)]" />
      </motion.div>
    </section>
  )
}
