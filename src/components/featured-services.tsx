import "@/styles/featured-services.scss";
import FeaturedServicesCards from "./featured-services-cards";

const FeaturedServices = () => {
  return (
    <div className="featured-services-container">
      <div className="featured-services-title-container">
        <span className="featured-services-title">Featured Services</span>
        <span className="feautured-services-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.</span>
      </div>
      <div>
        <FeaturedServicesCards/>
      </div>
    </div>
  )
}

export default FeaturedServices