import { useState } from "react"
import { Link } from 'react-router-dom';
import logo from '/logo.svg';
import "@/styles/header.scss";
import MobileNav from './mobile-nav';
import { useNavigate } from "react-router-dom";

const Header = () => {
   const navigate = useNavigate();
   const [open, setOpen] = useState<boolean>(false);

   const handleOpen = () => {
     setOpen(!open);
   }; 

  return (
    <div className='header-main-container'>
      <div className='header-container'>
         <div>
            <Link to="/">
            <img src={logo} alt="" width={106} height={40} />
            </Link>
         </div>
         <div className='link-main-container'>
            <Link className="main-link" to="/">Home</Link>
            <Link className="main-link" to="/listings">Listings</Link>
            <Link className="main-link" to="/services">Services</Link>
            <Link className="main-link" to="/about-us">About</Link>
            <Link className="main-link" to="/our-team">Our Team</Link>
            <Link className="main-link" to="/contact-us">Contact Us</Link>
            <button className='quota-button' onClick={() => navigate("/contact-us")}>Get a Quota</button>
         </div>
         <div className='mobile-nav' onClick={handleOpen}>
            <MobileNav isOpen={open}/>
            <button className='quota-button' onClick={() => navigate("/contact-us")}>Get a Quota</button>
         </div>
      </div>
    </div>
  )
}

export default Header