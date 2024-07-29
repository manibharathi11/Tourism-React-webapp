import React from "react";
//import "../css/style.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function AboutSection() {
  return (
    <>
      <div className="untree_co-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <Carousel
                autoPlay={true}
                interval={1500} // Change the interval as per your preference
                infiniteLoop={true}
                showArrows={true} // Display arrows for navigation
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
              >
                <img
                  src="/images/slider-1.jpg"
                  alt="Free HTML Template by Untree.co"
                  className="img-fluid rounded-20"
                />
                <img
                  src="/images/slider-2.jpg"
                  alt="Free HTML Template by Untree.co"
                  className="img-fluid rounded-20"
                />
                <img
                  src="/images/slider-3.jpg"
                  alt="Free HTML Template by Untree.co"
                  className="img-fluid rounded-20"
                />
                <img
                  src="/images/slider-4.jpg"
                  alt="Free HTML Template by Untree.co"
                  className="img-fluid rounded-20"
                />
                <img
                  src="/images/slider-5.jpg"
                  alt="Free HTML Template by Untree.co"
                  className="img-fluid rounded-20"
                />
              </Carousel>
            </div>
            <div className="col-lg-5 pl-lg-5 ml-auto">
              <h2 className="section-title mb-4">About Tours</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutSection;
