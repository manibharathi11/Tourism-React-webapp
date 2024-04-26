import React from "react";
import { Carousel } from "react-responsive-carousel";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function PhotosSection() {
  return (
    <>
      <div className="untree_co-section">
        <div className="container my-5">
          <div className="mb-5">
            <OwlCarousel margin={10} items={3} loop nav className="owl-slider">
              <img
                src="images/slider-1.jpg"
                alt="Free HTML Template by Untree.co"
                className="img-fluid"
              />
              <img
                src="images/slider-2.jpg"
                alt="Free HTML Template by Untree.co"
                className="img-fluid"
              />
              <img
                src="images/slider-4.jpg"
                alt="Free HTML Template by Untree.co"
                className="img-fluid"
              />
            </OwlCarousel>
          </div>
        </div>
      </div>
    </>
  );
}

export default PhotosSection;
