import React from 'react'
import { ImSpoonKnife } from "react-icons/im";
import '../pages/Contact.css'
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

function Contact (){
  return (
    <div className='contact-container'>
      <div className='menu-contact-items'>
      <div className="box-footer">
        <div className="foo-logo">
            <ImSpoonKnife className='logo-food-cont' />
          <h4><span>Foo</span>die</h4>
        </div>
       <div className="text-contact">
        <p>is a long established <br /> fact that a reader will be <br />distracted by </p>
       </div>
       <div className="carphoto">
       
       </div>
       
      </div>

     <div className="box-footer">
        <h4>Menu</h4>
        <div className="menulist-cont">
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>About us</li>
          </ul>
        </div>
      </div>
      
      
     <div className="box-footer">
        <h4>Contact Us</h4>
        <div className="menulist-cont">
          <p><BsFillTelephoneFill /> <span>+123*888</span> </p>
          <p> <MdEmail /> <span>Foodie@gmail.com</span> </p>
        </div>
      </div>

     </div>
     <div className="social-medial">
      <a href=""><FaFacebook className='social-logo' /></a>
      <a href=""><AiFillInstagram className='social-logo' /></a>
      <a href=""><FaXTwitter className='social-logo' /></a>
      <a href=""><FaTiktok className='social-logo' /></a>
     </div>

    </div>
  )
}

export default Contact