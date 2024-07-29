import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function TestimonialsSection() {
  const [testimonialContent, setTestimonialContent] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    const fetchTestimonialContent = async () => {
      try {
        const snapshot = await firebase
          .database()
          .ref("Testimonials")
          .once("value");
        if (snapshot.exists()) {
          const data = snapshot.val();

          const { title, content } = data;

          setTestimonialContent({
            title: title || "",
            description: content || "",
          });
        } else {
          console.error("About section content not found in database");
        }
      } catch (error) {
        console.error("Error fetching about section content:", error);
      }
    };

    fetchTestimonialContent();
  }, []);

  return (
    <div className="untree_co-section testimonial-section mt-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center">
            <h2 className="section-title text-center mb-5">
              {testimonialContent.title}
            </h2>
            <Carousel
              autoPlay={true}
              interval={2500} // Change the interval as per your preference
              infiniteLoop={true}
              showArrows={true} // Display arrows for navigation
              showStatus={false}
              showIndicators={false} // Hide indicators
            >
              <div className="testimonial mx-auto">
                <figure className="img-wrap ">
                  <img
                    src="images/person_2.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </figure>
                <h3 className="name">Adam Aderson</h3>
                <blockquote>
                  <p className="text-justify">
                    “Amazing service! Our Paris trip was unforgettable thanks to
                    the meticulous planning and great recommendations from the
                    travel agency.”
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
                  <p className="text-justify">
                    “Seamless experience from start to finish. Highly recommend
                    for anyone looking to explore Paris with expert guidance.”
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
                  <p className="text-justify">
                    “Outstanding customer service and detailed itineraries. Our
                    Paris vacation was perfect, thanks to this incredible travel
                    agency!”
                  </p>
                </blockquote>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsSection;
