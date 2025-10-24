"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const team = [
  {
    name: "COACH JONES BAKER",
    role: "Women’s Basketball, Volleyball & Personal Athlete Trainer",
    image: "/lola.jpg",
    bio: "2x All-American Champion • 3x Hall of Famer",
  },
  {
    name: "COACH GRAY",
    role: "CEO & Founder of Grayhound Group • Professional Athlete Trainer • Licensed Mental Health Therapist",
    image: "/Gray.jpg",
    bio: "Leadership and athlete development across disciplines",
  },
  {
    name: "COACH MANNING",
    role: "Former Harlem Globetrotter • Professional Athlete Trainer & Coach",
    image: "/manning.jpg",
    bio: "Elite-level skills training and mentorship",
  },
  {
    name: "ALI DARROUGH",
    role: "Executive Youth Sports Operator • Manager • Assistant Coach",
    image: "/ALI.jpg",
    bio: "Program operations, team coordination, and athlete support",
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
                    className={`absolute inset-0 bg-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2 ${
                      index === 1 ? "bg-[position:center_10%]" : index === 3 ? "bg-[position:center_30%]" : "bg-center"
                    }`}
                    style={{ backgroundImage: `url(${member.image})` }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-[#0F172A] text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
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
                  className={`absolute inset-0 bg-cover ${
                    currentIndex === 1 || currentIndex === 3 ? "bg-[position:center_20%]" : "bg-center"
                  }`}
                  style={{ backgroundImage: `url(${team[currentIndex].image})` }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{team[currentIndex].name}</h3>
                <p className="text-[#0F172A] text-base font-medium mb-3">{team[currentIndex].role}</p>
                <p className="text-base text-muted-foreground leading-relaxed">{team[currentIndex].bio}</p>
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
