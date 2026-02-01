import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const MENU = {
  burger_classic: { name: "Classic Burger", amount: 990 }, // cents
  fries: { name: "Fries", amount: 350 },
  coca: { name: "Coca-Cola", amount: 250 },
};

function cartToLineItems(cart) {
  return cart.map(({ id, qty }) => {
    const p = MENU[id];
    if (!p) throw new Error(`Unknown item: ${id}`);
    const quantity = Math.max(1, Math.min(50, Number(qty) || 1));

    return {
      quantity,
      price_data: {
        currency: "eur",
        unit_amount: p.amount,
        product_data: { name: p.name },
      },
    };
  });
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

  try {
    const { cart } = req.body;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: cartToLineItems(cart),
      success_url: `${req.headers.origin}/success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/cancel.html`,
    });

    res.status(200).json({ url: session.url });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
}