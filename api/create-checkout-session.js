import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

function safeOrigin(req) {
  // Prefer origin header; fallback to referer; fallback localhost
  try {
    if (req.headers.origin) return req.headers.origin;
    if (req.headers.referer) return new URL(req.headers.referer).origin;
  } catch (_) {}
  return "http://localhost:3000";
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { cart } = req.body;

    if (!cart || !Array.isArray(cart)) {
      throw new Error("Cart is required and must be an array");
    }
    if (cart.length === 0) {
      throw new Error("Cart is empty");
    }

    const hasDelivery = cart.some((item) => item?.delivery === true);

    const line_items = cart.map((item) => {
      if (!item.name && !item.displayName) throw new Error("Item missing name");
      if (item.price === undefined || item.price === null)
        throw new Error(`Item ${item.name || item.displayName} missing price`);
      if (!item.quantity || item.quantity < 1)
        throw new Error(`Item ${item.name || item.displayName} missing quantity`);

      const name = item.displayName || item.name;
      const priceInCents = Math.round(Number(item.price) * 100);
      const quantity = Math.max(1, Math.min(50, Number(item.quantity)));

      return {
        quantity,
        price_data: {
          currency: "eur",
          unit_amount: priceInCents,
          product_data: {
            name,
            ...(item.size ? { description: `Taille: ${item.size}` } : {}),
          },
        },
      };
    });

    const origin = safeOrigin(req);
    const successPage = hasDelivery ? "successs-delivery.html" : "success.html";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      success_url: `${origin}/${successPage}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cancel.html`,
      metadata: { has_delivery: hasDelivery ? "1" : "0" },
    });

    return res.status(200).json({ url: session.url });
  } catch (e) {
    console.error("Checkout error:", e);
    return res.status(400).json({ error: e.message });
  }
}
