import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/constants";
import { ourSponsorsLogos } from "@/lib/data";
import "@/styles/our-sponsors.scss";

const OurSponsors = () => {
  return (
    <motion.div 
      className="our-sponsors-container"
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.2}}
      variants={containerVariants}
    >
      <div className="our-sponsors-title-container">
        <motion.span 
          className="our-sponsors-title"
          initial={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} 
        >
          Our Sponsors
        </motion.span>
        <motion.span
          className="our-sponsors-description"
          initial={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.
        </motion.span>
      </div>
      <div className="our-sponsors-logos-container">
        {ourSponsorsLogos.map((logo, index) => (
          <motion.img src={logo} className="our-sponsors-logo-image" alt="" key={index} variants={itemVariants} />
        ))}
      </div>
    </motion.div>
  )
}

export default OurSponsors