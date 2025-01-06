import "@/styles/other-property.scss";
import { useNavigate } from "react-router-dom";
import { otherProperties } from "@/lib/data";
import { MdLocationOn} from "react-icons/md";
import { RiLayoutGridLine } from "react-icons/ri";
import { FaBed } from "react-icons/fa6";
import { MdBathtub } from "react-icons/md";

const OtherProperty = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex-col gap-16">
        <h3 className="other-property-title">Other Property</h3>
        <p className="other-property-description">Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit , sed do eiusmod tempor incididunt ut.</p>
      </div>
      <div className="other-property-container">
        {otherProperties.map((property) => (
          <div key={property.id} onClick={() => navigate("/listings/1")}>
            <div className="relative">
              <img src={property.image} alt="" className="other-property-image" />
              <div className="absolute | other-property-absolute-container">
              <span className="other-property-price">${property.price},-</span>
              </div>
            </div>
            <div className="other-property-card-title-container">
              <span className="other-property-card-title">{property.title}</span>
              <div className="other-property-location-container">
                <MdLocationOn className="other-property-location-icon"/>
                <span className="other-property-location">{property.location}</span>
              </div>
            </div>
            <div className="other-property-data-container">
              <div className="other-property-data">
              <div className="flex items-center gap-8">
                  <RiLayoutGridLine className="other-property-data-icon"/>
                  <span className="other-property-span">
                    {property.sqft} Sq Ft
                  </span>
                </div>
                <div className="flex items-center gap-8">
                  <FaBed className="listings-icon"/>
                  <span className="other-property-span">
                    {property.bedrooms} {" "}
                    Bedroom
                  </span>
                </div>
                <div className="flex items-center gap-8">
                  <MdBathtub className="listings-icon"/>
                  <span className="other-property-span">
                    {property.bathrooms} {" "}
                    Bathroom
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OtherProperty