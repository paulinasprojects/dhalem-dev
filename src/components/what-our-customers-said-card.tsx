import "@/styles/what-our-customers-said.scss"

interface Props {
  comment: string;
  img: string;
  name: string;
  workcompany: string;
}

const WhatourCustomersSaidCard = ({ comment, img, name, workcompany }: Props) => {
  return (
    <div className='customer-review'>
      <div className="customer-review-content">
        <span className='review-content'>{comment}</span>
        <div className="flex gap-12 items-center">
          <img src={img} alt="" className='review-avatar' />
          <div className="flex-col">
            <span className='review-customer-name'>{name}</span>
            <span className='review-customer-work'>{workcompany}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatourCustomersSaidCard