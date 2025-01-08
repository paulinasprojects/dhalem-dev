import PageHeading from "@/components/common/page-heading"
import Experience from "@/components/experience"
import OurHistory from "@/components/our-history"
import TrustedPartners from "@/components/trusted-partners"

const AboutUs = () => {
  return (
    <div>
      <PageHeading
        title="About Us"
        description="Learn more about us here"
      />
      <Experience/>
      <TrustedPartners/>
      <OurHistory/>
    </div>
  )
}

export default AboutUs