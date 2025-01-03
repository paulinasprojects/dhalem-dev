import { Link } from 'react-router-dom';
import logo from '/logo.svg';
import "@/styles/footer.scss";

import { IoMdPin } from "react-icons/io";
import { MdPhone } from "react-icons/md";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className='flex justify-between | footer-flex-container'>
        {/* Left */}
        <div className='flex-col'>
          <img src={logo} alt="" className='footer-logo' />
          <p className='footer-text'>
          Lorem ipsum dolor sit amet, consec <br /> tetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore.
          </p>
        </div>
        {/* Center */}
        <div className='flex gap-80'>
          <div className='footer-useful-links-container'>
            <span className='footer-useful-link-title'>Useful Links</span>
            <div className='footer-useful-links'>
              <Link className='footer-useful-link' to="/listings">Listings</Link>
              <Link className='footer-useful-link' to="/about-us">About Us</Link>
              <Link className='footer-useful-link' to="/contact-us">Contact Us</Link>
              <Link className='footer-useful-link' to="/our-team">Our Team</Link>
            </div>
          </div>
          <div className='footer-get-in-touch-container'>
            <span className='footer-useful-link-title'>Get in Touch</span>
            <div className='footer-get-in-touch-links'>
              <span className='flex gap-8 | footer-get-in-touch-link'>
                <IoMdPin className='footer-icon'/>
                123 Anywhere Street, Any City, <br /> 12345 ST, Indonesia
              </span>
              <span className='flex gap-8 | footer-get-in-touch-link'>
                <MdPhone className='footer-icon'/>
                +123 456 7890
              </span>
              <span className='flex gap-8 | footer-get-in-touch-link'>
                <IoMdMail className='footer-icon'/>
                hello@dhalem.com
              </span>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className='flex-col'>
          <span className='footer-useful-link-title'>Newsletter</span>
          <input type="email" placeholder='Your Email' className='footer-input'  />
          <button className='footer-submit-button'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Footer