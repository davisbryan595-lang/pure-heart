import { NextResponse } from "next/server"
import { NextResponse } from "next/server"
import Stripe from "stripe"

export async function POST(req: Request) {
  try {
    const { amount } = await req.json()

    if (!amount || amount < 1) {
      return NextResponse.json({ error: "Invalid donation amount" }, { status: 400 })
    }

    const secretKey = process.env.STRIPE_SECRET_KEY
    if (!secretKey) {
      return NextResponse.json({ error: "Payment processor is not configured" }, { status: 500 })
    }

    const stripe = new Stripe(secretKey, {
      apiVersion: "2024-06-20",
    })

    const origin =
      process.env.NEXT_PUBLIC_SITE_URL ||
      req.headers.get("origin") ||
      "http://localhost:3000"

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Donation to Pure Heart Athletics",
              description: "Thank you for supporting our mission!",
            },
            unit_amount: Math.round(Number(amount) * 100),
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${origin}/?success=true`,
      cancel_url: `${origin}/?canceled=true`,
    })

    return NextResponse.json({ id: session.id, url: session.url })
  } catch (err: any) {
    console.error("Stripe error:", err)
    return NextResponse.json({ error: err.message || "Internal Server Error" }, { status: 500 })
  }
}
