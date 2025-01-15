import { LuMenu } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import "@/styles/mobile-nav.scss";

interface Props {
  isOpen: boolean;
}

const MobileNav = ({isOpen}: Props) => {
  return (
    <div>
      <div className="moble-nav-close">
          {isOpen ? <IoMdClose className="close-icon" /> :
            <LuMenu className="menu-icon" />
          }
        </div>
      {isOpen && (
        <div className="mobile-nav-overlay">
          <div className="mobile-nav-link-container">
            <div className="mobile-nav-links-container">
            <Link className="mobile-link" to="/">Home</Link>
            <Link className="mobile-link" to="/listings">Listings</Link>
            <Link className="mobile-link" to="/services">Services</Link>
            <Link className="mobile-link" to="/about-us">About</Link>
            <Link className="mobile-link" to="/our-team">Our Team</Link>
            <Link className="mobile-link" to="/contact-us">Contact Us</Link>
            </div>
          </div>
          
        </div>
      )}
    </div>
  )
}

export default MobileNav