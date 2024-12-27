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
          <Link to="/">test</Link>
          <Link to="/">test</Link>
          <Link to="/">test</Link>
          <Link to="/">test</Link>
          <Link to="/">test</Link>
          </div>
          
        </div>
      )}
    </div>
  )
}

export default MobileNav