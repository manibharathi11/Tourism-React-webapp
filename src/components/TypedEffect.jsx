import React, { useState, useEffect } from "react";
import Typewriter from "react-typewriter-effect";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { Carousel } from "react-bootstrap";

function TypedEffect() {
  const [formData, setFormData] = useState({
    country: "",
    tourDate: "",
    numberOfPassenger: "",
  });

  const [typedContent, setTypedContent] = useState({
    content: "",
    countries: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const fetchTypedContent = async () => {
      try {
        const snapshot = await firebase
          .database()
          .ref("Typed effect")
          .once("value");
        if (snapshot.exists()) {
          const data = snapshot.val();
          setTypedContent(data);
        } else {
          console.error("Typed effect data not found in database");
        }
      } catch (error) {
        console.error("Error fetching typed effect data:", error);
      }
    };

    fetchTypedContent();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const database = firebase.database();
      const ref = database.ref("Booked_TOUR");
      await ref.push(formData);
      console.log("Data submitted successfully!");
      setSuccessMessage("Form submitted successfully!");
      setFormData({
        country: "",
        tourDate: "",
        numberOfPassenger: "",
      });
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="intro-wrap">
                <h1>
                  {typedContent.content && <span>{typedContent.content}</span>}
                  {typedContent.countries && (
                    <Typewriter text={typedContent.countries} />
                  )}
                </h1>

                <div className="row">
                  <div className="col-12">
                    <form className="form" onSubmit={handleSubmit}>
                      <div className="row mb-2">
                        <div className="col-sm-12 col-md-6 mb-3 mb-lg-0 col-lg-4">
                          <select
                            name="country"
                            className="form-control custom-select"
                            value={formData.country}
                            onChange={handleChange}
                          >
                            <option value="">Destination</option>
                            <option value="United States">United States</option>
                            <option value="Malaysia">Malaysia</option>
                            <option value="Switzerland">Switzerland</option>
                            <option value="Italy">Italy</option>
                            <option value="Paris">Paris</option>
                          </select>
                        </div>
                        <div className="col-sm-12 col-md-6 mb-3 mb-lg-0 col-lg-5">
                          <input
                            type="date"
                            className="form-control"
                            id="tourDate"
                            name="tourDate"
                            value={formData.tourDate}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-sm-12 col-md-6 mb-3 mb-lg-0 col-lg-3">
                          <input
                            type="text"
                            className="form-control"
                            name="numberOfPassenger"
                            placeholder="no of People"
                            value={formData.numberOfPassenger}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="row align-items-center">
                        <div className="col-sm-12 col-md-6 mb-3 mb-lg-0 col-lg-4">
                          <input
                            type="submit"
                            className="btn btn-primary btn-block"
                            defaultValue="Search"
                          />
                        </div>
                        <div className="col-lg-8">
                          {successMessage && (
                            <div className="alert alert-success mt-2">
                              {successMessage}
                            </div>
                          )}
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <Carousel
                controls={false}
                indicators={false}
                interval={4000}
                fade
              >
                <Carousel.Item>
                  <img
                    className="d-block w-100 img-fluid capsule-image"
                    src="images/hero-slider-1.jpg"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 img-fluid capsule-image"
                    src="images/hero-slider-2.jpg"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 img-fluid capsule-image"
                    src="images/hero-slider-3.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 img-fluid capsule-image"
                    src="images/hero-slider-4.jpg"
                    alt="Fourth slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 img-fluid capsule-image"
                    src="images/hero-slider-5.jpg"
                    alt="Fifth slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .capsule-image {
          border-radius: 40%;
          max-width: 90%;
          height: auto;
        }
      `}</style>
    </>
  );
}

export default TypedEffect;
