import { motion } from "framer-motion";
import "@/styles/listing-details.scss";
import { propertyImages } from "@/lib/data";
import ImageSlider from "@/components/image-slider";
import ListingDetailsInformation from "@/components/listing-details-information";
import PropertyDetails from "@/components/property-details";
import OtherProperty from "@/components/other-property";

const ListingDetailsPage = () => {
  return (
    <div className="listing-details-container">
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="listing-details-title">Qiri Minimalist House</h2>
          <span className="listing-details-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <ImageSlider images={propertyImages}/>
      </motion.div>
      <div className="listing-details-information">
        <ListingDetailsInformation/>
      </div>
      <div className="property-details">
        {/* left */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        transition={{ duration: 1.5, ease: "easeIn" }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}  
      >
        <PropertyDetails/>
      </motion.div>
      {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          transition={{ duration: 1.5, ease: "easeIn" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} 
        >
          <OtherProperty/>
        </motion.div>
      </div>
    </div>
  )
}

export default ListingDetailsPage