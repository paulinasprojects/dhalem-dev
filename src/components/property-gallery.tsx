import "@/styles/property-gallery.scss";


interface PropertyGalleryProps {
  images: string[];
}

const PropertyGallery = ({ images }: PropertyGalleryProps) => {
  return (
    <div>
      <div className="property-gallery-container">
        {images.map((image, index) => (
          <img src={image} alt="" key={index} />
        ))}
      </div>
    </div>
  )
}

export default PropertyGallery