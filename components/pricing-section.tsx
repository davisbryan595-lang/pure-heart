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
    <section id="pricing" ref={ref} className="py-24 md:py-32 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Pricing <span className="text-primary">Plans</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan to achieve your athletic goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={plan.popular ? "md:-mt-4" : ""}
            >
              <Card
                className={`relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  plan.popular ? "bg-gradient-to-br from-primary/10 to-accent/10 ring-2 ring-primary" : "bg-card"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                    MOST POPULAR
                  </div>
                )}
                <CardHeader className="text-center pb-8 pt-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-5xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </CardHeader>
                <CardContent className="space-y-4 pb-8">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full mt-6 rounded-full py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 ${
                      plan.popular
                        ? "bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30"
                        : "bg-secondary hover:bg-secondary/90 text-white"
                    }`}
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
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
