import React from 'react'
import './Footer.css'
import footer_logo from '../assest/logo_big.png'
import  instgram_icon from '../assest/instagram_icon.png'
import pinterest_icon from '../assest/pintester_icon.png'
import  whatsapp_icon from '../assest/whatsapp_icon.png'

export const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>Glooms</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={instgram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={pinterest_icon} alt="" />
        </div> <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr/>
   <p>Copyright @2024 - All Right Reserved</p>
      </div>
    </div>
  )
}
