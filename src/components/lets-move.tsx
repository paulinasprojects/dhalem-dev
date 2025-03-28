import { motion } from "framer-motion";
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
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} 
        >
          <img src={moveimage} alt="" className="move-image" />
        </motion.div>
        <motion.div 
          className="flex-col"
          initial={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} 
        >
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
        </motion.div>
      </div>
    </div>
  )
}

export default LetsMove