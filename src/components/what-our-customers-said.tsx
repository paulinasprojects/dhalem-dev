import { motion } from "framer-motion";
import "@/styles/what-our-customers-said.scss";
import WhatOurCustomersSaidCarousel from "./what-our-customers-said-carousel";

const WhatOurCustomersSaid = () => {
  return (
    <div className="what-our-customers-said-container">
      <div className="flex items-center justify-between | what-our-customers-said-title-container">
        <motion.span 
          className="what-our-customers-said-title"
          initial={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} 
          >
            What Our Happy <br /> Customers Said 
          </motion.span>
        <motion.span 
          className="what-our-customers-said-description"
          initial={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} 
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.
        </motion.span>
      </div>
      <motion.div 
        className="flex gap-16 | customer-reviews-container"
          initial={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} 
      >
        <WhatOurCustomersSaidCarousel/>
      </motion.div>
    </div>
  )
}

export default WhatOurCustomersSaid