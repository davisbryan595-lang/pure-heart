"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react"

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" ref={ref} className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your journey? Contact us today
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you're ready to sign up or just have questions, we're here to help. Reach out and let's discuss
                how we can help you achieve your goals.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="glossy-card border-0 hover:scale-105 transition-transform duration-300">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a
                      href="mailto:Justoneminuteplease22@gmail.com"
                      className="text-foreground hover:text-primary transition-colors font-medium"
                    >
                      Justoneminuteplease22@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="glossy-card border-0 hover:scale-105 transition-transform duration-300">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Phone</p>
                    <a
                      href="tel:3369807111"
                      className="text-foreground hover:text-primary transition-colors font-medium"
                    >
                      (336) 980-7111
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="glossy-card border-0 hover:scale-105 transition-transform duration-300">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Service Area</p>
                    <p className="text-foreground font-medium">Carolinas & Virginia Area</p>
                  </div>
                </CardContent>
              </Card>

              {/* LinkedIn */}
              <Card className="glossy-card border-0 hover:scale-105 transition-transform duration-300">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Linkedin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/lola-jones-baker-88925a382?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors font-medium"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Instagram */}
              <Card className="glossy-card border-0 hover:scale-105 transition-transform duration-300">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Instagram</p>
                    <a
                      href="https://www.instagram.com/3xhalloffamer?utm_source=qr&igsh=MWN0N3VrZ3E0dzQ4dA=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors font-medium"
                    >
                      Follow @3xhalloffamer
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-8"
                onClick={() => (window.location.href = "mailto:Justoneminuteplease22@gmail.com")}
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white rounded-full px-8 bg-transparent"
                onClick={() => (window.location.href = "tel:3369807111")}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Card className="glossy-card border-0 shadow-2xl">
              <CardContent className="p-8">
                <form
                  action="https://formsubmit.co/Justoneminuteplease22@gmail.com"
                  method="POST"
                  className="space-y-6"
                >
                  <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_subject" value="New Contact Form Submission" />

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input id="name" name="name" type="text" placeholder="Your name" required />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone
                    </label>
                    <Input id="phone" name="phone" type="tel" placeholder="(123) 456-7890" required />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your goals and how we can help..."
                      rows={5}
                      required
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-white rounded-full py-6 text-lg font-semibold shadow-lg shadow-primary/30 hover:scale-105 transition-all duration-300"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
