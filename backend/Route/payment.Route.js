import express from "express";
import { protectRoute } from "../midelware/auth.midleware.js";
import {createCheckoutSession,paymentSuccess} from "../Controller/payment.controller.js";

const paymentRoute = express.Router();

paymentRoute.post("/create-checkout-session",protectRoute,createCheckoutSession);
paymentRoute.post("/success",protectRoute,paymentSuccess);

export default paymentRoute;