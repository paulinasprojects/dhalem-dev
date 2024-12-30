import "@/styles/what-our-customers-said.scss";
import reviewAvatar from '/review-avatar.png';

const WhatOurCustomersSaid = () => {
  return (
    <div className="what-our-customers-said-container">
      <div className="flex items-center justify-between | what-our-customers-said-title-container">
        <span className="what-our-customers-said-title">What Our Happy <br /> Customers Said </span>
        <span className="what-our-customers-said-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.</span>
      </div>
      <div className="flex gap-16 mt-80 | customer-reviews-container">
        <div className="customer-review">
          <div className="customer-review-content">
            <span className="review-content">Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</span>
            <div className="flex gap-12 items-center">
              <img src={reviewAvatar} alt="" className="review-avatar" />
              <div className="flex-col">
                <span className="review-customer-name">Shoo Phar Mhan</span>
                <span className="review-customer-work">Kang Masak</span>
              </div>
            </div>
          </div>
        </div>
        <div className="customer-review">
        <div className="customer-review-content">
            <span className="review-content">Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</span>
            <div className="flex gap-12 items-center">
              <img src={reviewAvatar} alt="" className="review-avatar" />
              <div className="flex-col">
                <span className="review-customer-name">Shoo Phar Mhan</span>
                <span className="review-customer-work">Kang Masak</span>
              </div>
            </div>
          </div>
        </div>
        <div className="customer-review">
        <div className="customer-review-content">
            <span className="review-content">Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</span>
            <div className="flex gap-12 items-center">
              <img src={reviewAvatar} alt="" className="review-avatar" />
              <div className="flex-col">
                <span className="review-customer-name">Shoo Phar Mhan</span>
                <span className="review-customer-work">Kang Masak</span>
              </div>
            </div>
          </div>
        </div>
        <div className="customer-review">
        <div className="customer-review-content">
            <span className="review-content">Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</span>
            <div className="flex gap-12 items-center">
              <img src={reviewAvatar} alt="" className="review-avatar" />
              <div className="flex-col">
                <span className="review-customer-name">Shoo Phar Mhan</span>
                <span className="review-customer-work">Kang Masak</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatOurCustomersSaid