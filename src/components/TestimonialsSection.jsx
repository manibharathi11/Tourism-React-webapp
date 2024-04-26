import React from "react";
import "../css/style.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { Carousel } from "react-responsive-carousel";
function TestimonialsSection() {
  return (
    <>
      <div className="untree_co-section testimonial-section mt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <h2 className="section-title text-center mb-5">Testimonials</h2>
              <Carousel width={"400px"}>
                <div className="testimonial mx-auto">
                  <figure className="img-wrap">
                    <img
                      src="images/person_2.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </figure>
                  <h3 className="name">Adam Aderson</h3>
                  <blockquote>
                    <p>
                      “There live the blind texts. Separated they live in
                      Bookmarksgrove right at the coast of the Semantics, a
                      large language ocean.”
                    </p>
                  </blockquote>
                </div>
                <div className="testimonial mx-auto">
                  <figure className="img-wrap">
                    <img
                      src="images/person_3.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </figure>
                  <h3 className="name">Lukas Devlin</h3>
                  <blockquote>
                    <p>
                      “There live the blind texts. Separated they live in
                      Bookmarksgrove right at the coast of the Semantics, a
                      large language ocean.”
                    </p>
                  </blockquote>
                </div>
                <div className="testimonial mx-auto">
                  <figure className="img-wrap">
                    <img
                      src="images/person_4.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </figure>
                  <h3 className="name">Kayla Bryant</h3>
                  <blockquote>
                    <p>
                      “There live the blind texts. Separated they live in
                      Bookmarksgrove right at the coast of the Semantics, a
                      large language ocean.”
                    </p>
                  </blockquote>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestimonialsSection;
