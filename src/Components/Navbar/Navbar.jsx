import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import { CgClose, CgMenu } from "react-icons/cg";
import { useAuth0 } from "@auth0/auth0-react";
export const Navbar = () => {
  
   const [menu,setMenu] = useState("home");
   const {getTotalCartItems}= useContext(ShopContext);
   const { loginWithRedirect,logout,isAuthenticated } = useAuth0();
  return (
    <div className='Navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>EcoLove</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("home")}}><Link style={{ textDecoration:'none' }} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link style={{ textDecoration:'none' }} to='/clothing'>Clothing</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("fashion&Accesories")}}><Link style={{ textDecoration:'none' }} to='/fashion&Accesories'>Fashion & Accesories</Link>{menu==="fashion&Accesories"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{ textDecoration:'none' }}  to='/homeproducts'>Home products</Link>{menu==="kids"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("contact")}}><Link style={{ textDecoration:'none' }}  to='/contact'>Contact</Link>{menu==="contact"?<hr/>:<></>}</li>   

        {isAuthenticated ?(<li><button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button></li>)
        : (<li className='nav-login-cart'><button onClick={() => loginWithRedirect()}>Log In</button></li>)
        }
        
        
        
      </ul>
      <div className='nav-login-cart'>
        {/* <Link to='/login'><button>Login</button></Link> */}
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
         <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
      <div className='mobile-navbar-btn'>
      <CgMenu name="menu-outline" className='mobile-nav-icon' />
      <CgClose name="close-outline" className='mobile-nav-icon close-outline' />
      
    
      </div> 
    </div>
  )
}

export default Navbar