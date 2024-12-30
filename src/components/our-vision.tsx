import "@/styles/our-vision.scss";
import ourvisionimageone from '/our-vision-image.png';
import ourmission from "/our-vision-image-2.png";

const OurVision = () => {
  return (
    <div className="our-vision-container">
      {/* Flex container */}
      <div className="grid | vision-content-container">
        {/* Left */}
        <div className="flex-col | left-container">
          <span className="our-vision-title">Our Vision</span>
          <p className="our-vision-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut   enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi  ut aliquip ex ea commodo consequat.</p>
          <img src={ourmission} alt="" className="our-vision-image" />
        </div>
        {/* Right */}
        <div className="flex-col | right-container">
          <img src={ourvisionimageone} alt="" className="our-vision-image" />
          <span className="our-vision-title">Our Mission</span>
          <p className="our-vision-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi  ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </div>
  )
}

export default OurVision