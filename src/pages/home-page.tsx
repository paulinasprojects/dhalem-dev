import BuyPropertySteps from "@/components/buy-property-steps"
import FeaturedListings from "@/components/featured-listings"
import Hero from "@/components/hero"
import OurVision from "@/components/our-vision"

const HomePage = () => {
  return (
    <>
      <Hero/>
      <FeaturedListings/>
      <OurVision/>
      <BuyPropertySteps/>
    </>
  )
}

export default HomePage