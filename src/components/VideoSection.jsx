import React from "react";
import "../css/style.css";

function VideoSection() {
  return (
    <>
      <div className="untree_co-section">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <figure className="img-play-video">
                <a
                  id="play-video"
                  className="video-play-button"
                  href="https://www.youtube.com/watch?v=mwtbEGNABWU"
                  data-fancybox=""
                >
                  <span />
                </a>
                <img
                  src="images/hero-slider-2.jpg"
                  alt="Image"
                  className="img-fluid rounded-20"
                />
              </figure>
            </div>
            <div className="col-lg-5">
              <h2 className="section-title text-left mb-4">
                Discover Paris: The Ultimate Tour Video Experience
              </h2>
              <p className="text-justify">
                Join us on this unforgettable visual tour of Paris, a city that
                captivates the hearts of millions. Whether you’re planning your
                first visit or reliving cherished memories, our video brings the
                magic of Paris to life, offering a glimpse into its timeless
                beauty and endless charm. Bon voyage!
              </p>
              <p className="mb-4 text-justify">
                No visit to Paris is complete without experiencing the Eiffel
                Tower. Standing tall as the symbol of the city, this
                architectural marvel offers breathtaking views of the Parisian
                skyline.
              </p>
              <h5 className="section-title text-left mb-4">
                Some of the Key Services provided by us:
              </h5>
              <ul className="list-unstyled two-col clearfix">
                <li>Outdoor recreation activities</li>
                <li>Airlines</li>
                <li>Car Rentals</li>
                <li>Cruise Lines</li>
                <li>Hotels</li>
                <li>Railways</li>
                <li>Travel Insurance</li>
                <li>Package Tours</li>
                <li>Insurance</li>
                <li>Guide Books</li>
              </ul>
              <p>
                <a href="#" className="btn btn-primary">
                  Get Started
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoSection;
