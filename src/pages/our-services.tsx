import PageHeading from "@/components/common/page-heading";
import FeaturedServices from "@/components/featured-services";
import OurSponsors from "@/components/our-sponsors";
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
      <OurSponsors/>
    </div>
  )
}

export default OurServices