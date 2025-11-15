"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 sm:py-16 md:py-20 lg:py-0">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 brightness-75"
        style={{
          backgroundImage: "url('https://cdn.builder.io/api/v1/image/assets%2F4190207b58b5435387c7048034219577%2F63a7e19cfd924af391aef55c79bda403?format=webp&width=800')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-3 sm:px-4 md:px-6 w-full max-w-5xl mx-auto text-center">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 lg:p-12 shadow-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 text-balance drop-shadow-[0_0_15px_rgba(0,0,0,0.4)]"
          >
            Next-Gen Greatness,{" "}
            <span className="text-[#0D0A6C] drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]">
              Fueled by Heart
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 mb-8 sm:mb-10 md:mb-12 text-pretty"
          >
            Elite athletic training for volleyball and basketball athletes
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-[#0D0A6C] hover:bg-[#0D0A6C]/90 text-white text-sm sm:text-base md:text-lg px-6 sm:px-8 py-4 sm:py-5 md:py-6 rounded-full shadow-lg hover:shadow-[0_0_25px_rgba(13,10,108,0.6)] hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              onClick={() =>
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Services
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-[#0D0A6C]/50 text-white hover:bg-[#0D0A6C]/20 text-sm sm:text-base md:text-lg px-6 sm:px-8 py-4 sm:py-5 md:py-6 rounded-full shadow-lg hover:shadow-[0_0_25px_rgba(13,10,108,0.6)] hover:scale-105 transition-all duration-300 w-full sm:w-auto"
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
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <ChevronDown className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-[#0D0A6C] animate-bounce drop-shadow-[0_0_10px_rgba(13,10,108,0.6)]" />
      </motion.div>
    </section>
  )
}
