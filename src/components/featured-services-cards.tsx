import "@/styles/featured-services-cards.scss";
import { FaCheck } from "react-icons/fa6";
import services from '/services.png';

const FeaturedServicesCards = () => {
  return (
    <div className="featured-services-cards-container">
      <div className="featured-services-steps">
        <div className="flex-col">
          <div className="fetured-card-icon-bg">
            <FaCheck className="featured-card-icon"/>
          </div>
          <span className="featured-card-title">Residential <br /> Building</span>
          <span className="featured-card-description">Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</span>
        </div>
        <div className="flex-col">
        <div className="fetured-card-icon-bg">
          <FaCheck className="featured-card-icon"/>
        </div>
          <span className="featured-card-title">Individual House <br /> Bulding</span>
          <span className="featured-card-description">Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</span>
        </div>
        <div className="flex-col">
        <div className="fetured-card-icon-bg">
          <FaCheck className="featured-card-icon"/>
        </div>
          <span className="featured-card-title">Corporate <br /> Building</span>
          <span className="featured-card-description">Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</span>
        </div>
        <div className="flex-col">
        <div className="fetured-card-icon-bg">
          <FaCheck className="featured-card-icon"/>
          </div>
          <span className="featured-card-title">Commercial <br /> Building</span>
          <span className="featured-card-description">Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</span>
        </div>
      </div>
      <div className="featured-card-services">
        <img src={services} alt="" className="featured-card-services-image" />
      </div>
    </div>
  )
}

export default FeaturedServicesCards