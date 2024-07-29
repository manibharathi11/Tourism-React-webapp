import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";

function SpecialOffer() {
  const [specialOffers, setSpecialOffers] = useState([]);
  const [specialOfferTitle, setSpecialOfferTitle] = useState("");
  const [specialOfferContent, setSpecialOfferContent] = useState("");

  useEffect(() => {
    const fetchSpecialOffers = async () => {
      try {
        const snapshot = await firebase
          .database()
          .ref("Special_offer")
          .once("value");

        if (snapshot.exists()) {
          const data = snapshot.val();
          setSpecialOfferTitle(data.title || "");
          setSpecialOfferContent(data.content || "");

          // Convert object to array
          const specialOffersArray = Object.values(data)
            .filter((item) => typeof item === "object")
            .map((item) => ({
              id: item.id,
              country: item.country,
              place: item.place,
              rupees: item.rupees,
            }));
          setSpecialOffers(specialOffersArray);
        } else {
          console.error("Special offer data not found in database");
        }
      } catch (error) {
        console.error("Error fetching special offer data:", error);
      }
    };

    fetchSpecialOffers();
  }, []);

  return (
    <>
      <div className="untree_co-section">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-6">
              <h2 className="section-title text-center mb-3">
                {specialOfferTitle}
              </h2>
              <p className="text-justify">{specialOfferContent}</p>
            </div>
          </div>
          <div className="row">
            {specialOffers.map((offer) => (
              <div
                key={offer.id}
                className="col-6 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0"
              >
                <div className="media-1">
                  <a href="#" className="d-block mb-3">
                    <img
                      src={`images/hero-slider-${offer.id}.jpg`}
                      alt="Image"
                      className="img-fluid"
                    />
                  </a>
                  <span className="d-flex align-items-center loc mb-2">
                    <span className="icon-room mr-3" />
                    <span>{offer.country}</span>
                  </span>
                  <div className="d-flex align-items-center">
                    <div>
                      <h3>
                        <a href="#">{offer.place}</a>
                      </h3>
                      <div className="price ml-auto">
                        <span>{offer.rupees}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SpecialOffer;
