import { useState } from "react"
import { Link } from 'react-router-dom';
import logo from '/logo.svg';
import "@/styles/header.scss";
import MobileNav from './mobile-nav';

const Header = () => {
   const [open, setOpen] = useState<boolean>(false);

   const handleOpen = () => {
     setOpen(!open);
   }; 

  return (
    <div className='header-main-container'>
      <div className='header-container'>
         <div>
            <img src={logo} alt="" width={106} height={40} />
         </div>
         <div className='link-main-container'>
            <Link to="/">Home</Link>
            <Link to="/listings">Listings</Link>
            <Link to="/services">Services</Link>
            <Link to="/about-us">About</Link>
            <Link to="/contact-us">Contact Us</Link>
            <button className='quota-button'>Get a Quota</button>
         </div>
         <div className='mobile-nav' onClick={handleOpen}>
            <MobileNav isOpen={open}/>
            <button className='quota-button'>Get a Quota</button>
         </div>
      </div>
    </div>
  )
}

export default Header