import React from 'react'
import '../pages/News.css'
import { FaCircleCheck } from "react-icons/fa6";

function News (){
  return (
    <div className='news-container'>
      <div className="block-content">
        <h3>Order Your Favorite Food in <br />Just a Few Clicks</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="checktext">
          <span><FaCircleCheck /> <p>eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> </span>
          <span><FaCircleCheck /> <p>eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> </span>
          <span><FaCircleCheck /> <p>eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> </span>
          <span><FaCircleCheck /> <p>eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> </span>
        </div>
      </div>
       <div className="block-content1">
        <div className="picblock">
      
        </div>
           <div className="picblock1">
         
        </div>
      </div>
    </div>
  )
}

export default News