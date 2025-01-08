import "@/styles/get-in-touch.scss";
import { IoMdMail, IoMdPin } from "react-icons/io";
import { MdPhone } from "react-icons/md";

const GetInTouch = () => {
  return (
    <>
      <div className="get-in-touch-title-container">
        <span className="get-in-touch-title">Get in Touch</span>
        <span className="get-in-touch-description">Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor incididunt ut.</span>
      </div>
      <div className="get-in-touch-content-container">
      <div className="get-in-touch-location-container">
        <IoMdPin className="get-in-touch-icon"/>
        <span className="get-in-touch-content">
         123 Anywhere Street, Any City, <br /> 12345 ST, Indonesia
        </span>
      </div>
      <div className="get-in-touch-phone-container">
        <MdPhone className="get-in-touch-icon" />
        <span className="get-in-touch-content">
        +123 456 7890
        </span>
      </div>
      <div className="get-in-touch-mail-container">
        <IoMdMail className="get-in-touch-icon"/>
        <span className="get-in-touch-content">
        hello@dhalem.com
        </span>
      </div>
      </div>
      <img src="https://res.cloudinary.com/dymlzmyuo/image/upload/v1736337449/contact-us_kf9uoj.jpg" alt="" className="get-in-touch-map-image" />
    </>
  )
}

export default GetInTouch