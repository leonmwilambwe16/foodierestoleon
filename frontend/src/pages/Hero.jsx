import React from 'react'
import '../pages/Hero.css'
import { LuPizza } from "react-icons/lu";
import { SiPivotaltracker } from "react-icons/si";
import { MdTrackChanges } from "react-icons/md";
function Hero  (){
  return (
    <div className='hero-section'>
     <div className="hero-container">
      <div className="text-container">
       <h2>Locally Produced Delivered <br />Direct <span>To Your Door</span></h2>
      <p>simply dummy text of the printing and typesetting industry. <br />Lorem Ipsum has been the industry's standard dummy <br />text ever since the 1500s, </p>
      </div>
      <div className="btn">
        <button><LuPizza />Shop Now</button>
        <button><MdTrackChanges />Track Order</button>
      </div>
     </div>
    </div>
  )
}

export default Hero   