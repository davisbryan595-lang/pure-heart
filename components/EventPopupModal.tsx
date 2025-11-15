"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const events = [
  {
    id: 1,
    title: "B³ Youth Athletic Summit & Tournament",
    image: "https://cdn.builder.io/api/v1/image/assets%2F5c758e804cba4fa3a488e9088887877b%2Fd1094c8a7af44fafb9bb8878b3059372?format=webp&width=800",
  },
  {
    id: 2,
    title: "Hoop 4 Heart Food Drive",
    image: "https://cdn.builder.io/api/v1/image/assets%2F5c758e804cba4fa3a488e9088887877b%2Fad12ba4cf31b4af68b0683539c310ab6?format=webp&width=800",
  },
]

export default function EventPopupModal() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (!isVisible) return

    const autoAdvanceTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % events.length)
    }, 10000) // 10 seconds per slide

    return () => clearInterval(autoAdvanceTimer)
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const autoCloseTimer = setTimeout(() => {
      handleClose()
    }, 30000) // 30 seconds total (3 slides at 10 seconds each, or 2 full rotations)

    return () => clearTimeout(autoCloseTimer)
  }, [isVisible])

  const handleClose = () => {
    setIsVisible(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 p-3 sm:p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative w-full max-w-sm sm:max-w-md bg-white rounded-lg sm:rounded-xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50 p-1 sm:p-2 bg-white/90 hover:bg-white rounded-full shadow-md transition-colors"
              aria-label="Close event popup"
            >
              <X size={20} className="sm:w-7 sm:h-7 text-gray-800" />
            </button>

            {/* Carousel Container */}
            <div className="relative w-full overflow-hidden bg-black">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide}
                  src={events[currentSlide].image}
                  alt={events[currentSlide].title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-auto object-contain"
                />
              </AnimatePresence>

              {/* Previous Button */}
              <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-40 p-1 sm:p-2 bg-white/80 hover:bg-white rounded-full shadow-md transition-colors"
                aria-label="Previous event"
              >
                <ChevronLeft size={20} className="sm:w-6 sm:h-6 text-gray-800" />
              </button>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-40 p-1 sm:p-2 bg-white/80 hover:bg-white rounded-full shadow-md transition-colors"
                aria-label="Next event"
              >
                <ChevronRight size={20} className="sm:w-6 sm:h-6 text-gray-800" />
              </button>
            </div>

            {/* Slide Indicators (Dots) */}
            <div className="flex justify-center gap-1.5 sm:gap-2 p-3 sm:p-4 bg-black">
              {events.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                    currentSlide === index ? "bg-white" : "bg-white/40 hover:bg-white/60"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Go to event ${index + 1}`}
                />
              ))}
            </div>

            {/* Slide Counter */}
            <div className="px-3 sm:px-4 py-2 sm:pb-3 text-center text-xs sm:text-sm text-gray-600 bg-gray-50">
              {currentSlide + 1} of {events.length}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
