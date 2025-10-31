"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FounderSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isExpanded, setIsExpanded] = useState(false)

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
              style={{ backgroundImage: `url(/lola.jpg)` }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Lola Jones</h3>
            <p className="text-[#0F172A] font-medium mb-6">Founder & Head Coach</p>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Women's Basketball, Volleyball & Personal Athlete Trainer
                2x All-American Champion • 3x Hall of Famer
              </p>
              <p>
                Lola Jones Baker's legacy in Rowan County athletics is built on excellence, discipline, and faith. A proud alumna of North Rowan High School, Lola made history as the Rowan County Player of the Year and a member of the All-Rowan County First Team. Her exceptional performance on the court, combined with her leadership and dedication, set a standard for athletes across the county.
                Beyond basketball, Lola also shined in volleyball, showcasing her versatility and commitment to sports. Today, as a personal athlete trainer, she continues to uplift and inspire others—helping young athletes strengthen not only their physical abilities but also their character and confidence.
              </p>
              <p>
                Lola Jones Baker remains a symbol of determination, faith, and achievement — a Rowan County legend whose legacy continues to inspire generations.
              </p>
            </div>
            <motion.blockquote
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-10 max-w-3xl mx-auto text-center text-white/90 italic"
            >
              <span className="inline-block border-l-4 border-[#0F172A] pl-4 text-black">
                "You did not make Me" "You can Not Break Me"
              </span>
            </motion.blockquote>

            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-[#0F172A] hover:bg-[#1a2340] text-white rounded-lg font-medium transition-colors"
            >
              Learn More
              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
              />
            </motion.button>
          </motion.div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-8 overflow-hidden"
            >
              <div className="max-w-6xl mx-auto px-4 pt-8 border-t border-muted-foreground/20">
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <div>
                      <h4 className="text-lg font-semibold text-[#0F172A] mb-2">North Greenville University Athletic Hall of Fame</h4>
                      <p className="text-sm text-muted-foreground mb-3">October 25, 2008</p>
                    </div>
                    <p>
                      A highly talented star from the North Greenville junior college days, Lola Jones Baker was a junior college All-Region selection her sophomore year of 1992, and also made All-Western Carolinas Junior College All-Conference. Lola averaged 15 points and 10 rebounds per game her sophomore year and had 12 points and 8 rebounds as a freshman.
                    </p>
                    <p>
                      Lola was recruited to NGC out of Salisbury, NC and "blossomed the second half of her freshman season," according to head coach Jane Arledge. "Lola became a dominant post player for us and had numerous games over 30 points. She played the backline on our press and had a lot of steals. She was a very, very good defender."
                    </p>
                    <p>
                      NGC prepared Lola for the next level of basketball as she transferred to Bluefield State in West Virginia and became a two-time NAIA All-American (First Team in 1993 and a Second Team in 1994). She was the West Virginia Intercollegiate Athletic Conference's Player of the Year both years and led the conference in scoring both seasons, averaging 25.5 points and 15.7 rebounds as a senior. She also was named to the WVIAC 25 at 25 All-Time Women's Basketball Team.
                    </p>
                    <p>
                      Lola, originally from Davie, began her basketball legacy in Rowan County and now resides in Mocksville NC, where she served as a Public Safety Officer for the Forsyth Medical Center(Now retired) and is now the owner of Pure Heart Athletics. She is married to T. Baker and has two children, Danielle and Zachery.
                    </p>
                  </div>
                  <div className="flex justify-center items-start">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="overflow-hidden rounded-xl shadow-lg max-w-sm w-full"
                    >
                      <img
                        src="/uni2.jpg"
                        alt="Lola Jones Baker - North Greenville University Athletic Hall of Fame"
                        className="w-full h-auto object-cover"
                      />
                    </motion.div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="overflow-hidden rounded-xl shadow-lg"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fd262aa17ef624b1d94677905217b9bcb%2F89eb0daf96614f2095cf5fee0ecf797c?format=webp&width=800"
                    alt="Lola Jones Baker with Dr. Jo-Ann Robinson and Spud Webb at Fincastle on the Mountain"
                    className="w-full h-auto object-cover"
                  />
                  <p className="p-4 text-center text-sm text-muted-foreground italic bg-muted">
                    Lola Jones Baker, a former student at Bluefield State College, and Dr. Jo-Ann Robinson, vice president of Student Affairs and Enrollment Management, speak with former NBA star 'Spud' Webb at Fincastle on the Mountain during 'An Evening with Bluefield State.'
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
