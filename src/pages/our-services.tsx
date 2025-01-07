import PageHeading from "@/components/common/page-heading";
import FeaturedServices from "@/components/featured-services";
import LetsMove from "@/components/lets-move";
import OurSponsors  from "@/components/our-sponsors";
import RealEstateServices from "@/components/real-estate-services";
import "@/styles/our-services.scss";

const OurServices = () => {
  return (
    <div className="">
       <PageHeading
        title="Our Services"
        description="Check out our services that we offer."
      />
      <FeaturedServices/>
      <RealEstateServices/>
      <OurSponsors />
      <div className="our-services-lets-move-container">
      <LetsMove/>
      </div>
    </div>
  )
}

export default OurServices