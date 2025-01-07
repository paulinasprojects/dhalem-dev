import { ourSponsorsLogos } from "@/lib/data";
import "@/styles/trusted-partners.scss";

const TrustedPartners = () => {
  return (
    <div className="trusted-partners-main-container">
      <div className="trusted-partners-title-container">
        <span className="trusted-partners-title">Our Trusted Partners</span>
        <span className="trusted-partners-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.</span>
      </div>
       <div className="trusted-partners-logos-container">
          {ourSponsorsLogos.map((logo, index) => (
            <img src={logo} className="trusted-partners-logo-image" alt="" key={index} />
          ))}
        </div>
    </div>
  )
}

export default TrustedPartners