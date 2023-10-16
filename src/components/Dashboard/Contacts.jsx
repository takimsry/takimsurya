import React from 'react';

const Contacts = () => {
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
          <form action="mailto:muhammadmustakimsurya@gmail.com" className="contact__form" method="POST" enctype="multipart/form-data" name="EmailForm">
            <div className="contact__form-field">
              <label className="contact__form-label" for="name">Name</label>
              <input
                required
                placeholder="Enter Your Name"
                type="text"
                className="contact__form-input"
                name="name"
                id="name"
              />
            </div>
            <div className="contact__form-field">
              <label className="contact__form-label" for="email">Email</label>
              <input
                required
                placeholder="Enter Your Email"
                type="email"
                className="contact__form-input"
                name="email"
                id="email"
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
              ></textarea>
            </div>
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