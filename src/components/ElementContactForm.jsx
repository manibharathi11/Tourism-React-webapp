import React from "react";

function ElementContactForm() {
  return (
    <>
      <div className="col-lg-4">
        <div
          className="custom-block" /*data-aos="fade-up" data-aos-delay={100}*/
        >
          <h2 className="section-title">Form</h2>
          <form className="contact-form bg-white">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="text-black" htmlFor="fname">
                    First name
                  </label>
                  <input type="text" className="form-control" id="fname" />
                </div>
              </div>
              <div className="col-md-6">
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
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label className="text-black" htmlFor="password">
                Password
              </label>
              <input type="password" className="form-control" id="password" />
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
            <div className="form-group">
              <label className="text-black" htmlFor="select">
                Select
              </label>
              <select name="" id="select" className="custom-select">
                <option value="">Untree.co</option>
                <option value="">Offers high quality free template</option>
              </select>
            </div>
            <div className="form-group">
              <label className="control control--checkbox">
                <span className="caption">Custom checkbox</span>
                <input type="checkbox" defaultChecked="checked" />
                <div className="control__indicator" />
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div className="custom-block" /* data-aos="fade-up"*/>
          <h2 className="section-title">Social Icons</h2>
          <ul className="list-unstyled social-icons light">
            <li>
              <a href="#">
                <span className="icon-facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon-linkedin" />
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon-google" />
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon-play" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ElementContactForm;
