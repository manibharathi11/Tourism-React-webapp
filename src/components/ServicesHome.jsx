import React from "react";

function ServicesHome() {
  return (
    <>
      <div className="row align-items-stretch">
        <div className="col-lg-4 order-lg-1">
          <div className="h-100">
            <div className="frame h-100">
              <div
                className="feature-img-bg h-100"
                style={{
                  backgroundImage: 'url("images/hero-slider-1.jpg")',
                }}
              />
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-6 col-lg-4 feature-1-wrap d-md-flex flex-md-column order-lg-1">
          <div className="feature-1 d-md-flex">
            <div className="align-self-center">
              <span className="flaticon-house display-4 text-primary" />
              <h3>Beautiful Condo</h3>
              <p className="mb-0">
                Even the all-powerful Pointing has no control about the blind
                texts.
              </p>
            </div>
          </div>
          <div className="feature-1 ">
            <div className="align-self-center">
              <span className="flaticon-restaurant display-4 text-primary" />
              <h3>Restaurants &amp; Cafe</h3>
              <p className="mb-0">
                Even the all-powerful Pointing has no control about the blind
                texts.
              </p>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-6 col-lg-4 feature-1-wrap d-md-flex flex-md-column order-lg-3">
          <div className="feature-1 d-md-flex">
            <div className="align-self-center">
              <span className="flaticon-mail display-4 text-primary" />
              <h3>Easy to Connect</h3>
              <p className="mb-0">
                Even the all-powerful Pointing has no control about the blind
                texts.
              </p>
            </div>
          </div>
          <div className="feature-1 d-md-flex">
            <div className="align-self-center">
              <span className="flaticon-phone-call display-4 text-primary" />
              <h3>24/7 Support</h3>
              <p className="mb-0">
                Even the all-powerful Pointing has no control about the blind
                texts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesHome;
