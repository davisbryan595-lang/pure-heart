"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const team = [
  {
    name: "Coach Marcus Johnson",
    role: "Head Basketball Coach",
    image: "/t1.jpg",
    bio: "15+ years coaching experience with multiple championship titles",
  },
  {
    name: "Coach Sarah Williams",
    role: "Head Volleyball Coach",
    image: "/t2.jpg",
    bio: "Former collegiate athlete and certified strength coach",
  },
  {
    name: "Coach David Chen",
    role: "Athletic Performance Director",
    image: "/pure2.jpeg",
    bio: "Specializes in sports science and injury prevention",
  },
  {
    name: "Coach Emily Rodriguez",
    role: "Youth Development Coach",
    image: "/pure5.jpeg",
    bio: "Passionate about building fundamentals and confidence",
  },
]

export default function TeamSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % team.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + team.length) % team.length)
  }

  return (
    <section id="team" ref={ref} className="py-24 md:py-32 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Meet the <span className="text-[#0F172A]">Team</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert coaches dedicated to your success
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl hover:shadow-[#0F172A]/20 transition-all duration-500 bg-card">
                <div className="relative h-80 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2"
                    style={{ backgroundImage: `url(${member.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-[#0F172A] text-sm font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-white/80 leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative max-w-sm mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <Card className="overflow-hidden border-0 shadow-2xl bg-card">
              <div className="relative h-96">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${team[currentIndex].image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/60 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{team[currentIndex].name}</h3>
                  <p className="text-[#0F172A] text-base font-medium mb-3">{team[currentIndex].role}</p>
                  <p className="text-base text-white/90 leading-relaxed">{team[currentIndex].bio}</p>
                </div>
              </div>
            </Card>
          </motion.div>

          <div className="flex justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full bg-[#0F172A]/10 border-[#0F172A]/30 hover:bg-[#0F172A] hover:text-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full bg-[#0F172A]/10 border-[#0F172A]/30 hover:bg-[#0F172A] hover:text-white"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
