import React from 'react'
import { Link } from 'react-router-dom'
import '../pages/PopularFood.css'
import Data from './data/data'


function PopularFood (){

  const popularFoods = Data.filter((item)=> item.category === 'popular')

  return (
    <div className='food-popular-container'>
      <h2>Popular <span>Foods</span></h2> 
     
      <div className="food-containers">
       {popularFoods.map((food)=>(
        <div className="food-item" key={food.id} >
          <div className="imgbox-food">
             <img src={food.img} alt={food.title} />
          </div>
          <h4>{food.title}</h4>
          <p>${food.price}</p>
        </div>
       ))}
      </div>
       <Link to="/food" className="see-all-link">See All →</Link>
    </div>
  )
}

export default PopularFood