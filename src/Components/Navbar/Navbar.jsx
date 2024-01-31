import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCartShopping } from '@fortawesome/free-solid-svg-icons';


import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
    
    const [menu,setMenu]=useState("shop")
    const {getTotalCartItems}=useContext(ShopContext)
    
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <a href='/shop' ><img src={logo} alt="" width="150px" height="150px"/></a>
            
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}}to='/'>SHOP</Link>{menu==="shop"?<hr />:<></>}</li>
            <li onClick={()=>{setMenu("boots")}}><Link style={{textDecoration:'none'}} to='/boots'>BOOTS</Link>{menu==="boots"?<hr />:<></>}</li>
            <li onClick={()=>{setMenu("apparels")}}><Link style={{textDecoration:'none'}} to='/apparels'>APPARELS</Link>{menu==="apparels"?<hr />:<></>}</li>
            <li onClick={()=>{setMenu("contact")}}><Link style={{textDecoration:'none'}} to='/contact'>CONTACT US</Link>{menu==="contact"?<hr />:<></>}</li>
            <li>  <div className="search-bar">
        
       
      </div></li>
        </ul>

        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><FontAwesomeIcon icon={faCartShopping} size="lg" color="black" /></Link>
            
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>

    </div>
  )
}

export default Navbar