import "@/styles/listing-details.scss";
import { propertyImages } from "@/lib/data";
import ImageSlider from "@/components/image-slider";
import ListingDetailsInformation from "@/components/listing-details-information";
import PropertyDetails from "@/components/property-details";
import OtherProperty from "@/components/other-property";

const ListingDetailsPage = () => {
  return (
    <div className="listing-details-container">
      <div>
        <h2 className="listing-details-title">Qiri Minimalist House</h2>
        <span className="listing-details-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
      </div>
      <div>
        <ImageSlider images={propertyImages}/>
      </div>
      <div className="listing-details-information">
        <ListingDetailsInformation/>
      </div>
      <div className="property-details">
        {/* left */}
      <div className="">
        <PropertyDetails/>
      </div>
      {/* Right */}
        <div>
          <OtherProperty/>
        </div>
      </div>
    </div>
  )
}

export default ListingDetailsPage