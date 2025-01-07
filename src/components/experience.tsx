import "@/styles/experience.scss";
import OurVisionMision from "./our-vision-mision";
import TrustedPartners from "./trusted-partners";

const Experience = () => {
  return (
    <> 
    <div className="experience-main-container">
      <div className="experience-title-container">
        <p className="experience-title">
        Over 12+ Years Experience <br /> in Real Estate Services
        </p>
        <p className="experience-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
        <img src="https://res.cloudinary.com/dymlzmyuo/image/upload/v1736250103/Image_kagtrj.png" className="experience-image" alt="" />
        <OurVisionMision/>
        <TrustedPartners/>
    </div>
    </>
  )
}

export default Experience