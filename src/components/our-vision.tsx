import { motion } from 'framer-motion';
import "@/styles/our-vision.scss";
import ourvisionimageone from '/our-vision-image.png';
import ourmission from "/our-vision-image-2.png";

const OurVision = () => {
  return (
    <div className="our-vision-container">
      {/* Flex container */}
      <div className="grid | vision-content-container">
        {/* Left */}
        <motion.div
          className="flex-col | left-container"
          initial={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}  
        >
          <span className="our-vision-title">Our Vision</span>
          <p className="our-vision-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut   enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi  ut aliquip ex ea commodo consequat.</p>
          <img src={ourmission} alt="" className="our-vision-image" />
        </motion.div>
        {/* Right */}
        <motion.div 
          className="flex-col | right-container"
          initial={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} 
        >
          <img src={ourvisionimageone} alt="" className="our-vision-image" />
          <span className="our-vision-title">Our Mission</span>
          <p className="our-vision-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi  ut aliquip ex ea commodo consequat.</p>
        </motion.div>
      </div>
    </div>
  )
}

export default OurVision