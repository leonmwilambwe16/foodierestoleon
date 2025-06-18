import Stripe from "stripe";
import dotenv  from "dotenv";
import User from "../Module/auth.schema.js";
dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET)

export const createCheckoutSession = async(req,res)=>{
try {
  const userId = req.user._id;
  const user = await User.findById(userId).populate("cartItems.product");
  if(!user || user.cartItems.length === 0){
    return res.status(400).json({ message: "Your cart is empty" });
  }
  const lineItems = user.cartItems.map((item)=>{
    return{
      price_data:{
        currency:"usd",
        product_data:{
          name:item.product.name,
          image:[item.product.image],
          description:item.product.description,
        },
        unit_amount: Math.round(item.product.price * 100),
      },
      quantity: item.quantity,
    };
  });
  const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: lineItems,
      customer_email: user.email,
      success_url: `${process.env.CLIENT_URL}/payment-success`,
      cancel_url: `${process.env.CLIENT_URL}/payment-cancel`,
    });
    return res.status(200).json({ url: session.url });
} catch (error) {
  console.error("Stripe Checkout Error:", error);
    return res.status(500).json({ message: "Failed to create checkout session" });
}
}

export const paymentSuccess = async (req, res) => {
  try {
    const user = req.user;
    user.cartItems = [];
    await user.save();

    res.status(200).json({ message: "Payment successful. Cart has been cleared." });
  } catch (error) {
    console.error("Error in paymentSuccess:", error.message);
    res.status(500).json({ message: "Internal server error during payment success processing." });
  }
};