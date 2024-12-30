import BuyPropertySteps from "@/components/buy-property-steps"
import FeaturedListings from "@/components/featured-listings"
import Hero from "@/components/hero"
import OurVision from "@/components/our-vision"
import WhatOurCustomersSaid from "@/components/what-our-customers-said"
import WhyChooseUs from "@/components/why-choose-us"

const HomePage = () => {
  return (
    <>
      <Hero/>
      <FeaturedListings/>
      <OurVision/>
      <BuyPropertySteps/>
      <WhyChooseUs/>
      <WhatOurCustomersSaid/>
    </>
  )
}

export default HomePage