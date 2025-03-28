import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/constants";
import "@/styles/featured-services-cards.scss";
import services from '/services.png';
import { featuredServicesCardData } from "@/lib/data";
import FeaturedServicesCard from "./featured-services-card";

const FeaturedServicesCards = () => {
  return (
    <motion.div 
      className="featured-services-cards-container"
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.6}}
      variants={containerVariants}
    >
      <div className="featured-services-steps">
        {featuredServicesCardData.map((data) =>  (
          <motion.div key={data.id} variants={itemVariants}>
            <FeaturedServicesCard
            icon={data.icon}
            description={data.description}
            title={data.title}
          />
          </motion.div>
        ))}
      </div>
      <motion.div 
        className="featured-card-services"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 1.8, ease: "easeIn" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <img src={services} alt="" className="featured-card-services-image" />
      </motion.div>
    </motion.div>
  )
}

export default FeaturedServicesCards