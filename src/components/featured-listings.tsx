import { motion } from "framer-motion";
import { featuredListingsData } from "@/lib/data";
import { MdLocationOn } from "react-icons/md";
import "@/styles/featured-listings.scss";
import { useNavigate } from "react-router-dom";
import { containerVariants, itemVariants } from "@/lib/constants";

const FeaturedListings = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      className="featured-listings-container"
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.2}}
      variants={containerVariants}
      >
      <div className="featured-title-container">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} 
          className="featured-listing-title">Featured Listings</motion.span>
        <motion.span 
          initial={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} 
          className="featured-listing-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.
        </motion.span>
      </div>
      <div className="featured-listings-items-container">
        {featuredListingsData.map((item) => (
          <motion.div onClick={() => navigate("/listings/1")} variants={itemVariants} key={item.id}>
            <div className="relative | relative-container">
              <img src={item.image} alt="" className="featured-listing-image" />
              <div className="absolute | absolute-container">
                <span className="featured-listing-price">${item.price},-</span>
              </div>
              <div className="featured-item-title-container">
                <span className="featured-item-title">{item.title}</span>
              </div>
              <div className="featured-item-location">
                <MdLocationOn className="location-icon" />
                <span className="featured-item-location-title">{item.location}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="see-more-container">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} 
          className="see-more-title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </motion.span>
        <motion.button 
          initial={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} 
          className="seem-more-button"
        >
          See more
        </motion.button>
      </div>
    </motion.div>
  )
}

export default FeaturedListings