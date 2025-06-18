import React from 'react'
import '../pages/Homepage.css'
import Hero from './Hero'
import Structure from './Structure'
import News from '../pages/News'
import PopularFood from '../pages/PopularFood'

const Homepage = () => {
  return (
    <div> 
    <Hero/>
    <Structure/>   
    <News/>
    <PopularFood/>
    </div>
  )
}

export default Homepage  


