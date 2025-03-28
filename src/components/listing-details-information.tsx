import { motion } from "framer-motion";
import { MdLocationOn} from "react-icons/md";
import { RiLayoutGridLine } from "react-icons/ri";
import { FaBed } from "react-icons/fa6";
import { MdBathtub } from "react-icons/md";
import "@/styles/listing-details-information.scss";

const ListingDetailsInformation = () => {
  return (
    <div className="listing-details-information-container">
      {/* Left */}
      <motion.div 
        className="listing-details-left-container"
        initial={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}  
      >
        <p className="listing-details-left-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <span className="flex items-center gap-12 | listing-details-info-location">
          <MdLocationOn className="listing-details-info-icon"/>
          Mars Street, Indonesia
        </span>
        <div className="listing-details-bg-container">
          <div className="listing-details-items-container">
            <div className="flex items-center gap-8">
              <RiLayoutGridLine className="listing-details-icon"/>
              <span className="listing-details-info">
                1,800 Sq Ft
              </span>
            </div>
            <div className="flex items-center gap-8">
              <FaBed className="listing-details-icon"/>
              <span className="listing-details-info">
                2 Bedrooms
              </span>
            </div>
            <div className="flex items-center gap-8">
              <MdBathtub className="listing-details-icon"/>
              <span className="listing-details-info">
                3 Bathrooms
              </span>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Right */}
      <motion.div 
        className="listing-details-right-container"
        initial={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }} 
      >
        <p className="listing-details-right-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
        <div className="listing-details-right-price-container">
          <span className="listing-details-right-price">$4,800, -</span>
          <button className="listing-details-right-button">Request Visit Now!</button>
        </div>
      </motion.div>
    </div>
  )
}

export default ListingDetailsInformation