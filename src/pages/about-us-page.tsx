import PageHeading from "@/components/common/page-heading"
import Experience from "@/components/experience"
import OurAgents from "@/components/our-agents"
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
      <OurAgents/>
    </div>
  )
}

export default AboutUs