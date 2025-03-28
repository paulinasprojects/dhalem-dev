import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/constants";
import { ourTeamList } from "@/lib/data";
import "@/styles/our-team-gallery.scss";

const OurTeamGallery = () => {
  return (
    <motion.div 
      className="our-team-gallery-main-container"
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.2}}
      variants={containerVariants}
    >
      <div className="our-team-gallery-content-container">
        {ourTeamList.map((member) => (
          <motion.div 
            key={member.id} 
            className="our-team-gallery-content"
            variants={itemVariants}
          >
            <img src={member.image} className="our-team-gallery-image" />
            <span className="our-team-gallery-name">{member.name}</span>
            <span className="our-team-gallery-work-position">{member.workPosition}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default OurTeamGallery