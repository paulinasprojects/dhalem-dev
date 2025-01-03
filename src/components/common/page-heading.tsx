
import "@/styles/page-heading.scss";
interface PageHeadingProps {
  title: string;
  description: string;
}


const PageHeading = ({title, description}: PageHeadingProps) => {
  return (
    <div className="flex-col gap-16 items-center justify-center | page-heading-container">
      <h2 className="page-heading-title">{title}</h2>
      <p className="page-heading-description">{description}</p>
    </div>
  )
}

export default PageHeading