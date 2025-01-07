import { realEstateServices } from "@/lib/data";
import "@/styles/real-estate-services.scss";
import { FaCheck } from "react-icons/fa6";

const RealEstateServices = () => {
  return (
    <div className="real-estate-services-container">
      <div className="real-estate-services-content-container">
        {/* Left */}
        <div className="relative | real-estate-services-image-container">
          <img src="https://res.cloudinary.com/dymlzmyuo/image/upload/v1736240707/joakim-nadell-K67sBVqLLuw-unsplash_hu37c6.jpg" alt="" className="real-estate-big-image" />
          <div className="absolute | real-estate-small-image-container">
            <img src="https://res.cloudinary.com/dymlzmyuo/image/upload/v1736240713/anders-jilden-Sc5RKXLBjGg-unsplash_pgtof2.jpg" alt="" className="real-estate-small-image" />
          </div>
        </div>
        {/* Right */}
        <div className="real-estate-services-title-container">
          <p className="real-estate-services-title">Real Estate Services</p>
          <p className="real-estate-services-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="real-estate-services-items">
          {realEstateServices.map((services, index) => (
            <div key={index} className="real-estate-services-item">
              <FaCheck className="real-estate-services-item-icon"/>
              <span className="real-esatate-service-item">{services}</span>
            </div>
          ))}
        </div>
        <div className="real-estate-services-description-container">
          <p className="real-estate-services-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default RealEstateServices