import express from "express";
import { addTocart,getCartProducts,removeAllFromCart,updateQuantity } from "../Controller/cart.controller.js";
import { protectRoute } from "../midelware/auth.midleware.js";

const cartRoute = express.Router();

cartRoute.get("/",protectRoute,getCartProducts);
cartRoute.post("/", protectRoute, addTocart);
cartRoute.delete("/",protectRoute,removeAllFromCart);
cartRoute.put("/:id",protectRoute,updateQuantity);


export default cartRoute;