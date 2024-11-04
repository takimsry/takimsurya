import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import ReCAPTCHA from 'react-google-recaptcha';

const Contacts = () => {
  const form = useRef();
  const recaptchaRef = useRef();
  const [formEmail, setFormEmail] = useState({
    user_name: "",
    user_email: "",
    message: ""
  });
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleChange = (e) => {
    setFormEmail({ ...formEmail, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!captchaValue){
      toast.error("Please complete the reCAPTCHA", { style: { fontSize: '16px' } });
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        form.current, {
          publicKey: process.env.REACT_APP_EMAIL_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setFormEmail({
            user_name: "",
            user_email: "",
            message: ""
          });
          recaptchaRef.current.reset();
          setCaptchaValue(null);
          toast.success("Email sent successfully!", { style: { fontSize: '16px' } });
        },
        (error) => {
          toast.error("Failed to send the email", { style: { fontSize: '16px' } });
          throw new Error(error);
        }
      );
  }

  const onCaptchaChange = (value) => {
    setCaptchaValue(value);
  }

  return (
    <section id="contact" className="contact sec-pad dynamicBg">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med" data-aos="fade-up">
          <span className="heading-sec__main heading-sec__main--lt">Contact</span>
          <span className="heading-sec__sub heading-sec__sub--lt">
            Please don't hesitate to reach out to me by filling out the form below. I will promptly respond to your message.
          </span>
        </h2>
        <div className="contact__form-container" data-aos="fade-up" data-aos-delay="200">
          <form ref={form} onSubmit={handleSubmit} className="contact__form" name="EmailForm">
            <div className="contact__form-field">
              <label className="contact__form-label" for="name">Name</label>
              <input
                required
                placeholder="Enter Your Name"
                type="text"
                className="contact__form-input"
                name="user_name"
                id="user_name"
                value={formEmail.user_name}
                onChange={handleChange}
              />
            </div>
            <div className="contact__form-field">
              <label className="contact__form-label" for="email">Email</label>
              <input
                required
                placeholder="Enter Your Email"
                type="email"
                className="contact__form-input"
                name="user_email"
                id="user_email"
                value={formEmail.user_email}
                onChange={handleChange}
              />
            </div>
            <div className="contact__form-field">
              <label className="contact__form-label" for="message">Message</label>
              <textarea
                required
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Enter Your Message"
                name="message"
                id="message"
                value={formEmail.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
              onChange={onCaptchaChange}
            />
            <button type="submit" className="btn btn--theme contact__btn submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contacts