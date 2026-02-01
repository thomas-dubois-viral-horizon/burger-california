import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

  try {
    const { cart } = req.body;

    // Validate cart exists and is an array
    if (!cart || !Array.isArray(cart)) {
      throw new Error("Cart is required and must be an array");
    }

    if (cart.length === 0) {
      throw new Error("Cart is empty");
    }

    // Build line items from cart - accept dynamic products
    const line_items = cart.map((item) => {
      // Validate required fields
      if (!item.name && !item.displayName) {
        throw new Error("Item missing name");
      }
      if (item.price === undefined || item.price === null) {
        throw new Error(`Item ${item.name || item.displayName} missing price`);
      }
      if (!item.quantity || item.quantity < 1) {
        throw new Error(`Item ${item.name || item.displayName} missing quantity`);
      }

      const name = item.displayName || item.name;
      const priceInCents = Math.round(Number(item.price) * 100);
      const quantity = Math.max(1, Math.min(50, Number(item.quantity)));

      return {
        quantity,
        price_data: {
          currency: "eur",
          unit_amount: priceInCents,
          product_data: {
            name: name,
            // Add description if item has size (for pizzas)
            ...(item.size ? { description: `Taille: ${item.size}` } : {})
          },
        },
      };
    });

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: line_items,
      success_url: `${req.headers.origin || req.headers.referer || "http://localhost:3000"}/success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin || req.headers.referer || "http://localhost:3000"}/cancel.html`,
    });

    res.status(200).json({ url: session.url });
  } catch (e) {
    console.error("Checkout error:", e);
    res.status(400).json({ error: e.message });
  }
}
