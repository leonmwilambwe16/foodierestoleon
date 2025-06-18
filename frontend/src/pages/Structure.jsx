import React from 'react'
import '../pages/Structure.css'
import { TbTruckDelivery } from "react-icons/tb";
import { PiCookingPotFill } from "react-icons/pi";
import { GiFruitBowl } from "react-icons/gi";
import { PiChefHatBold } from "react-icons/pi";

function Structure (){
  return (
    <div className='structure-container'>
     <div className="structure-cart">
      <div className="cart-element">
        <TbTruckDelivery className='logo-element' />
        <p>Fast Delivery</p>
         <span></span>
        
      </div>

       <div className="cart-element">
        <GiFruitBowl className='logo-element' />
        <p>Frech Food</p>
          <span></span>
       
      </div>

       <div className="cart-element">
        <PiCookingPotFill className='logo-element' />
        <p>Hot Food</p>
        <span></span>
      
      </div>

       <div className="cart-element">
       <PiChefHatBold className='logo-element' />
        <p>Best Chef</p>
          <span></span>
       
      </div>

     </div>
    </div>
  )
}

export default Structure