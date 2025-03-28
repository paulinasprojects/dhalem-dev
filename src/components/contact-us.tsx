import { motion } from "framer-motion";
import "@/styles/contact-us.scss";
import GetInTouch from "./get-in-touch";
import ContactUsForm from "./contact-us-form";
const ContactUs = () => {
  return (
    <div className="contact-us-main-container">
      {/* Flex Container */}
      <div className="contact-us-content-container">
        <motion.div 
          className="contact-us-get-in-touch"
          initial={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} 
        >
          <GetInTouch/>
        </motion.div>
        <motion.div 
          className="contact-us-contact-form"
          initial={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} 
        >
          <ContactUsForm/>
        </motion.div>
      </div>
    </div>
  )
}

export default ContactUs