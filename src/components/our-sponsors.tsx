import { ourSponsorsLogos } from "@/lib/data";
import "@/styles/our-sponsors.scss";

const OurSponsors = () => {
  return (
    <div className="our-sponsors-container">
      <div className="our-sponsors-title-container">
        <span className="our-sponsors-title">
          Our Sponsors
        </span>
        <span className="our-sponsors-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.
        </span>
      </div>
      <div className="our-sponsors-logos-container">
        {ourSponsorsLogos.map((logo, index) => (
          <img src={logo} className="our-sponsors-logo-image" alt="" key={index} />
        ))}
      </div>
    </div>
  )
}

export default OurSponsors