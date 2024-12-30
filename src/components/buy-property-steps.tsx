import "@/styles/buy-property-steps.scss";

const BuyPropertySteps = () => {
  return (
    <div className="buy-property-steps-container">
      <div className="flex | buy-property-title-container">
        <span className="buy-property-title">Easy Step to Buy Property on Dhalem Real Estate</span>
        <span className="buy-property-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
      </div>
      <div className="flex | steps-container">
        <div className="flex-col">
          <span className="mb-16 | step-number">1.</span>
          <span className="mb-8 | step-title">View Listing</span>
          <span className="step-description">Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</span>
        </div>
        <div className="flex-col">
          <span className="mb-16 | step-number">2.</span>
          <span className="mb-8 | step-title">Contact Us</span>
          <span className="step-description">Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</span>
        </div>
        <div className="flex-col">
          <span className="mb-16 | step-number">3.</span>
          <span className="mb-8 | step-title">Request a Visit</span>
          <span className="step-description">Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</span>
        </div>
        <div className="flex-col">
          <span className="mb-16 | step-number">4.</span>
          <span className="mb-8 | step-title">Buy The House</span>
          <span className="step-description">Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</span>
        </div>
      </div>
      <div className="see-our-faq">
        <span className="see-our-faq-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
        <button className="see-our-faq-button">See Our FAQ</button>
      </div>
    </div>
  )
}

export default BuyPropertySteps