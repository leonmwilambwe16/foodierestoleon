import Product from "../Module/product.Schema.js";
import User from "../Module/auth.schema.js";

export const getCartProducts = async (req,res)=>{
  try {
    const user = await User.findById(req.user._id).populate("cartItems.product");
    if (!user) return res.status(404).json({ message: "User not found" });

    const cart = user.cartItems
      .filter(item => item.product !== null) 
      .map(item => ({
        _id: item.product._id,
        name: item.product.name,
        price: item.product.price,
        image: item.product.image,
        category: item.product.category,
        quantity: item.quantity,
      }));

    res.status(200).json(cart);
  } catch (error) {
    console.error("Error fetching cart products:", error);
    res.status(500).json({ message: "Failed to fetch cart" });
  }
}


export const addTocart = async (req, res) => {
try {
    const { productId } = req.body;
    const user = req.user;

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

  
    const existingItem = user.cartItems.find((item) => item.product.toString() === productId);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      user.cartItems.push({ product: productId, quantity: 1 });
    }

    await user.save();
    res.status(200).json({ message: "Item added to cart" });
  } catch (error) {
    console.error("Error in addToCart:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const removeAllFromCart = async (req,res)=>{
try {
const {productId} = req.body;
const user = req.user;
if(!productId){
  user.cartItems = [];
}else{
  user.cartItems = user.cartItems.filter(item => item.id !== productId)
}
await user.save();
res.json(user.cartItems);
} catch (error) {
  console.log("Error in removeAllFromCart:",error.message);
  res.status(500).json({message:"Internal server error while removing all items from cart"})
}
}

export const updateQuantity = async (req,res)=>{
try {
   const {id:productId}= req.params;
   const {quantity}=req.body;
   const user = req.user;
   const existingItem = user.cartItems.find(item => item.id ===productId);
   if(existingItem){
    if(quantity === 0){
      user.cartItems = user.cartItems.filter(item => item.id !== productId);
      await user.save();
      return res.json(user.cartItems);
    }
    existingItem.quantity = quantity;
    await user.save();
    return res.json(user.cartItems);
   }else{
    return res.status(404).json({message:"Product not found in cart"});
   }
} catch (error) {
  console.log("Error in updateQuantity:",error.message);
  res.status(500).json({message:"Internal server error while updating cart item quantity"})
}
}

