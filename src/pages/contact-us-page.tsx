import PageHeading from "@/components/common/page-heading";
import ContactUs from "@/components/contact-us";

const ContactUsPage = () => {
  return (
    <div>
      <PageHeading
        title="Contact Us"
        description="Please fill out the form below to contact us and we will get to you shorty."
      />
      <ContactUs/>
    </div>
  )
}

export default ContactUsPage