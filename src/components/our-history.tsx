import "@/styles/our-history.scss";
import { MdCheck } from "react-icons/md";

const OurHistory = () => {
  return (
    <div className='our-history-main-container'>
      <div className="our-history-content-container">
        <div className="our-history-title-container">
          <span className="our-history-title">
            Our History
          </span>
          <span className="our-history-description">Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.</span>
        <div className="our-history-items-container">
          <div className="our-history-bg-check">
            <MdCheck className="our-history-icon"/>
          </div>
          <div className="our-history-single-item-container">
            <span className="our-history-item-title">2010</span>
            <span className="our-history-item-description">Create The Developer Team</span>
          </div>
        </div>
        <div className="our-history-items-container">
          <div className="our-history-bg-check">
            <MdCheck className="our-history-icon"/>
          </div>
          <div className="our-history-single-item-container">
            <span className="our-history-item-title">2015</span>
            <span className="our-history-item-description">Have 2 Big Offices</span>
          </div>
        </div>
        <div className="our-history-items-container">
          <div className="our-history-bg-check">
            <MdCheck className="our-history-icon"/>
          </div>
          <div className="our-history-single-item-container">
            <span className="our-history-item-title">2019</span>
            <span className="our-history-item-description">Have a 400+ Member Team Arround The <br /> World</span>
          </div>
        </div>
        <p className="our-history-single-item-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br /> quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        </div>
        <div className="our-history-image-container">
          <img src="https://res.cloudinary.com/dymlzmyuo/image/upload/v1736269075/Image_1_haftv5.png" alt="" className="our-history-image" />
        </div>
      </div>
    </div>
  )
}

export default OurHistory