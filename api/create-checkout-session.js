import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

function getOrigin(req) {
  // Prefer explicit origin header
  const origin =
    req.headers.origin ||
    (req.headers.referer ? new URL(req.headers.referer).origin : null) ||
    "http://localhost:3000";

  return origin;
}

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

    // Detect delivery (preferred: boolean flag; fallback: keyword in name)
    const hasDelivery = cart.some((item) => {
      if (item && item.delivery === true) return true;
      const n = `${item?.displayName || item?.name || ""}`.toLowerCase();
      return n.includes("delivery") || n.includes("livraison");
    });

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
            name,
            ...(item.size ? { description: `Taille: ${item.size}` } : {}),
          },
        },
      };
    });

    const origin = getOrigin(req);
    const successPage = hasDelivery ? "successs-delivery.html" : "success.html";

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      // Put session_id in URL so success page can fetch payment info via your API
      success_url: `${origin}/${successPage}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cancel.html`,
      // Optional but helpful for debugging & downstream logic
      metadata: {
