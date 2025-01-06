import "@/styles/property-details.scss";
import { FaCheck } from "react-icons/fa6";
import { propertyAmenities, propertyGallery } from "@/lib/data";
import PropertyGallery from "./property-gallery";
import PropertyLocation from "./property-location";

const PropertyDetails = () => {
  return (
    <div>
      <div className="flex flex-col gap-16">
        <h3 className="property-details-title">Details Property</h3>
        <p className="property-details-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut <br /> labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  ullamco laboris <br /> nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum  dolore eu fugiat nulla pariatur. <br /> Excepteur sint  occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div className="property-details-amenities">
        {propertyAmenities.map((item, index) => (
          <div key={index}>
            <div className="property-amenities-list">
              <FaCheck className="propery-amenities-icon"/>
             <span className="property-amenities-title">
                {item}
              </span> 
            </div>
          </div>
        ))}
      </div>
      <div className="property-gallery">
        <PropertyGallery images={propertyGallery}/>
      </div>
      <div className="property-location">
        <PropertyLocation/>
      </div>
    </div>
  )
}

export default PropertyDetails