import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { whatOurCustomersSaidData } from '@/lib/data';
import WhatourCustomersSaidCard from './what-our-customers-said-card';

const WhatOurCustomersSaidCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  };

  return (
    <div className="what-our-customers-said-carousel">
      <Slider
        {...settings}
      >
        {whatOurCustomersSaidData.map((data) => (
        <div className='customers-said-carousel-slide' key={data.id}>
          <WhatourCustomersSaidCard
            comment={data.comment}
            img={data.img}
            name={data.name}
            workcompany={data.workcompany}
          />
        </div>
        ))}
      </Slider>
    </div>
  )
}

export default WhatOurCustomersSaidCarousel;