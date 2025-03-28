import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/constants";
import { buyPropertySteps } from "@/lib/data";
import "@/styles/buy-property-steps.scss";

const BuyPropertySteps = () => {
  return (
    <motion.div 
      className="buy-property-steps-container"
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.2}}
      variants={containerVariants}
    >
      <div className="flex | buy-property-title-container">
        <motion.span 
          className="buy-property-title"
          initial={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} 
        >
          Easy Step to Buy Property on Dhalem Real Estate
        </motion.span>
        <motion.span 
         className="buy-property-description"
         initial={{ opacity: 0, x: 20 }}
         transition={{ duration: 0.8, ease: "easeIn" }}
         whileInView={{ opacity: 1, x: 0 }}
         viewport={{ once: true }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </motion.span>
      </div>
      <div className="flex | steps-container">
        {buyPropertySteps.map((step) => (
        <motion.div className="flex-col" key={step.id} variants={itemVariants}>
          <span className="step-number">{step.step}</span>
          <span className="step-title">{step.stepTitle}</span>
          <span className="step-description">{step.stepDescription}</span>
        </motion.div>
        ))}
      </div>
      <div className="see-our-faq">
        <motion.span 
          className="see-our-faq-title"
          initial={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} 
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </motion.span>
        <motion.button 
          className="see-our-faq-button"
          initial={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} 
        >
          See Our FAQ
        </motion.button>
      </div>
    </motion.div>
  )
}

export default BuyPropertySteps