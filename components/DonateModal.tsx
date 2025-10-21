"use client"

import { useState } from "react"
import { loadStripe } from "@stripe/stripe-js"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string)

export default function DonateModal() {
  const [amount, setAmount] = useState<number | "">(25)
  const [loading, setLoading] = useState(false)

  const presetAmounts = [25, 50, 100]

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
          className="rounded-full bg-primary text-white hover:bg-primary/90 font-semibold shadow-md hover:shadow-lg transition-all"
        >
          Donate
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-md bg-background/95 backdrop-blur-xl border border-primary/30 shadow-2xl rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center text-primary mb-2">
            Support Our Athletes
          </DialogTitle>
        </DialogHeader>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center text-muted-foreground mb-6"
        >
          Every dollar helps young athletes grow, train, and compete with passion. 💪
        </motion.p>

        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {presetAmounts.map((amt) => (
            <Button
              key={amt}
              variant={amount === amt ? "default" : "outline"}
              onClick={() => setAmount(amt)}
              className={`px-6 py-2 rounded-full ${
                amount === amt ? "bg-primary text-white" : "border-primary text-primary hover:bg-primary/10"
              }`}
            >
              ${amt}
            </Button>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-foreground font-medium">$</span>
          <Input
            type="number"
            min="1"
            placeholder="Custom amount"
            value={amount === "" ? "" : amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-40 text-center border-primary/40 focus:border-primary rounded-full"
          />
        </div>

        <Button
          size="lg"
          onClick={handleDonate}
          disabled={loading}
          className="w-full bg-primary text-white rounded-full py-6 font-semibold text-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:scale-105"
        >
          {loading ? "Processing..." : `Donate $${amount || 0}`}
        </Button>
      </DialogContent>
    </Dialog>
  )
}
