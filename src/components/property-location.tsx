import "@/styles/property-location.scss";
import locationImage from "/location.jpg";

const PropertyLocation = () => {
  return (
    <div className="property-location-container">
      <h3 className="property-location-title">Location</h3>
      <span className="propery-location-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</span>
      <img src={locationImage} alt="" className="location-image" />
    </div>
  )
}

export default PropertyLocation