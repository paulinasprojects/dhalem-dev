import PageHeading from "@/components/common/page-heading"
import OurTeamGallery from "@/components/our-team-gallery"

const OurTeamPage = () => {
  return (
    <div>
      <PageHeading
        title="Our Team"
        description="We are a team of professionals looking forward to work with our clients on their projects."
      />
      <OurTeamGallery/>
    </div>
  )
}

export default OurTeamPage