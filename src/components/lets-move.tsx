import "@/styles/lets-move.scss";
import moveimage from '/move-image.png';
import galleryimageone from '/move-gallery-image.png';
import galleryimagetwo from '/move-gallery-image-two.png'
import galleryimagethree from '/move-gallery-image-three.png'
import { useNavigate } from "react-router-dom";

const LetsMove = () => {
  const navigate = useNavigate();

  return (
    <div className="lets-move-container">
      <div className="flex | lets-move-content-container">
        <div>
          <img src={moveimage} alt="" className="move-image" />
        </div>
        <div className="flex-col">
          <span className="lets-move-title">Let's Move to Your Dream Family Home</span>
          <span className="lets-move-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua.</span>
        {/* Button Container */}
        <div className="lets-move-button-container">
          <button className="lets-move-button" onClick={() => navigate("/contact-us")}>Get Quote Now</button>
        </div>
        {/* Gallery Container */}
        <div className="lets-move-gallery-container">
          <img src={galleryimageone} alt=""  className="lets-move-gallery-image"/>
          <img src={galleryimagetwo}alt=""  className="lets-move-gallery-image"/>
          <img src={galleryimagethree}alt=""  className="lets-move-gallery-image"/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default LetsMove