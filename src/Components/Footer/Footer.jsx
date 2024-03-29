import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pinterest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import { NavLink } from 'react-router-dom'
export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo} alt=''/>
            <p>EcoLove</p>
        </div>
        {/* <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li >
            <NavLink to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</NavLink></li>
        </ul> */}
        <div className='footer-social-icon'>
            <div className='footer-icons-container'>
                <img src={instagram_icon} alt=""/>
            </div>
            <div className='footer-icons-container'>
                <img src={pinterest_icon} alt=""/>
            </div>
            <div className='footer-icons-container'>
                <img src={whatsapp_icon} alt=""/>
            </div>
        </div>
        <div className='footer-copyright'>
            <hr/>
            <p>Copyright @ 2023 -All Right Reserved</p>
        </div>
    </div>
  )
}
