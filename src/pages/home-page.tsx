import BuyPropertySteps from "@/components/buy-property-steps"
import FeaturedListings from "@/components/featured-listings"
import Hero from "@/components/hero"
import LetsMove from "@/components/lets-move"
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
      <LetsMove/>
    </>
  )
}

export default HomePage