import React, { useState,useEffect, useRef } from 'react'
import '../Components/Navbar.css'
import { ImSpoonKnife } from "react-icons/im";
import { HiHome } from "react-icons/hi";
import { LuSquareMenu } from "react-icons/lu";
import { FaEnvelopeOpen } from "react-icons/fa";
import { IoBagHandleSharp } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';


function Navbar (){

  const [showMenu,setShowMenu]=useState(false) ;
  const [showAuthDropdown, setShowAuthDropdown] = useState(false);
   const dropdownRef = useRef(null);
   const cartContext = useCart() || {};
  const authContext = useAuth() || {};

  const cart = cartContext.cart || [];
  const user = authContext.user || null;
  const logout = authContext.logout || (() => {});
  const navigate = useNavigate();

  const humbergerHandler = () => {
    setShowMenu(!showMenu);
  };
  const handleAuthClick =()=>{
    if(user){
      logout();
      navigate('/login');
    }else{
      navigate('/login');
    }
  };
    useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowAuthDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, []);

  return (
    <div className='navigation-bar'>
      <div className="logocontainer">
        <ImSpoonKnife className='food-logo' />
        <h4><span>Foo</span>die</h4>
        {showMenu ? <FaTimes className='humberger-menu' onClick={humbergerHandler} /> : <FaBars className='humberger-menu' onClick={humbergerHandler} />}
        
       
      </div>
      <div className={`list-content ${showMenu ?'show':"" }`}>
        <ul className="list-menu">
          <Link to='home'><li><HiHome className='menu-logo' /><span>Home</span></li></Link>
         <Link to='food'><li><LuSquareMenu className='menu-logo' /><span>Menu</span></li></Link> 
         <Link to='contact'><li><LuSquareMenu className='menu-logo' /><span>Contacts</span></li></Link> 
              {user?.role === 'admin' && (
            <Link to="dashboard" onClick={() => setShowMenu(false)}>
              <li><LuSquareMenu className="menu-logo" /><span>Dashboard</span></li>
            </Link>
          )}
      </ul>
      </div>
      
      <div className="cart-login">
     {user && user.role === 'customer' && (
          <Link to="cart" className="cart-icon-wrapper">
            <IoBagHandleSharp className="cart-icon" />
        <span className="cart-count">{cart.length}</span>
          </Link>  )}
        
         {!user && (
          <div className="auth-dropdown" ref={dropdownRef}>
            <button onClick={() => setShowAuthDropdown(prev => !prev)}>
              Signup <FaUserAlt />
            </button>
            {showAuthDropdown && (
              <div className="dropdown-menu">
                <Link to="signup" onClick={() => setShowAuthDropdown(false)}>Signup</Link>
                <Link to="login" onClick={() => setShowAuthDropdown(false)}>Login</Link>
              </div>
            )}
          </div>
        )}
       {user && (
        <button onClick={handleAuthClick}>
           Logout <FaUserAlt />
         </button>
          )}
       
      </div>
    </div>
  )
}

export default Navbar;





