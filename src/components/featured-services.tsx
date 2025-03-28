import { motion } from "framer-motion";
import "@/styles/featured-services.scss";
import FeaturedServicesCards from "./featured-services-cards";

const FeaturedServices = () => {
  return (
    <div className="featured-services-container">
      <div className="featured-services-title-container">
        <motion.span 
          className="featured-services-title"
          initial={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}  
        >
          Featured Services
        </motion.span>
        <motion.span 
          className="feautured-services-description"
          initial={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} 
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.
        </motion.span>
      </div>
      <div>
        <FeaturedServicesCards/>
      </div>
    </div>
  )
}

export default FeaturedServices