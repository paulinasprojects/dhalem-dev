import PageHeading from "@/components/common/page-heading";
import FeaturedServices from "@/components/featured-services";
import "@/styles/our-services.scss";

const OurServices = () => {
  return (
    <div className="">
       <PageHeading
        title="Our Services"
        description="Check out our services that we offer."
      />
      <FeaturedServices/>
    </div>
  )
}

export default OurServices