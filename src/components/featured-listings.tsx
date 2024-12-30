import { featuredListingsData } from "@/lib/data";
import { MdLocationOn } from "react-icons/md";
import "@/styles/featured-listings.scss";

const FeaturedListings = () => {
  return (
    <div className="featured-listings-container">
      <div className="featured-title-container">
        <span className="featured-listing-title">Featured Listings</span>
        <span className="featured-listing-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.
        </span>
      </div>
      <div className="featured-listings-items-container">
        {featuredListingsData.map((item) => (
          <div>
            <div className="relative | relative-container">
              <img src={item.image} alt="" className="featured-listing-image" />
              <div className="absolute | absolute-container">
                <span className="featured-listing-price">${item.price},-</span>
              </div>
              <div className="featured-item-title-container">
                <span className="featured-item-title">{item.title}</span>
              </div>
              <div className="featured-item-location">
                <MdLocationOn className="location-icon" />
                <span className="featured-item-location-title">{item.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="see-more-container">
        <span className="see-more-title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
        <button className="seem-more-button">
          See more
        </button>
      </div>
    </div>
  )
}

export default FeaturedListings