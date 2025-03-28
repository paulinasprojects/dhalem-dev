import { motion, AnimatePresence } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/constants";
import "@/styles/listings-card.scss";
import { useNavigate } from "react-router-dom";
import { listingsPageData } from "@/lib/data";
import { MdLocationOn} from "react-icons/md";
import { RiLayoutGridLine } from "react-icons/ri";
import { FaBed } from "react-icons/fa6";
import { MdBathtub } from "react-icons/md";
import { useMediaQuery } from "usehooks-ts";

const ListingsCard = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <AnimatePresence initial={isMobile ? false : true}>
    <motion.div 
      className="listings-card-container"
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.2}}
      variants={containerVariants}
    >
      <div className="listings-card-content-container">
        {listingsPageData.map((data) => (
          <motion.div onClick={() => navigate("/listings/1")} variants={itemVariants} key={data.id}>
            <div className="relative">
              <img src={data.image} alt="" className="listings-image" />
              <div className="absolute | listings-absolute-container">
                <span className="listings-card-price">${data.price},-</span>
              </div>
            </div>
            <div className="listings-item-title-container">
              <span className="listings-item-title">{data.title}</span>
            </div>
            <div className="listings-item-location">
              <MdLocationOn className="listings-location-icon" />
              <span className="listings-item-location-title">{data.location}</span>
            </div>
            <div className="items-bg-container">
              <div className="flex items-center gap-22 | items-container">
                <div className="flex items-center gap-8">
                  <RiLayoutGridLine className="listings-icon"/>
                  <span className="listings-span">
                    {data.sqft} Sq Ft
                  </span>
                </div>
                <div className="flex items-center gap-8">
                  <FaBed className="listings-icon"/>
                  <span className="listings-span">
                    {data.bedrooms} {" "}
                    Bedroom
                  </span>
                </div>
                <div className="flex items-center gap-8">
                  <MdBathtub className="listings-icon"/>
                  <span className="listings-span">
                    {data.bathrooms} {" "}
                    Bathroom
                  </span>
                </div>
              </div>
            </div>  
          </motion.div>
        ))}
      </div>
    </motion.div>
    </AnimatePresence>
  )
}

export default ListingsCard