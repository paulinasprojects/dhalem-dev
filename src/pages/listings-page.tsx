import PageHeading from "@/components/common/page-heading"
import ListingsCard from "@/components/listings-card"

const ListingsPage = () => {
  return (
    <div>
      <PageHeading
        title="Our Listings"
        description="Check out our most recent properties for rent."
      />
      <div>
        <ListingsCard/>
      </div>
    </div>
  )
}

export default ListingsPage