import "@/styles/contact-us.scss";
import GetInTouch from "./get-in-touch";
import ContactUsForm from "./contact-us-form";
const ContactUs = () => {
  return (
    <div className="contact-us-main-container">
      {/* Flex Container */}
      <div className="contact-us-content-container">
        <div className="contact-us-get-in-touch">
          <GetInTouch/>
        </div>
        <div className="contact-us-contact-form">
          <ContactUsForm/>
        </div>
      </div>
    </div>
  )
}

export default ContactUs