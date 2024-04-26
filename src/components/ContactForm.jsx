import React from "react";

function ContactForm() {
  return (
    <>
      <div className="untree_co-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <form
                className="contact-form"
                // data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <label className="text-black" htmlFor="fname">
                        First name
                      </label>
                      <input type="text" className="form-control" id="fname" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label className="text-black" htmlFor="lname">
                        Last name
                      </label>
                      <input type="text" className="form-control" id="lname" />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="text-black" htmlFor="email">
                    Email address
                  </label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="form-group">
                  <label className="text-black" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    name=""
                    className="form-control"
                    id="message"
                    cols={30}
                    rows={5}
                    defaultValue={""}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
            <div className="col-lg-5 ml-auto">
              <div className="quick-contact-item d-flex align-items-center mb-4">
                <span className="flaticon-house" />
                <address className="text">
                  155 Market St #101, Paterson, NJ 07505, United States
                </address>
              </div>
              <div className="quick-contact-item d-flex align-items-center mb-4">
                <span className="flaticon-phone-call" />
                <address className="text">+1 202 2020 200</address>
              </div>
              <div className="quick-contact-item d-flex align-items-center mb-4">
                <span className="flaticon-mail" />
                <address className="text">@info@mydomain.com</address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
