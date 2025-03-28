import { IconType } from "react-icons/lib";

interface Props {
  title: string;
  description: string;
  icon: IconType;
}

const FeaturedServicesCard = ({title, description, icon: Icon}: Props) => {
  return (
      <div className="flex-col">
        <div className="fetured-card-icon-bg">
          <Icon className="featured-card-icon"/>
        </div>
        <span className="featured-card-title">{title}</span>
        <span className="featured-card-description">{description}</span>
    </div>
  )
}

export default FeaturedServicesCard