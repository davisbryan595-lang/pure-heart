"use client"

import { useState } from "react"
import { loadStripe } from "@stripe/stripe-js"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string)

export default function DonateModal() {
  const [amount, setAmount] = useState<number | "">("")
  const [loading, setLoading] = useState(false)

  

  const handleDonate = async () => {
    if (!amount || Number(amount) < 1) return alert("Please enter a valid amount.")
    setLoading(true)
    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: Number(amount) }),
      })
      const data = await res.json()
      const stripe = await stripePromise
      if (stripe && data.id) {
        await stripe.redirectToCheckout({ sessionId: data.id })
      }
    } catch (err) {
      console.error(err)
      alert("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="rounded-full bg-primary text-white hover:bg-primary/90 font-semibold shadow-md hover:shadow-lg transition-all text-xs sm:text-sm md:text-base px-4 sm:px-6 py-3 sm:py-4"
        >
          Donate
        </Button>
      </DialogTrigger>

      <DialogContent className="w-full max-w-sm sm:max-w-md bg-background/95 backdrop-blur-xl border border-primary/30 shadow-2xl rounded-xl sm:rounded-2xl p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl sm:text-3xl font-bold text-center text-primary mb-2">
            Support Our Athletes
          </DialogTitle>
        </DialogHeader>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center text-muted-foreground mb-6 text-sm sm:text-base"
        >
          Every dollar helps young athletes grow, train, and compete with passion. 💪
        </motion.p>

        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-foreground font-medium text-sm sm:text-base">$</span>
          <Input
            type="number"
            min="1"
            placeholder="Enter amount"
            value={amount === "" ? "" : amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-32 sm:w-40 text-center border-primary/40 focus:border-primary rounded-full text-sm sm:text-base"
          />
        </div>

        <Button
          size="lg"
          onClick={handleDonate}
          disabled={loading}
          className="w-full bg-primary text-white rounded-full py-4 sm:py-6 font-semibold text-sm sm:text-base md:text-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:scale-105"
        >
          {loading ? "Processing..." : `Donate $${amount || 0}`}
        </Button>
      </DialogContent>
    </Dialog>
  )
}
