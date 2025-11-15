"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const pricingPlans = [
  {
    name: "Starter",
    price: "$99",
    period: "/month",
    description: "Perfect for beginners looking to develop fundamentals",
    features: [
      "4 training sessions per month",
      "Group training environment",
      "Basic skill development",
      "Progress tracking",
      "Access to training facilities",
    ],
    popular: false,
  },
  {
    name: "Elite",
    price: "$199",
    period: "/month",
    description: "For serious athletes committed to excellence",
    features: [
      "8 training sessions per month",
      "Small group or semi-private",
      "Advanced skill development",
      "Personalized training plan",
      "Video analysis",
      "Nutrition guidance",
      "Priority scheduling",
    ],
    popular: true,
  },
  {
    name: "Champion",
    price: "$349",
    period: "/month",
    description: "Ultimate program for competitive athletes",
    features: [
      "Unlimited training sessions",
      "One-on-one coaching",
      "Comprehensive performance plan",
      "Advanced video analysis",
      "Nutrition & recovery coaching",
      "Mental performance training",
      "Tournament preparation",
      "24/7 coach support",
    ],
    popular: false,
  },
]

export default function PricingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="pricing"
      ref={ref}
      className="py-24 md:py-32 bg-gradient-to-b from-background via-muted/20 to-background"
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-14 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 sm:mb-4">
            Pricing <span className="text-primary">Plans</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan to achieve your athletic goals
          </p>
          <div className="w-20 sm:w-24 h-1 bg-primary mx-auto mt-3 sm:mt-4 rounded-full" />
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={plan.popular ? "md:-mt-4" : ""}
            >
              <Card
                className={`relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-2xl ${
                  plan.popular
                    ? "bg-gradient-to-br from-[#002B5B]/90 via-[#004080]/70 to-[#1B263B]/80 text-white shadow-primary/30 ring-2 ring-primary"
                    : "bg-card"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-[#002B5B] text-white px-4 py-1 text-sm font-bold rounded-bl-lg shadow-md">
                    MOST POPULAR
                  </div>
                )}
                <CardHeader className="text-center pb-8 pt-8">
                  <h3
                    className={`text-2xl font-bold mb-2 ${
                      plan.popular ? "text-white" : "text-foreground"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span
                      className={`text-5xl font-bold ${
                        plan.popular ? "text-white" : "text-primary"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={`ml-2 ${
                        plan.popular ? "text-white/70" : "text-muted-foreground"
                      }`}
                    >
                      {plan.period}
                    </span>
                  </div>
                  <p
                    className={`text-sm ${
                      plan.popular ? "text-white/80" : "text-muted-foreground"
                    }`}
                  >
                    {plan.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4 pb-8">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check
                          className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                            plan.popular ? "text-white" : "text-primary"
                          }`}
                        />
                        <span className={`${
                            plan.popular ? "text-white/90" : "text-foreground"
                          }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full mt-6 rounded-full py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 ${
                      plan.popular
                        ? "bg-white text-[#002B5B] hover:bg-gray-100"
                        : "bg-[#002B5B] hover:bg-[#00376b] text-white"
                    }`}
                    onClick={() =>
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Sign Up Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
