import { useState } from "react"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";

import "@/styles/slider.scss";

interface ImageSliderProps {
  images: string[];
};

const ImageSlider = ({ images }: ImageSliderProps) => {
  const [imageIndex, setImageIndex] = useState<number | null>(null);

  const changeSlider = (direction: unknown) => {
    if (imageIndex === null) return;

    if (direction === "left") {
      if (imageIndex === 0) {
        setImageIndex(images.length - 1);
      } else {
        setImageIndex(imageIndex - 1)
      }
    } else {
      if (imageIndex === images.length - 1) {
        setImageIndex(0)
      } else {
        setImageIndex(imageIndex + 1)
      };
    };
  };

  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="full-slider">
          <div className="change-slide" onClick={() => changeSlider("left")}>
            <FaArrowLeft className="arrow"/>
          </div>
          <div className="image-container">
            <img src={images[imageIndex]} alt="" className="" />
          </div>
          <div className="change-slide" onClick={() => changeSlider("right")}>
            <FaArrowRight className="arrow"/>
          </div>
          <div className="" onClick={() => setImageIndex(null)}>
            <MdOutlineClose className="close"/>
          </div>
        </div>
      )}
       <div className="big-image">
          <img src={images[0]} alt="" className="" onClick={() => setImageIndex(0)}/>
        </div>
      <div className="small-images">
        {images.slice(2).map((image, index) => (
          <img src={image} alt="" key={index} onClick={() => setImageIndex(index + 1)} />
        ))}
      </div>
    </div>
  )
}

export default ImageSlider