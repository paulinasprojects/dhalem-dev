import { motion } from 'framer-motion';
import heroimage from '/hero-image.png'
import "@/styles/hero.scss";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="flex-container">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           transition={{ duration: 0.8, ease: "easeIn" }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }} 
        >
          <div className="text-container">
            <h1 className="hero-title">Bring Your Family's Happiness to Your Dream House</h1>
            <p className="hero-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="hero-input-container">
            <input type="text" placeholder="Search here" className="hero-input" />
            <button className="hero-search-button">Search</button>
          </div>
          <div className="hero-awards-container">
           <div className="awards-container">
            <span className="hero-award-title">300+</span>
            <span className="hero-award-description">Awards Winnning</span>
           </div>
           <div className="awards-container">
            <span className="hero-award-title">80+</span>
            <span className="hero-award-description">Property Ready</span>
           </div>
           <div className="awards-container">
            <span className="hero-award-title">450+</span>
            <span className="hero-award-description">Happy Customers</span>
           </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} 
        >
          <img src={heroimage} alt="" className="hero-image" />
        </motion.div>
      </div>
    </div>
  )
}

export default Hero