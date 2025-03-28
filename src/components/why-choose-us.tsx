import { motion } from "framer-motion";
import "@/styles/why-choose-us.scss";
import whychooseusimage from '/why-choose-us.png';
import { FaCheck } from "react-icons/fa6";

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us-container">
      <div className="flex | why-choose-us-content-container">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} 
        >
          <div className="flex-col | why-choose-us-title-container">
            <h3 className="why-choose-us-title">Why Choose Us for Your House Needs?</h3>
            <p className="why-choose-us-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="flex-col | why-choose-us-checks">
            <div className="flex gap-16 | check-col">
              <div className="tick-background">
                <FaCheck style={{width: "17px", height: "24px"}}/>
              </div>
              <div className="flex-col gap-8">
                <span className="why-choose-us-checks-title">Comfortable Home Design</span>
                <p className="why-choose-us-checks-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
            <div className="flex gap-16 | check-col">
              <div className="tick-background">
                <FaCheck style={{width: "17px", height: "24px"}}/>
              </div>
              <div className="flex-col gap-8">
                <span className="why-choose-us-checks-title">Professional Developer</span>
                <p className="why-choose-us-checks-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
            <div className="flex gap-16 | check-col">
              <div className="tick-background">
                <FaCheck style={{width: "17px", height: "24px"}}/>
              </div>
              <div className="flex-col gap-8">
                <span className="why-choose-us-checks-title" >Fast Response</span>
                <p className="why-choose-us-checks-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
        </motion.div>
        {/*  Right */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img src={whychooseusimage} alt="" className="why-choose-us-image" />
        </motion.div>
      </div>
    </div>
  )
}

export default WhyChooseUs