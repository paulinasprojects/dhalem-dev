import PageHeading from "@/components/common/page-heading";
import FeaturedServices from "@/components/featured-services";
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
    </div>
  )
}

export default OurServices