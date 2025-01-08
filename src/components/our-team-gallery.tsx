import { ourTeamList } from "@/lib/data";
import "@/styles/our-team-gallery.scss";

const OurTeamGallery = () => {
  return (
    <div className="our-team-gallery-main-container">
      <div className="our-team-gallery-content-container">
        {ourTeamList.map((member) => (
          <div key={member.id} className="our-team-gallery-content">
            <img src={member.image} className="our-team-gallery-image" />
            <span className="our-team-gallery-name">{member.name}</span>
            <span className="our-team-gallery-work-position">{member.workPosition}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurTeamGallery