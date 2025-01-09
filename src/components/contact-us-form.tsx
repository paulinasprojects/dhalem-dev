import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactUsSchema } from "@/lib/schemas";
import InputField from "./common/input-field";
import Label from "./common/label";
import TextArea from "./common/textarea";
import "@/styles/contact-us-form.scss";

const ContactUsForm = () => {
  const { register, handleSubmit, reset, formState:{errors} } = useForm<z.infer<typeof contactUsSchema>>({
    resolver: zodResolver(contactUsSchema),
    defaultValues: {
      email: "",
      fullName: "",
      message: "",
      subject: "",
      phone: undefined,
    }
  });

  const onSubmit = async (values: z.infer<typeof contactUsSchema>) => {
    console.log(values);
    reset();
  };


  return (
    <>
      <div className="contact-us-form-title-container">
        <span className="contact-us-form-title">Have a Question? Request a Visit? or <br /> Request a Quote? Don’t be Shy to <br /> Message Us!</span>
        <span className="contact-us-form-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  <br /> labore et dolore magna aliqua. Ut enim ad minim veniam.</span>
      </div>
      {/* Form */}
      <div style={{marginTop: "40px"}}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="contact-us-form-main-container">
          <div className="contact-us-form-content-container">
            <div className="contact-us-form-container">
              <Label
                label="Your Name"
                className="contact-us-form-label"
              />
              <InputField
                register={register}
                name="fullName"
                placeholder="Your Full Name"
                error={errors.fullName}
                className="contact-us-form-input"
              />
            </div>
            <div className="contact-us-form-container">
              <Label
                label="Your Email"
                className="contact-us-form-label"
              />
              <InputField
                register={register}
                name="email"
                placeholder="example@email.com"
                error={errors.email}
                className="contact-us-form-input"
              />
            </div>
          </div>
          <div className="contact-us-form-content-container">
            <div className="contact-us-form-container">
              <Label
                label="Your Phone Number"
                className="contact-us-form-label"
              />
              <InputField
                register={register}
                name="phone"
                placeholder="+123 456 7890"
                error={errors.phone}
                className="contact-us-form-input"
              />
            </div>
            <div className="contact-us-form-container">
              <Label
                label="Subject"
                className="contact-us-form-label"
              />
              <InputField
                register={register}
                name="subject"
                placeholder="Question"
                error={errors.subject}
                className="contact-us-form-input"
              />
            </div>
          </div>
            <div className="contact-us-form-textarea-container">
              <Label
                label="Message"
                className="contact-us-form-label"
              />
              <TextArea
                name="message"
                register={register}
                className="contact-us-form-textarea"
                error={errors.message}
                placeholder="Message"
              />
            </div>
            <button className="contact-us-form-button">Send Message</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ContactUsForm