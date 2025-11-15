"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Dumbbell, Users, Trophy } from "lucide-react"

const services = [
  {
    icon: Dumbbell,
    title: "Athletic Training — 1-on-1 & Team",
    description:
      "Comprehensive strength and conditioning programs designed to enhance performance, prevent injuries, and build athletic excellence. Personalized one-on-one coaching and high-energy team sessions focused on skill development, strategy, and confidence.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Users,
    title: "Volleyball Training",
    description:
      "Expert coaching in all aspects of volleyball - serving, passing, setting, hitting, and defensive techniques for players at every level.",
    image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=2007&auto=format&fit=crop",
  },
  {
    icon: Trophy,
    title: "Basketball Training",
    description:
      "Develop your basketball skills with focused training on shooting, ball handling, defense, and game IQ from experienced coaches.",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop",
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" ref={ref} className="py-16 sm:py-20 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-14 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 sm:mb-4">
            Our <span className="text-[#0F172A]">Services</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Tailored training programs to elevate your game
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl hover:shadow-[#0F172A]/20 transition-all duration-500 hover:-translate-y-2 bg-card h-full flex flex-col">
                <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent" />
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                    <service.icon className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 text-[#0F172A]" />
                  </div>
                </div>
                <CardContent className="p-4 sm:p-5 md:p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 sm:mb-3 group-hover:text-[#0F172A] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
